/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";
import { CIS2_RAW_SCHEMA, SUB_INDEX, CIS2_CONTRACT_NAME, MAX_CONTRACT_EXECUTION_ENERGY, CIS2_INDEX } from "./constant";
import {
    AccountTransactionType,
    CcdAmount,
    SchemaVersion,
    deserializeReceiveReturnValue,
    serializeUpdateContractParameters,
    toBuffer,
} from "@concordium/web-sdk";
import { Buffer } from "buffer/index.js";
// import { ContractContext } from "@concordium/web-sdk";

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
        const schemaBuffer = Buffer.from(CIS2_RAW_SCHEMA, "base64");
        // const serializedParams = serializeUpdateContractParameters(
        //     CIS2_CONTRACT_NAME,
        //     method,
        //     param,
        //     schemaBuffer,
        //     SchemaVersion.V1
        // );
        if (account) {
            const txnHash = await provider.sendTransaction(
                account,
                AccountTransactionType.Update,
                {
                    address: {
                        index: CIS2_INDEX,
                        subindex: SUB_INDEX,
                    },
                    // message: serializedParams,
                    amount: new CcdAmount(BigInt(amount)),
                    receiveName: `${CIS2_CONTRACT_NAME}.${method}`,
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

export const invoke = async (param: any, method: string) => {
    try {
        const { provider } = await initialize();

        const rpc = provider.getGrpcClient();

        const schemaBuffer = Buffer.from(CIS2_RAW_SCHEMA, "base64");
        console.log(param, method);
        const serializedParams = serializeUpdateContractParameters(
            CIS2_CONTRACT_NAME,
            method,
            param,
            schemaBuffer,
            SchemaVersion.V1
        );

        const context = {
            // Required
            method: `${CIS2_CONTRACT_NAME}.${method}`,
            contract: {
                index: CIS2_INDEX,
                subindex: SUB_INDEX,
            },
            parameter: serializedParams,
        };

        const data = await rpc.invokeContract(context);

        if (data.tag === "success") {
            const buffer = toBuffer(data.returnValue || "", "hex");

            const result = await deserializeReceiveReturnValue(
                buffer,
                Buffer.from(CIS2_RAW_SCHEMA, "base64"),
                CIS2_CONTRACT_NAME,
                method,
                SchemaVersion.V1
            );
            console.log(result);
            return result[0];
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
    }
};

export const mint = async (param: any, method: string) => {
    await call_contract(param, method, 0);
};

export const update_operator = async (param: any, method: string) => {
    await call_contract(param, method, 0);
};

export const balance_of = async (param: any, method: string) => {
    console.log(param, method);
    return invoke(param, method);
};

export const operator_of = async (param: any, method: string) => {
    return invoke(param, method);
};
