import React from "react";
import CheckIcon from "public/icons/check-icon.svg";
import Image from "next/image";

function MarketSuccess() {
    return (
        <div className="flex justify-center">
            <div
                className={`flex flex-col rounded-md w-full 2xl:w-155 bg-app-black sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]`}
            >
                <div className="flex flex-col justify-center items-center">
                    <Image src={CheckIcon} alt="" />
                    <p className="text-2xl font-semibold">Successful</p>
                    <p className="text-lg text-app-gray">You will spend</p>
                    <p className="text-2xl font-medium">27.13898 USDT</p>
                </div>
                <div className="flex flex-col gap-1 mt-5 text-sm">
                    <div className="flex rounded flex-row justify-between">
                        <p>Converted</p>
                        <p>20</p>
                    </div>
                    <div className="flex rounded flex-row justify-between">
                        <p>Price</p>
                        <p>1 BNB = 193.1 PIXP</p>
                    </div>
                    <div className="flex rounded flex-row justify-between">
                        <p>Inverse Price</p>
                        <p>100%</p>
                    </div>
                </div>
                <div className="flex gap-4 w-full">
                    <button
                        type="submit"
                        className="p-4 h-16 mt-5 bg-app-black-button w-full rounded text-lg disabled:bg-app-black-button"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="p-4 h-16 mt-5 bg-app-blue rounded w-full text-lg disabled:bg-app-black-button"
                    >
                        View status
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MarketSuccess;
