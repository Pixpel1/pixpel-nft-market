import React, { Dispatch, SetStateAction } from "react";
import ok from "@launchpad/assets/icons/ok.svg";
import Image from "next/image";

interface StakingModal {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
const StakingSuccessModal = ({ showModal, setShowModal }: StakingModal) => {
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-x-auto">
                        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
                        <div className="flex items-center px-4 py-6 min-h-screen">
                            <div className="relative flex flex-col w-full max-w-xl items-center mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg">
                                <Image src={ok} alt="OK" className="mb-8" />
                                <div className="text-3xl mb-14">Your Staking is done</div>
                                <div
                                    className="py-5 px-20 bg-app-blue cursor-pointer rounded-md mb-9"
                                    onClick={() => setShowModal(false)}
                                >
                                    OK
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default StakingSuccessModal;
