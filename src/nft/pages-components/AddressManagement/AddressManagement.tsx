import React, { useState } from "react";
import Modal from "./Modal";
import ImageDropDownButton from "@nft/components/DropDown/ImageDropDownButton";
import { StaticImageData } from "next/image";
import btc from "@public/assets/images/UserHome/btc.png";
import pixp from "@public/assets/images/UserHome/pixp.png";
import eth from "@public/icons/ethereum-icon.svg";
import usdc from "@public/assets/images/UserHome/usdc.png";
import concordium from "@public/icons/concordium-icon.svg";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";

interface tokenList {
    id: number;
    title: string;
    url: string | StaticImageData;
}

interface coinList {
    coin: string;
    address: string;
    name: string;
    network: string;
}

const tokenList: tokenList[] = [
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

const coinList: coinList[] = [
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
    {
        coin: "ETH",
        address: "ndiadwqlUODWSwqo01d29bdg",
        name: "Danil_28snJJwqq",
        network: "TRON",
    },
];

const AddressManagement = () => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="grid grid-cols-1 gap-8 pt-11 pb-80 justify-items-center">
                <div className="flex flex-row justify-between w-5/6 gap-2 text-lg">
                    <div className="flex gap-5">
                        <div onClick={() => router.back()} className="p-4 w-fit cursor-pointer bg-[#37404C] rounded-md">
                            <IoArrowBack size={24} />
                        </div>
                        <div className="flex flex-row items-center justify-center rounded-md bg-app-black h-14 w-44">
                            <div>
                                <svg
                                    className="w-6 h-6"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="#717A8B"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </div>
                            <p className="text-app-black-duration font-medium text-lg">Settings</p>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center px-8 py-4 bg-app-green hover:bg-app-green-hover rounded-md w-fit hover:cursor-pointer"
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        <p>ADD ADDRESS</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between w-5/6 gap-4 lg:flex-row">
                    <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold">Address Management</p>
                    <div className="flex flex-col items-center gap-2 gap-x-8 xs:flex-row">
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium">Coin:</p>
                            <ImageDropDownButton
                                initialContent={tokenList[0]}
                                contentList={tokenList}
                                backgroundColor=" bg-app-black"
                                fontSize={""}
                                textColor={""}
                            />
                        </div>
                        <div className="flex items-center  rounded-md xs:h-14 xs:w-72 bg-app-black px-8 py-4 w-75">
                            <svg
                                className="w-1/6 h-4/5"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#717A8B"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                            <input
                                className="w-4/5 text-xl text-app-black-duration rounded-md h-3/4 bg-app-black"
                                placeholder="Search"
                                type="text"
                                name="search"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/6 gap-4 text-base">
                    <div className="flex">
                        <p className="flex-auto text-app-black-duration md:flex-auto md:w-64 xl:w-1/4 w-14">Coin</p>
                        <p className="flex-auto w-64 text-app-black-duration md:flex-none md:w-64 xl:w-1/4">Address</p>
                        <p className="flex-auto w-40 text-app-black-duration md:flex-none md:w-64 xl:w-1/4">Name</p>
                        <p className="flex-auto text-app-black-duration md:flex-auto md:w-64 xl:w-1/4 w-14">Networks</p>
                    </div>
                    {coinList.map((list, idx) => {
                        return (
                            <div
                                key={idx}
                                className={
                                    (idx === coinList.length - 1 ? "" : "border-b-2 border-app-black") +
                                    " flex flex-row gap-1 pb-2 font-medium"
                                }
                            >
                                <p className="flex-auto md:flex-auto md:w-64 xl:w-1/4 w-14">{list.coin}</p>
                                <p className="flex-auto w-64 truncate md:flex-none md:w-64 xl:w-1/4">{list.address}</p>
                                <p className="flex-auto w-40 truncate md:flex-none md:w-64 xl:w-1/4">{list.name}</p>
                                <p className="flex-auto md:flex-auto md:w-64 xl:w-1/4 w-14">{list.network}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            {<Modal showModal={showModal} setShowModal={setShowModal} />}
        </>
    );
};
export default AddressManagement;
