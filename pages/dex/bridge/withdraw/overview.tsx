import type { NextPage } from "next";
import TransferOverview, {
    TransferOverviewLine,
    useTransferOverviewStatusState,
} from "@dex/components/templates/transfer-overview";
import { FC, useEffect, useMemo, useState } from "react";
import useCCDWallet from "@dex/hooks/use-ccd-wallet";
import useCCDContract from "@dex/contracts/use-ccd-contract";
import { routes } from "@dex/constants/routes";
import useEthWallet from "@dex/hooks/use-eth-wallet";
import { useRouter } from "next/router";
import { useNextMerkleRoot } from "@dex/api-query/queries";
import moment from "moment";
import { useTransactionFlowStore } from "@dex/store/transaction-flow";
import { Components } from "@dex/api-query/__generated__/AxiosClient";
import { ensureDefined, noOp } from "@dex/helpers/basic";
import { useAsyncMemo } from "@dex/hooks/utils";
import { getPrice } from "@dex/helpers/price-usd";
import { getEnergyToMicroCcdRate, waitForTransactionFinalization } from "@dex/helpers/ccd-node";
import transactionCosts from "@dex/config/transaction-cost";
import useRootManagerContract from "@dex/contracts/use-root-manager";
import { renderEnergyFeeEstimate, renderGasFeeEstimate } from "@dex/helpers/fee";
import Text from "@dex/components/atoms/text/text";
import { useSubmittedWithdrawalsStore } from "@dex/store/submitted-transactions";
import Layout from "@dex/components/templates/Layout";

const LINE_DETAILS_FALLBACK = "...";

let withdrawEnergyDefault: bigint;
if (transactionCosts.ccd.bridgeManagerWithdrawEnergy) {
    withdrawEnergyDefault = BigInt(transactionCosts.ccd.bridgeManagerWithdrawEnergy);
}

type ApprovalAllowanceLineProps = {
    hasAllowance: boolean;
    token: Components.Schemas.TokenMapItem;
    ccdPrice: number;
    microCcdPerEnergy?: bigint;
};

const ApprovalAllowanceLine: FC<ApprovalAllowanceLineProps> = ({
    hasAllowance,
    token,
    ccdPrice,
    microCcdPerEnergy,
}) => {
    const { ccdContext } = useCCDWallet();
    const { estimateApprove } = useCCDContract(ccdContext.account, !!ccdContext.account);
    const [error, setError] = useState<string>();
    const microCcdFee = useAsyncMemo(
        async () => {
            if (microCcdPerEnergy === undefined) {
                return undefined;
            }

            const energy = await estimateApprove(token);
            if (energy === undefined) {
                return undefined;
            }

            return microCcdPerEnergy * energy.exact;
        },
        () => setError("Could not get fee estimate"),
        [token, microCcdPerEnergy]
    );

    const details = useMemo(
        () =>
            microCcdFee !== undefined ? renderEnergyFeeEstimate(microCcdFee, ccdPrice) : error || LINE_DETAILS_FALLBACK,
        [microCcdFee, ccdPrice, error]
    );

    return (
        <TransferOverviewLine
            title={`Add operator for ${token.ccd_name}`}
            details={details}
            completed={hasAllowance}
            isEth={false}
        />
    );
};

type WithdrawLineProps = {
    hasAllowance: boolean;
    token: Components.Schemas.TokenMapItem;
    amount: bigint;
    ethAccount: string;
    ccdPrice: number;
    microCcdPerEnergy: bigint | undefined;
};

const WithdrawLine: FC<WithdrawLineProps> = ({
    token,
    amount,
    ethAccount,
    ccdPrice,
    microCcdPerEnergy,
    hasAllowance,
}) => {
    const { ccdContext } = useCCDWallet();
    const { estimateWithdraw } = useCCDContract(ccdContext.account, !!ccdContext.account);
    const [error, setError] = useState<string>();
    const microCcdFee = useAsyncMemo(
        async () => {
            if (microCcdPerEnergy === undefined) {
                return undefined;
            }

            let energy: bigint;
            try {
                const estimate = await estimateWithdraw(amount, token, ethAccount);
                energy = estimate?.exact ?? withdrawEnergyDefault;
            } catch {
                energy = withdrawEnergyDefault;
            }

            return microCcdPerEnergy * energy;
        },
        () => setError("Could not get fee estimate"),
        [token, microCcdPerEnergy, hasAllowance]
    );

    const details = useMemo(
        () =>
            microCcdFee !== undefined ? renderEnergyFeeEstimate(microCcdFee, ccdPrice) : error || LINE_DETAILS_FALLBACK,
        [microCcdFee, ccdPrice, error]
    );

    return (
        <TransferOverviewLine title={`Withdraw ${token.ccd_name}`} details={details} isEth={false} completed={false} />
    );
};

type ApproveWithdrawLineProps = {
    token: Components.Schemas.TokenMapItem;
};

const ApproveWithdrawLine: FC<ApproveWithdrawLineProps> = ({ token }) => {
    const [error, setError] = useState<string>();
    const ethPrice = useAsyncMemo(async () => getPrice("ETH"), noOp, []) ?? 0;
    const { getDefaultWithdrawEstimate } = useRootManagerContract();
    const fee = useAsyncMemo(
        async () => {
            const g = await getDefaultWithdrawEstimate(token);
            const gas = ensureDefined(g, "Could not estimate gas");
            return parseFloat(gas);
        },
        () => setError("Could not estimate gas"),
        [token]
    );

    const details = useMemo(
        () => (fee !== undefined ? `${renderGasFeeEstimate(fee, ethPrice)}*` : error || LINE_DETAILS_FALLBACK),
        [fee, ethPrice, error]
    );

    return (
        <TransferOverviewLine isEth title={`Approve withdraw ${token.eth_name}`} details={details} completed={false} />
    );
};

