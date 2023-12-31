import React from "react";
import DropDownButton from "../../DropDown/DropDownButton";
import { durationList } from "./dataList";

interface FixPriceModal {
    showModal: boolean;
    setShowModal: (val: boolean) => void;
}

const FixPriceModal = ({ showModal, setShowModal }: FixPriceModal) => {
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-x-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center px-4 py-6 min-h-screen">
                            <div className="relative flex flex-col w-full max-w-xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg">
                                <div className="flex items-center justify-center mb-6 text-2xl">
                                    FIX PRICEING LISTING
                                </div>
                                <div className="text-xl mt-6 mb-3">Quantity:</div>
                                <div className="flex justify-between bg-app-black rounded py-5 px-5 mb-2">
                                    <div>100</div>
                                    <div className="text-app-blue">MAX</div>
                                </div>
                                <div className="flex justify-end text-gray-400 mb-5">Remain: 0</div>
                                <div className="text-xl mb-3">Duration:</div>
                                <DropDownButton
                                    initialContent={durationList[0].title}
                                    contentList={durationList}
                                    backgroundColor="bg-app-black"
                                    fontSize={""}
                                    textColor={""}
                                />
                                <div className="text-xl mt-6 mb-3">Price:</div>
                                <div className="flex justify-between bg-app-black rounded py-5 px-5 mb-2">
                                    <div>200 PIXP</div>
                                    <div className="text-app-blue">MAX</div>
                                </div>
                                <div className="flex justify-end text-gray-400 mb-5">Remain: 0</div>
                                <div className="flex justify-center items-center mt-8">
                                    <div
                                        className="px-10 py-4 cursor-pointer w-max bg-app-blue rounded-md"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Confirm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default FixPriceModal;
