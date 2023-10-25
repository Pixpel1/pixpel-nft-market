import React, { Dispatch, SetStateAction } from "react";
import PublishAlertIcon from "@launchpad/assets/developer/icons/publish_launchpad.png";
import { cancel } from "@launchpad/contracts/rocket";
import { contract_methods } from "@launchpad/contracts/constant";
import { message } from "antd";
import { getSelectedRocket } from "@launchpad/helpers/requests/getSelectedRocket";
import { db } from "@launchpad/config/config";
import { collection, doc, setDoc } from "firebase/firestore";
import Image from "next/image";

interface CancelFunding {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    id: string | number;
}
const CancelFunding = ({ showModal, setShowModal, id }: CancelFunding) => {
    const [messageApi, contextHolder] = message.useMessage();

    const handleModalCLick = async () => {
        if (!id) alert("invalid id");

        const param = {
            launchpad_id: Number(id),
            token: {
                id: "01",
                address: {
                    index: 5112,
                    subindex: 0,
                },
            },
        };

        // eslint-disable-next-line
        const result: any = await cancel(param, contract_methods.CANCEL);
        if (!result) {
            messageApi.open({
                type: "error",
                content: "Transaction failed due to unable serialize param",
                duration: 10,
            });
            setShowModal(!showModal);
            return;
        }
        if (result.summary.transactionType === "failed") {
            messageApi.open({
                type: "error",
                content: "Transaction failed",
                duration: 10,
            });
        } else {
            const getCurrentRocket = await getSelectedRocket(id as string);
            // eslint-disable-next-line
            const rocketData: any = { ...getCurrentRocket };
            delete rocketData.id;

            rocketData.cancel = true;

            const rocketRef = collection(db, "rockets");

            await setDoc(doc(rocketRef, getCurrentRocket?.id), rocketData);

            messageApi.open({
                type: "success",
                content: "Transaction success",
                duration: 10,
            });
        }
        setShowModal(!showModal);
    };
    if (!showModal) {
        return;
    }
    return (
        <>
            {contextHolder}
            <div className="fixed top-2/4 bottom-0 px-8 right-0 left-0 w-full h-full  m-auto min-h-fit z-30">
                <div className="flex justify-center relative">
                    <div className="flex flex-col items-center w-full sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] max-w-lg bg-app-black-modal rounded-xl">
                        <div className="flex px-2 py-3">
                            <Image src={PublishAlertIcon} alt="claimToken" />
                        </div>
                        <div className="flex justify-center m-5">
                            <div className="text-lg text-center">
                                Warning: If you cancel this launchpad, all funds will be returned to investors, and you
                                will still be responsible for the fees of launchpad creation and cancellation.
                            </div>
                        </div>
                        <div className="flex justify-center m-5">
                            <div className="text-2xl font-semibold text-center">
                                Are you sure you want to proceed with cancellation?
                            </div>
                        </div>

                        <div className="flex flex-row justify-center w-full gap-4 px-24 my-10">
                            <div
                                className="flex items-center justify-center w-full h-14 py-5 rounded-lg cursor-pointer bg-app-green hover:bg-app-green-hover"
                                onClick={() => {
                                    handleModalCLick();
                                }}
                            >
                                <div className="text-base font-medium 2xs:text-lg">Yes</div>
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-14 py-5 rounded-lg cursor-pointer bg-app-black hover:bg-app-black-select"
                                onClick={() => {
                                    setShowModal(false);
                                }}
                            >
                                <div className="text-base font-medium 2xs:text-lg">No</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CancelFunding;
