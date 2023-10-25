/* eslint-disable @typescript-eslint/no-explicit-any */
import { detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";
import { INDEX, RAW_SCHEMA_BASE64, SUB_INDEX, CONTRACT_NAME, MAX_CONTRACT_EXECUTION_ENERGY } from "./constant";
import {
    AccountTransactionType,
    CcdAmount,
    SchemaVersion,
    deserializeReceiveReturnValue,
    toBuffer,
} from "@concordium/web-sdk";
import { Buffer } from "buffer/index.js";

/* global BigInt */

const initialize = async () => {
    const provider = await detectConcordiumProvider();
    const account = await provider.getMostRecentlySelectedAccount();

    return { provider, account };
};

const call_contract = async (param: any, method: string, amount: string | number) => {
    const { provider, account } = await initialize();

    const rpc = provider.getGrpcClient();

    if (!account) {
        alert("Please connect");
    }

    try {
        const schemaBuffer = Buffer.from(RAW_SCHEMA_BASE64, "base64");
        // const serializedParams = serializeUpdateContractParameters(
        //     CONTRACT_NAME,
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
                        index: INDEX,
                        subindex: SUB_INDEX,
                    },
                    // message: serializedParams,
                    amount: new CcdAmount(BigInt(amount ?? 0)),
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    receiveName: `${CONTRACT_NAME}.${method}`,
                    maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
                },
                param,
                schemaBuffer.toString("base64")
            );

            const tx_finalization = await rpc.waitForTransactionFinalization(txnHash);
            console.log(tx_finalization);
            return tx_finalization;
        }
    } catch (err) {
        console.log(err);
    }
};

export const create_rocket = async (param: any, method: string, amount: string | number) => {
    return await call_contract(param, method, amount);
};

export const claim = async (param: any, method: string) => {
    return await call_contract(param, method, 0);
};

export const vest = async (param: any, method: string, amount: string | number) => {
    return await call_contract(param, method, amount);
};

export const is_live = async (param: any, method: string) => {
    return await call_contract(param, method, 0);
};

export const cancel = async (param: any, method: string) => {
    return await call_contract(param, method, 0);
};

export const view = async (method: string) => {
    try {
        const { provider, account } = await initialize();

        const rpc = provider.getGrpcClient();
        const context = {
            // Required
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            method: `${CONTRACT_NAME}.${method}`,
            contract: {
                index: INDEX,
                subindex: SUB_INDEX,
            },
        };

        const data = await rpc.invokeContract(context);

        if (data.tag === "success") {
            const buffer = toBuffer(data.returnValue || "", "hex");

            const result = await deserializeReceiveReturnValue(
                buffer,
                Buffer.from(RAW_SCHEMA_BASE64, "base64"),
                CONTRACT_NAME,
                method,
                SchemaVersion.V1
            );

            return { result, account };
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
    }
};