const WithdrawOverview: NextPage = () => {
    const { ccdContext } = useCCDWallet();
    const { context } = useEthWallet();
    const { prefetch, replace } = useRouter();
    const { data: nextMerkleRoot, isLoading } = useNextMerkleRoot();
    const { amount, token } = useTransactionFlowStore();
    const { status, setInfo, setError } = useTransferOverviewStatusState();
    const [needsAllowance, setNeedsAllowance] = useState<boolean | undefined>();
    const ccdPrice = useAsyncMemo(async () => getPrice("CCD"), noOp, []) ?? 0;
    const microCcdPerEnergy = useAsyncMemo(getEnergyToMicroCcdRate, noOp, []);
    const { add: addSubmitted } = useSubmittedWithdrawalsStore();
    const [pendingSignature, setPendingSignature] = useState(false);

    const {
        withdraw: ccdWithdraw,
        approve: ccdApprove,
        hasApprove,
        estimateApprove,
        estimateWithdraw,
    } = useCCDContract(ccdContext.account, !!ccdContext.account);

    const timeToComplete = useMemo(() => {
        if (!isLoading && !nextMerkleRoot) {
            return "Could not get an estimated processing time";
        }
        if (nextMerkleRoot !== undefined) {
            const nextMerkleRootRelativeTime = moment(nextMerkleRoot * 1000).fromNow();
            return `Withdrawal expected to be ready for approval ${nextMerkleRootRelativeTime}`;
        }

        return "Getting estimated withdrawal processing time";
    }, [nextMerkleRoot, isLoading]);

    useEffect(() => {
        if (token !== undefined) {
            hasApprove({
                index: token.ccd_contract?.index as number,
                subindex: token.ccd_contract?.subindex as number,
            }).then((allowance) => setNeedsAllowance(!allowance));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (!amount || !token || !context.account) {
            replace(routes.withdraw.path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //
    // Check necessary values are present from transfer page. These will not be available if this is the first page loaded in the browser.
    if (!amount || !token || !context.account) {
        return null;
    }

    const requestWithdrawApproval = async () => {
        try {
            const approvalFee = await estimateApprove(token);

            setPendingSignature(true);
            setInfo("Awaiting allowance approval in Concordium wallet");
            let hash;
            if (approvalFee?.conservative) {
                hash = await ccdApprove(token, approvalFee?.conservative as bigint);
            }
            setPendingSignature(false);

            setInfo("Waiting for transaction to finalize");
            let hasApproval;
            if (hash) {
                hasApproval = await waitForTransactionFinalization(hash);
            }

            setNeedsAllowance(false);
            return hasApproval;
        } catch {
            // Either the allowance approval was rejected, or a timeout happened while polling for allowance approval finalization
            setPendingSignature(false);
            setError("Allowance appproval rejected");

            return false;
        }
    };

    /**
     * Handles submission of the withdraw transaction.
     */
    const onSubmit = async (): Promise<string | undefined> => {
        if (!context?.account) {
            throw new Error("Expected eth account to be available");
        }

        if (needsAllowance && !(await requestWithdrawApproval())) {
            return undefined;
        }

        let hash: string | undefined;
        try {
            const withdrawFee = await estimateWithdraw(amount, token, context.account);

            setPendingSignature(true);
            setInfo("Awaiting signature in Concordium wallet for withdrawal");
            if (withdrawFee?.conservative) {
                hash = await ccdWithdraw(amount, token, context.account, withdrawFee?.conservative as bigint);
            }
            if (hash) {
                prefetch(routes.withdraw.tx(hash));
            }
        } catch {
            setError("Transaction was rejected");
        } finally {
            setPendingSignature(false);
        }

        if (hash === undefined) {
            return;
        }
        try {
            setInfo("Waiting for transaction to finalize");
            await waitForTransactionFinalization(hash); // Wait for transaction finalization, as we do in the deposit flow.
            addSubmitted(context.account, hash, amount, token);

            return hash;
        } catch {
            setError("Could not get transaction status for withdrawal");
        }
    };

    return (
        <Layout>
            <TransferOverview
                title="Withdrawal overview"
                handleSubmit={onSubmit}
                timeToComplete={timeToComplete}
                status={status}
                pendingWalletSignature={pendingSignature}
                isDeposit={false}
            >
                <ApprovalAllowanceLine
                    hasAllowance={needsAllowance === false}
                    token={token}
                    ccdPrice={ccdPrice}
                    microCcdPerEnergy={microCcdPerEnergy}
                />
                <br />
                <WithdrawLine
                    hasAllowance={needsAllowance === false}
                    token={token}
                    ccdPrice={ccdPrice}
                    microCcdPerEnergy={microCcdPerEnergy}
                    ethAccount={context.account}
                    amount={amount}
                />
                <br />
                <ApproveWithdrawLine token={token} />
                <Text
                    fontFamily="Roboto"
                    fontSize="9"
                    fontWeight="light"
                    fontColor="DarkGrey"
                    fontLetterSpacing="0"
                    align={"center"}
                >
                    *Price is based on history of transactions of similar types and can vary depending on network
                    activity at the time of the transaction
                </Text>
                <div style={{ marginTop: 12 }} />
            </TransferOverview>
        </Layout>
    );
};

export default WithdrawOverview;
