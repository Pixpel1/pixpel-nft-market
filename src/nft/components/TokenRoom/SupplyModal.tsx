import React from "react";
import Supply from "@public/assets/images/supply.svg";
import Close from "@public/assets/images/close.svg";
import Calculation from "../StakingPortfolio/Calculation";
import Image from "next/image";

interface SupplyModal {
    setShowModal: (val: boolean) => void;
    showModal: boolean;
}
const SupplyModal = ({ showModal, setShowModal }: SupplyModal) => {
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-x-auto">
                        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
                        <div className="flex items-center px-4 py-6 min-h-screen">
                            <div className="relative flex flex-col w-full max-w-3xl mx-auto bg-app-black-modal rounded-xl shadow-lg px-16 pt-11 pb-28">
                                <div className="flex justify-between">
                                    <div />
                                    <div
                                        className="bg-app-black-button px-5 py-5 rounded-lg w-max cursor-pointer"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <Image src={Close} alt="close" />
                                    </div>
                                </div>
                                <div className="flex justify-center -mt-5">
                                    <Image src={Supply} alt="Supply" />
                                </div>
                                <div className="flex justify-center text-2xl mt-9 mb-16">Supply Info</div>
                                <div className="flex justify-center gap-10 mb-11">
                                    <div className="bg-app-black-button py-4 px-16 rounded-md text-xl">Name: PIXP</div>
                                    <div className="bg-app-black-button py-4 px-16 rounded-md text-xl">ABBR: PIXP</div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <Calculation title="Total Supply:" cost="6.000.000 PIXP" />
                                    <Calculation title="Supply Division:" cost="6" />
                                    <Calculation title="Hard Cap:" cost="3.000.000 PIXP" />
                                    <Calculation title="Soft Cap" cost="2.000.000" />
                                    <Calculation title="Nature" cost="Deflationary" />
                                    <Calculation title="Create new Token fee:" cost="20 USD" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default SupplyModal;
