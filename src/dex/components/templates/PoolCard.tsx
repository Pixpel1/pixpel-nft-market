import Image from "next/image";
import React from "react";
import EthereumIcon from "public/icons/ethereum-icon.svg";

function PoolCard() {
    return (
        <div className="flex justify-center">
            <div
                className={`flex flex-col rounded-md w-full 2xl:w-155 bg-app-black sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]`}
            >
                <p className="text-lg mb-2">You are creating a pool</p>
                <div className="flex gap-4">
                    <Image src={EthereumIcon} alt="" />
                    <p className="text-3xl">BNB/PIXP</p>
                </div>
                <div className="flex flex-col gap-2 mt-5 text-sm">
                    <div className="flex bg-app-black-button p-4 rounded flex-row justify-between">
                        <p>BNB Deposited</p>
                        <p className="text-app-blue">0.103576</p>
                    </div>
                    <div className="flex bg-app-black-button p-4 rounded flex-row justify-between">
                        <p>PIXP Deposited</p>
                        <p className="text-app-blue">20</p>
                    </div>
                    <div className="flex bg-app-black-button p-4 rounded flex-row justify-between">
                        <p>Rates</p>
                        <div className="flex flex-col">
                            <p className="text-app-blue">1 BNB = 193.1 PIXP</p>
                            <p className="text-app-blue">1 PIXP = 0.005179 BNB</p>
                        </div>
                    </div>
                    <div className="flex bg-app-black-button p-4 rounded flex-row justify-between">
                        <p>Share of Pool</p>
                        <p className="text-app-blue">100%</p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="p-4 h-16 mt-5 bg-app-green-live rounded text-lg disabled:bg-app-black-button"
                >
                    Create Pool & Supply
                </button>
            </div>
        </div>
    );
}

export default PoolCard;
