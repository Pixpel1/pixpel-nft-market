import { useRouter } from "next/router";
import React, { useState } from "react";

function SetP2PProfile() {
    const [payment, setPayment] = useState("set");
    const navigate = useRouter();
    const handleClickArrow = () => {
        navigate.back();
    };
    return (
        <div>
            <div className="flex px-36 justify-center">
                <div className="flex w-full items-center justify-between">
                    <div
                        className="flex items-center justify-center cursor-pointer -mr-10 w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
                        onClick={handleClickArrow}
                    >
                        <svg
                            className="h-6 w-6 text-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="5" y1="12" x2="11" y2="18" />
                            <line x1="5" y1="12" x2="11" y2="6" />
                        </svg>
                    </div>
                    <p className="text-white text-2xl font-medium">Set P2P profile</p>
                    <div></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <p className="text-white text-base font-medium mt-3.5">Payment Methods</p>
                <p className="text-app-black-duration text-sm bg-app-black px-3 py-2 rounded-[5px] mt-6">
                    The payment method added will be displayed to buyer as option to accept payment.
                </p>

                {/* <div className="flex flex-col justify-center items-center w-full">
                    <div className="min-w-[958px] border-b border-[#37404C] pb-[18px]">
                        <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                            <div className="text-[14px] bg-transparent outline-none border-l border-l-4 border-[#0196C9] px-2">
                                UPI
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                            <div className="w-full">
                                <p className="text-[#FFFFFF73] text-[15px] ">Name:</p>
                                <input
                                    className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                    placeholder="Juan Vivas"
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-[#FFFFFF73] text-[15px] ">UPI ID:</p>
                                <input
                                    className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                    placeholder="juanvivas@venezuelanbank"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[33px] flex justify-center">
                        <button
                            className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-[20px] items-center gap-x-[5px] text-white text-[18px]"
                            onClick={() => setPayment("add")}
                        >
                            + Add Payment Method
                        </button>
                    </div>
                    <div className="flex gap-x-[50px] mt-[135px]">
                        <button className="text-[16px] text-white bg-app-black px-[68px] py-[15px] rounded-[5px]">
                            Cancel
                        </button>
                        <button className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px]">
                            Save
                        </button>
                    </div>
                </div> */}

                {payment === "add" ? (
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="min-w-[958px] border-b border-[#37404C] pb-[80px]">
                            <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                <div className="text-[14px] bg-transparent outline-none border-l border-l-4 border-[#2EBD85] px-2">
                                    Bank Transfer
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">Account holder name:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="Juan Vivas"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">Account number:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="juanvivas@venezuelanbank"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">IFSC code:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="Enter yur IFSC code"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">Account type:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="(savings or current)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-[50px] mt-[34px]">
                            <button
                                className="text-[16px] text-white bg-app-black px-[68px] py-[15px] rounded-[5px]"
                                onClick={() => setPayment("set")}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px]"
                                onClick={() => setPayment("save")}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ) : payment === "set" ? (
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="min-w-[958px] border-b border-[#37404C] pb-[18px]">
                            <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                <div className="text-sm font-medium bg-transparent outline-none border-l-4 border-app-blue px-2">
                                    UPI
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">Name:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="Juan Vivas"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">UPI ID:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="juanvivas@venezuelanbank"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[33px] flex justify-center">
                            <button
                                className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-2.5 items-center gap-x-[5px] text-white text-lg"
                                onClick={() => setPayment("add")}
                            >
                                + Add Payment Method
                            </button>
                        </div>
                        <div className="flex gap-x-[50px] mt-[135px]">
                            <button
                                className="text-[16px] text-white bg-app-black px-[68px] py-[15px] rounded-[5px]"
                                onClick={handleClickArrow}
                            >
                                Cancel
                            </button>
                            <button className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px]">
                                Save
                            </button>
                        </div>
                    </div>
                ) : payment === "save" ? (
                    <>
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="min-w-[958px] border-b border-[#37404C] pb-[18px]">
                                <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                    <div className="text-[14px] bg-transparent outline-none border-l border-l-4 border-[#0196C9] px-2">
                                        UPI
                                    </div>
                                </div>
                                <div className="flex justify-between gap-x-[99px] mt-[14px] w-full border-b border-[#37404C] pb-[18px]">
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">Name:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="Juan Vivas"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">UPI ID:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="juanvivas@venezuelanbank"
                                        />
                                    </div>
                                </div>
                                <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                    <div className="text-[14px] bg-transparent outline-none border-l border-l-4 border-[#2EBD85] px-2">
                                        Bank Transfer
                                    </div>
                                </div>
                                <div className="flex justify-between gap-x-[99px] mt-[18px] w-full">
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">Account holder name:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="Juan Vivas"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">Account number:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="juanvivas@venezuelanbank"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[33px] flex justify-center">
                                <button
                                    className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-[20px] items-center gap-x-[5px] text-white text-[18px]"
                                    onClick={() => setPayment("add")}
                                >
                                    + Add Payment Method
                                </button>
                            </div>
                            <div className="flex gap-x-[50px] mt-[82px]">
                                <button className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px]">
                                    Save
                                </button>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default SetP2PProfile;
