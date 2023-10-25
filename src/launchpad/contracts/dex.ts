/* eslint-disable @typescript-eslint/no-explicit-any */
import { SmartContractParameters, detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";
import { SIMPLE_DEX_SCHEMA, SUB_INDEX, SIMPLE_DEX, MAX_CONTRACT_EXECUTION_ENERGY, SIMPLE_DEX_INDEX } from "./constant";
import { AccountTransactionType, CcdAmount } from "@concordium/web-sdk";
import { Buffer } from "buffer/index.js";
// import { ContractContext } from "@concordium/web-sdk";

/* global BigInt */

const initialize = async () => {
    const provider = await detectConcordiumProvider();
    const account = await provider.getMostRecentlySelectedAccount();

    return { provider, account };
};

const call_contract = async (
    param: string | number | boolean | { [key: string]: SmartContractParameters } | SmartContractParameters[],
    method: string,
    amount: string | number | bigint | boolean
) => {
    const { provider, account } = await initialize();
    const rpc = provider.getGrpcClient();

    if (!account) {
        alert("Please connect");
    }

    try {
        const schemaBuffer = Buffer.from(SIMPLE_DEX_SCHEMA, "base64");
        // const serializedParams = serializeUpdateContractParameters(
        //     SIMPLE_DEX,
        //     method,
        //     param,
        //     schemaBuffer,
        //     SchemaVersion.V1
        // );
        if (account && amount) {
            const txnHash = await provider.sendTransaction(
                account,
                AccountTransactionType.Update,
                {
                    address: {
                        index: SIMPLE_DEX_INDEX,
                        subindex: SUB_INDEX,
                    },
                    // message: serializedParams,
                    amount: new CcdAmount(BigInt(amount)),
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    receiveName: `${SIMPLE_DEX}.${method}`,
                    maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
                },
                param,
                schemaBuffer.toString("base64")
            );

            const tx_finalization = await rpc.waitForTransactionFinalization(txnHash);
            return tx_finalization;
        }
    } catch (err) {
        console.log(err);
    }
};

export const buy = async (param: any) => {
    await call_contract(param, "buy", 0);
};
