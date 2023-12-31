import React, { useState } from "react";
import ImageDropDownButton from "@nft/components/DropDown/ImageDropDownButton";
import DropDownButton from "./DropDownButton";
import WithdrawalModal from "./WithdrawalModal";
import AVA from "@public/assets/images/UserHome/avax.png";
import { StaticImageData } from "next/image";

interface tokenList {
    id: number;
    title: string;
    url: string | StaticImageData;
}
interface networkList {
    id: number;
    title: string;
}
const tokenList: tokenList[] = [
    {
        id: 1,
        title: "AVA",
        url: AVA,
    },
    {
        id: 2,
        title: "AVA",
        url: AVA,
    },
    {
        id: 3,
        title: "AVA",
        url: AVA,
    },
];

const bankList: networkList[] = [
    {
        id: 1,
        title: "Bank Transfer",
    },
    {
        id: 2,
        title: "Bank Transfer",
    },
    {
        id: 3,
        title: "Bank Transfer",
    },
    {
        id: 4,
        title: "Bank Transfer",
    },
];

const HSBCList: networkList[] = [
    {
        id: 1,
        title: "HSBC Hong Kong",
    },
    {
        id: 2,
        title: "HSBC Hong Kong",
    },
    {
        id: 3,
        title: "HSBC Hong Kong",
    },
    {
        id: 4,
        title: "HSBC Hong Kong",
    },
];

const FlatCard = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };
    return (
        <>
            <div className="flex flex-col w-full sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] bg-app-black rounded-xl sm:w-155">
                <div className="flex justify-start mb-1">
                    <div className="text-lg font-medium">Fiat Coin</div>
                </div>
                <div className="mb-8">
                    <ImageDropDownButton
                        initialContent={tokenList[0]}
                        contentList={tokenList}
                        backgroundColor="bg-app-black-button"
                        fontSize={""}
                        textColor={""}
                    />
                </div>
                <div className="flex justify-start mb-1">
                    <div className="text-lg font-medium">Method</div>
                </div>
                <div className="mb-8">
                    <DropDownButton
                        initialContent={bankList[0].title}
                        backgroundColor="bg-app-black-button"
                        contentList={bankList}
                    />
                </div>
                <div className="flex justify-start mb-1">
                    <div className="text-lg font-medium">Method</div>
                </div>
                <div className="mb-8">
                    <DropDownButton
                        initialContent={HSBCList[0].title}
                        backgroundColor="bg-app-black-button"
                        contentList={HSBCList}
                    />
                </div>
                <div className="flex justify-start mb-1">
                    <div className="text-lg font-medium">Withdraw Amount</div>
                </div>
                <div className="mb-1">
                    <ImageDropDownButton
                        initialContent={tokenList[0]}
                        contentList={tokenList}
                        backgroundColor=" bg-app-black-button"
                        fontSize={""}
                        textColor={""}
                    />
                </div>
                <div className="flex justify-end mb-8">
                    <div className="text-sm text-slate-500">Balance: 233,319,129.9022</div>
                </div>
                <div className="flex flex-row justify-between mb-2">
                    <div className="flex flex-row items-center gap-4">
                        <div className="text-xs font-medium 2xs:text-lg">Commission</div>
                    </div>
                    <div className="text-sm font-medium 2xs:text-lg">5%</div>
                </div>
                <div className="flex flex-row items-center justify-between mb-5">
                    <div className="flex flex-row gap-4">
                        <div className="text-xs font-medium 2xs:text-lg">You recieve</div>
                    </div>
                    <div className="flex text-sm font-medium 2xs:text-lg">950.000 USD</div>
                </div>
                <div className="flex flex-row justify-start gap-2 mb-12">
                    <input type="checkbox" className="flex-none appearance-none checked:bg-blue-500" />
                    <div className="text-base font-normal text-gray-400">I have read and I accept terms.</div>
                </div>
                <div
                    className="flex items-center justify-center h-16 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
                    onClick={handleClick}
                >
                    <div className="text-lg">Withdraw</div>
                </div>
            </div>
            <WithdrawalModal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
};
export default FlatCard;
