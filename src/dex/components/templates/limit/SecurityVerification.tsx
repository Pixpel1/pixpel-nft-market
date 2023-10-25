import React from "react";

function SecurityVerification() {
    return (
        <div
            className={`flex flex-col rounded-md w-full 2xl:w-155 bg-app-black sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]`}
        >
            <div className="font-semibold text-2xl">Security verification</div>
            <div className="my-2 bg-app-black-button rounded px-7 py-5">
                <div className="flex">
                    <p className="font-medium text-base text-app-gray">Amount</p>
                    <p className="ml-4 font-medium text-white text-base">Receive 19.000000 USDT (Network fee 1 UST)</p>
                </div>
                <div className="flex">
                    <p className="font-medium text-base text-app-gray">Address</p>
                    <p className="ml-4 font-medium text-white text-base">GIBIoefwf8ef8aw9HU8v8ebfqbjwq</p>
                </div>
                <div className="flex">
                    <p className="font-medium text-base text-app-gray">Network</p>
                    <p className="ml-4 font-medium text-white text-base">Tron (TRC20)</p>
                </div>
                <div className="flex">
                    <p className="font-medium text-base text-app-gray">Source</p>
                    <p className="ml-7 font-medium text-white text-base">Funding Wallet</p>
                </div>
            </div>
            <div className="my-4">
                <p className="font-semibold text-base">Phone Number Verification Code</p>
                <div className="my-2 bg-app-black-button rounded px-7 py-5">
                    <p className="font-medium text-base text-app-gray">Verification Code sent</p>
                </div>
                <p className="font-semibold text-xs text-app-gray">Enter the 6-digit code sent to 0997****94</p>
            </div>
            <div className="my-4">
                <p className="font-semibold text-base">Email Verification Code</p>
                <div className="my-2 bg-app-black-button rounded px-7 py-5">
                    <p className="font-medium text-base text-app-gray">Verification Code sent</p>
                </div>
                <p className="font-semibold text-xs text-app-gray">Enter the 6-digit code sent to hello***@gmail.com</p>
            </div>
            <p className="font-semibold text-xs text-app-blue">Security verification unavailable?</p>
            <div className="py-2 rounded bg-app-green-live my-4 flex justify-center items-center w-full">Submit</div>
        </div>
    );
}

export default SecurityVerification;
