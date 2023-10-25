import React from "react";
import ImageDropDownButton from "@nft/components/DropDown/ImageDropDownButton";
import { StaticImageData } from "next/image";
import btc from "@public/assets/images/UserHome/btc.png";
import pixp from "@public/assets/images/UserHome/pixp.png";
import eth from "@public/icons/ethereum-icon.svg";
import usdc from "@public/assets/images/UserHome/usdc.png";
import concordium from "@public/icons/concordium-icon.svg";
interface tokenList {
    id: number;
    title: string;
    url: string | StaticImageData;
}

const tokenList = [
    {
        id: 1,
        title: "PIXP",
        url: pixp,
    },
    {
        id: 2,
        title: "BTC",
        url: btc,
    },
    {
        id: 3,
        title: "ETH",
        url: eth,
    },
    {
        id: 4,
        title: "USDC",
        url: usdc,
    },
    {
        id: 5,
        title: "CCD",
        url: concordium,
    },
];

interface Modal {
    showModal: boolean;
    setShowModal: (val: boolean) => void;
}

export default function Modal(props: Modal) {
    return (
        <>
            {props.showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => props.setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative flex flex-col w-full max-w-lg gap-5 p-8 mx-auto text-lg shadow-lg bg-app-black-modal rounded-xl">
                                <ImageDropDownButton
                                    center
                                    initialContent={tokenList[0]}
                                    contentList={tokenList}
                                    backgroundColor=" bg-app-black-button"
                                    fontSize={""}
                                    textColor={""}
                                />
                                <div className="flex flex-col">
                                    <p className="font-medium text-base mb-1">Wallet Address</p>
                                    <input
                                        className="h-16 p-5 rounded-md bg-app-black-button text-app-black-duration placeholder:text-app-black-duration focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                        placeholder="Enter Address Here"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-medium text-base mb-1">Network</p>
                                    <input
                                        className="h-16 p-5 rounded-md bg-app-black-button text-app-black-duration placeholder:text-app-black-duration focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                        placeholder="Enter Address Here"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-medium text-base mb-1">Wallet Name</p>
                                    <input
                                        className="h-16 p-5 rounded-md bg-app-black-button text-app-black-duration placeholder:text-app-black-duration focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                        placeholder="Enter Address Here"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-16 px-3 bg-app-green hover:bg-app-green-hover rounded-md mt-7 hover:cursor-pointer">
                                    <p>ADD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
