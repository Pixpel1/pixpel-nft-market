import { NextPage } from "next";
import TransferProgress from "@dex/components/templates/transfer-progress";
import { useWatchDeposit } from "@dex/api-query/queries";
import { useRouter } from "next/router";
import { QueryRouter } from "@dex/types/config";
import { routes } from "@dex/constants/routes";
import { useEffect } from "react";
import Layout from "@dex/components/templates/Layout";

type Query = {
    tx: string;
};

const DepositTransactionStatus: NextPage = () => {
    const {
        query: { tx },
        isReady,
        replace,
    } = useRouter() as QueryRouter<Query>;
    const { data } = useWatchDeposit(tx !== undefined ? { tx_hash: tx } : undefined, {
        enabled: tx !== undefined,
    });

    useEffect(() => {
        if (tx === undefined && isReady) {
            replace(routes.deposit.path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady, tx]);

    return (
        <Layout heading="Deposit In Progress">
            <TransferProgress
                isWithdraw={false}
                disableContinue={false}
                transferStatus={data ? data?.status : "pending"}
            />
        </Layout>
    );
};

export default DepositTransactionStatus;
