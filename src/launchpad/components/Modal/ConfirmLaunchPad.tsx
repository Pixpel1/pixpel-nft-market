import React, { SetStateAction, Dispatch } from "react";
import { Button } from "antd";
import PublishAlertIcon from "@launchpad/assets/developer/icons/publish_launchpad.png";
import Image from "next/image";

interface ConfirmLaunchPad {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    onClickConfirm: () => void;
    loadings: boolean;
    setLoadings: Dispatch<SetStateAction<boolean>>;
    totalFee: string | number;
}

const ConfirmLaunchPad = ({
    showModal,
    setShowModal,
    onClickConfirm,
    loadings,
    setLoadings,
    totalFee,
}: ConfirmLaunchPad) => {
    const handleModalCLick = () => {
        setShowModal(!showModal);
    };

    const handleConfirmClick = () => {
        setLoadings(true);
        onClickConfirm();
    };
    return (
        <>
            {showModal && (
                <div className="fixed top-2/4 bottom-0 px-8 right-0 left-0 w-full h-full  m-auto min-h-fit z-30">
                    <div className="flex justify-center relative">
                        <div className="flex flex-col items-center w-full sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] max-w-xl bg-app-black-modal rounded-xl">
                            <div className="flex px-2 py-3">
                                <Image src={PublishAlertIcon} alt="claimToken" />
                            </div>
                            <div className="flex justify-center m-5">
                                <div className="text-xl font-semibold text-center">
                                    Are you sure you want to publish this offer?
                                </div>
                            </div>
                            <div className="flex w-full flex-col mb-14 px-20 list-disc divide-y">
                                <div className="flex justify-between px-4 py-1 h-14 items-center">
                                    <p className="uppercase text-lg font-semibold">Fee:</p>
                                    <p className="uppercase text-app-blue text-lg font-semibold">{totalFee} CCD</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center w-full gap-4">
                                <Button
                                    className="flex items-center justify-center w-full h-14 py-5 rounded-lg cursor-pointer bg-app-green hover:bg-app-green-hover"
                                    loading={loadings}
                                    onClick={handleConfirmClick}
                                >
                                    <div className="text-base font-medium 2xs:text-lg">Confirm</div>
                                </Button>

                                <div
                                    className={
                                        "flex items-center justify-center w-full h-14 py-5 rounded-lg cursor-pointer bg-app-black hover:bg-app-black-select " +
                                        (loadings ? "pointer-events-none" : "")
                                    }
                                    onClick={() => {
                                        handleModalCLick();
                                    }}
                                >
                                    <div className="text-base font-medium 2xs:text-lg">Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmLaunchPad;
