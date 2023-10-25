import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ClainTokenIcon from "@launchpad/assets/icons/claim_tokens.png";
import { detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";
import { claim } from "@launchpad/contracts/rocket";
import { contract_methods } from "@launchpad/contracts/constant";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@launchpad/config/config";
import { getHolderById } from "@launchpad/helpers/requests/getHoldersById";
import { useRouter } from "next/router";
import Image from "next/image";

interface ClaimTokens {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    amount: number | string;
    completed_cycle: number;
}
const ClaimTokens = ({ showModal, setShowModal, amount, completed_cycle }: ClaimTokens) => {
    const [account, setAccount] = useState("");

    const params = useRouter().query;

    const handleModalCLick = () => {
        setShowModal(!showModal);
    };

    const getAcount = async () => {
        const provider = await detectConcordiumProvider();
        let acc = await provider.getMostRecentlySelectedAccount();
        acc = acc?.toString();
        if (acc) {
            setAccount(acc);
        }
    };

    const claimToken = async () => {
        const id = params.id;

        const param = {
            epoch_cycle: completed_cycle + 1,
            id: "01",
            address: {
                index: 5112, // cis2 token address
                subindex: 0,
            },
            launchpad_id: Number(id),
        };
        // eslint-disable-next-line

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: any = await claim(param, contract_methods.CLAIM);
        if (result?.summary.transactionType === "failed") {
            alert("Transaction failed");
        } else {
            await updateHolderInDB();
            alert("Transaction success");
        }
        handleModalCLick();
    };

    const updateHolderInDB = async () => {
        const getCurrentHolder = await getHolderById(params.id as string, account);

        const data = { ...getCurrentHolder };

        data.cycle_completed += 1;
        delete data.doc_id;
        const ref = collection(db, "holders");
        await setDoc(doc(ref, getCurrentHolder.doc_id), data);
    };

    useEffect(() => {
        getAcount();
    });

    if (!showModal) {
        return;
    }
    return (
        <>
            <div className="fixed top-2/4 bottom-0 px-8 right-0 left-0 w-full h-full  m-auto min-h-fit z-30">
                <div className="flex justify-center relative">
                    <div className="flex flex-col items-center w-full sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] max-w-lg bg-app-black rounded-xl">
                        <div className="flex w-full justify-end">
                            <button
                                className="bg-app-black-select p-4 rounded-lg hover:bg-app-black-duration cursor-pointer closeIcon"
                                onClick={() => setShowModal(false)}
                            >
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        d="M1 1L6.5 6.5M12 12L6.5 6.5M6.5 6.5L1 12L12 1"
                                        stroke="#717A8B"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="flex mb-4 border-2 border-dashed rounded-full border-emerald-500"
                            style={{
                                width: "130px",
                                height: "130px",
                                paddingTop: "13px",
                                paddingRight: "14px",
                                paddingBottom: "14px",
                                paddingLeft: "14px",
                            }}
                        >
                            <div
                                className="flex px-2 py-3 rounded-full bg-emerald-500"
                                style={{ width: "100px", height: "100px" }}
                            >
                                <Image src={ClainTokenIcon} alt="claimToken" />
                            </div>
                        </div>
                        <div className="flex justify-center m-5">
                            <div className="text-2xl font-semibold text-center">About To Claim Tokens</div>
                        </div>
                        <div className="flex w-full flex-col mb-14">
                            <div className="flex justify-between bg-app-black-select px-4 py-1 h-14 rounded-md items-center">
                                <p className="uppercase">Amount:</p>
                                <p className="uppercase text-app-blue font-medium">{amount} Pixp</p>
                            </div>
                            <h4 className="text-2xl font-semibold my-4 mx-auto">To</h4>
                            <div className="flex justify-between bg-app-black-select px-4 py-1 h-14 rounded-md items-center">
                                <p className="uppercase">Wallet Id:</p>
                                <p className="uppercase text-app-blue">
                                    {account.slice(0, 5)}... {account.slice(-5)}{" "}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center w-full gap-4">
                            <div
                                className="flex items-center justify-center w-full h-14 py-5 rounded-lg cursor-pointer bg-app-green hover:bg-app-green-hover"
                                onClick={() => claimToken}
                            >
                                <div className="text-base font-medium 2xs:text-lg">Confirm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClaimTokens;
