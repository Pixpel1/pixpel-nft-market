import React, { useState } from "react";
import Image from "next/image";
import { Select, Modal } from "antd";
import NFTBID from "@public/assets/images/NFT/nft_bids.png";
import NFT_3 from "@public/assets/images/NFT/nft-3.png";
import { useAppContext } from "@nft/contexts/AppContext";
import FilterDropDown from "@launchpad/components/DropDown/FilterDropDown";
import { useRouter } from "next/router";

const filterSortOptions = [
    {
        id: 1,
        title: "A - Z",
        value: "a-z",
    },
    {
        id: 2,
        title: "Z - A",
        value: "z-a",
    },
    {
        id: 3,
        title: "Highest Price",
        value: "highest_price",
    },
    {
        id: 4,
        title: "Lowest Price",
        value: "lowest_price",
    },
];
const filterOptions = [
    { id: 1, title: "Losing", value: "losing" },
    { id: 2, title: "Winning", value: "winning" },
    { id: 3, title: "All", value: "all" },
];

type BidingState = {
    key: number;
    winning: boolean;
};

const Active = () => {
    const [gridView, setGridView] = useState<boolean>(true);
    const { cartMenuClicked } = useAppContext();
    const navigate = useRouter();
    const [bidingState, setBiddingState] = useState<BidingState[]>([
        {
            key: 0,
            winning: false,
        },
    ]);

    const [nftCardOpen, setNftCardOpen] = useState<boolean>(false);

    const handleGridView = () => {
        setGridView(true);
    };
    const handleInlineView = () => {
        setGridView(false);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const toggleBiddingState = (id: number) => {
        setBiddingState((prevState) => {
            // Check if the item with the matching id exists in prevState
            const itemIndex = prevState.findIndex((item) => item.key === id);

            if (itemIndex !== -1) {
                // If the item exists, toggle the winning status
                const updatedState = prevState.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, winning: !item.winning };
                    }
                    return item;
                });
                return updatedState;
            } else {
                // If the item doesn't exist, add a new item with the provided id
                const newItem: BidingState = { key: id, winning: true };
                return [...prevState, newItem];
            }
        });
    };

    const handleNftCardOpen = () => {
        setNftCardOpen(true);
    };
    const handleNftCardClose = () => {
        setNftCardOpen(false);
    };

    return (
        <div className="flex flex-col bg-app-black p-5 ">
            <div className="flex gap-x-4 flex-wrap gap-y-4 md:gap-y-0">
                <FilterDropDown
                    contentList={filterSortOptions}
                    filterIconSvg={true}
                    filterSort={true}
                    initialContent={""}
                    fontSize={""}
                    textColor={""}
                    backgroundColor={"bg-app-black-button"}
                />
                <FilterDropDown
                    contentList={filterOptions}
                    filterIconSvg={true}
                    filterSort={false}
                    initialContent={""}
                    fontSize={""}
                    textColor={""}
                    backgroundColor={"bg-app-black-button"}
                />
                <div className="flex md:ml-auto gap-x-4">
                    <button
                        title="small_view"
                        type="submit"
                        className={`group border-2 border-solid ${
                            gridView ? "border-app-primary" : "border-app-black-button"
                        } hover:border-app-primary  grid_small bg-app-black-button p-3 rounded-md`}
                        onClick={handleGridView}
                    >
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            className={`${gridView ? "fill-app-primary" : "group-hover:fill-app-primary"}`}
                            fill="#48515F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="8" height="8" rx="1" />
                            <rect y="11" width="8" height="8" rx="1" />
                            <rect y="22" width="8" height="8" rx="1" />
                            <rect x="11" width="8" height="8" rx="1" />
                            <rect x="11" y="11" width="8" height="8" rx="1" />
                            <rect x="11" y="22" width="8" height="8" rx="1" />
                            <rect x="22" width="8" height="8" rx="1" />
                            <rect x="22" y="11" width="8" height="8" rx="1" />
                            <rect x="22" y="22" width="8" height="8" rx="1" />
                        </svg>
                    </button>
                    <button
                        className={`group border-2 border-solid ${
                            !gridView ? "border-app-primary" : "border-app-black-button"
                        } hover:border-app-primary  grid_small bg-app-black-button p-3 px-2 rounded-md`}
                        onClick={handleInlineView}
                    >
                        <svg
                            className={`${!gridView ? "fill-app-primary" : "group-hover:fill-app-primary"}`}
                            width="40"
                            height="23"
                            viewBox="0 0 40 23"
                            fill="#48515F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="40" height="3" rx="1.5" />
                            <rect y="10" width="40" height="3" rx="1.5" />
                            <rect y="20" width="40" height="3" rx="1.5" />
                        </svg>
                    </button>
                </div>
            </div>
            {gridView ? (
                <div className="flex flex-wrap justify-center pt-5">
                    <div
                        className={`grid grid-cols-2 ${
                            cartMenuClicked
                                ? "md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  3xl1:grid-cols-6 4xl1:grid-cols-10"
                                : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  3xl1:grid-cols-7 4xl1:grid-cols-11"
                        } gap-x-8 xl:gap-x-9 xl:gap-y-10 2xl:gap-x-7 gap-y-[52px]`}
                    >
                        {new Array(18).fill(null).map((v, i) => {
                            return (
                                <div key={i} className="flex flex-col p-2 bg-gray-700 rounded">
                                    <div className="flex justify-between items-center">
                                        <div
                                            className="flex items-center bg-main  cursor-pointer space-x-3 p-[6px] rounded-md hover:bg-app-black-duration"
                                            key={i}
                                            onClick={() => toggleBiddingState(i)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="13"
                                                viewBox="0 0 9 11"
                                                fill="none"
                                                className="light"
                                            >
                                                <path
                                                    d="M7.31775 6.5841C6.33723 8.45223 3.66277 8.45223 2.68225 6.5841C1.76743 4.84113 3.03154 2.75 5 2.75C6.96846 2.75 8.23257 4.84113 7.31775 6.5841Z"
                                                    fill={
                                                        bidingState[i] &&
                                                        bidingState[i].key === i &&
                                                        bidingState[i].winning
                                                            ? "#2EBD85"
                                                            : "#F6465D"
                                                    }
                                                />
                                            </svg>
                                            <p className="text-xs font-medium">
                                                {bidingState[i] && bidingState[i].key === i && bidingState[i].winning
                                                    ? "Winning"
                                                    : "Losing"}
                                            </p>
                                        </div>
                                        <button
                                            className="bg-app-blue-details text-xs font-medium py-0.5 px-6 hover:bg-app-blue-hover rounded"
                                            onClick={handleNftCardOpen}
                                        >
                                            BID
                                        </button>
                                    </div>
                                    <div
                                        key={i}
                                        className="nft-box flex flex-col bg-app-black-button px-3 md:px-4 py-0.5"
                                    >
                                        <div className="flex justify-center items-center">
                                            <Image src={NFTBID} className=" max-w-full w-40 h-36 " alt="nft-1" />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-base font-medium">Remaining Time</p>
                                            <p className="text-base font-medium text-app-primary">2 Days 24:10:04</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col bg-app-black">
                    {new Array(3).fill(null).map((v, i) => {
                        return (
                            <>
                                <div className="flex py-6 px-8">
                                    <div
                                        key={i}
                                        className={
                                            (i !== 2 ? "border-b" : "") +
                                            " flex flex-col md:flex-row gap-x-7 border-app-black-duration bg-app-black w-full"
                                        }
                                    >
                                        <div className="flex p-4 bg-app-gray w-56 h-56 shrink-0 rounded">
                                            <Image src={NFT_3} alt="NFT_Archer" className="w-52 h-auto rounded" />
                                        </div>
                                        <div className="flex flex-col md:w-full ">
                                            <div className="flex gap-x-36 border-b pb-2 border-b-app-gray items-center justify-evenly">
                                                <p className="font-medium text-xl w-[150px]">5000 PIXP</p>
                                                <button
                                                    className="px-16 w-[166px] rounded font-medium text-lg py-4 hover:bg-app-green-hover bg-app-green"
                                                    onClick={() => navigate.push("/checkout")}
                                                >
                                                    BUY
                                                </button>
                                                <div className="flex items-center gap-x-3 md:ml-auto">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="10"
                                                        height="10"
                                                        viewBox="0 0 10 10"
                                                        fill="none"
                                                    >
                                                        <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
                                                    </svg>
                                                    <p className="text-xl font-medium">Winning</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-x-14 items-center border-b py-2 border-b-app-gray">
                                                <div className="flex flex-col w-60  ">
                                                    <p className="font-semibold text-sm text-white/50 mb-1 ">
                                                        Input Offer Amount Number
                                                    </p>
                                                    <input
                                                        className="bg-app-gray rounded py-3 px-2"
                                                        placeholder="Offer Amount"
                                                    />
                                                </div>
                                                <button
                                                    className=" px-16 w-[166px] py-4 rounded font-medium text-lg hover:bg-app-blue-hover bg-app-blue-details"
                                                    onClick={handleNftCardOpen}
                                                >
                                                    BID
                                                </button>
                                            </div>
                                            <p className="font-medium text-lg pt-2 border-b pb-2 border-b-app-gray">
                                                Remaining Time: 4 months, 3 weeks, 2 days, 1 hour
                                            </p>
                                            <p className="font-medium text-lg pt-2 pb-4">End Date: 23/03/2023</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            )}
            <Modal
                open={nftCardOpen}
                className="[&>.ant-modal-content]:bg-main max-w-md"
                footer={null}
                closeIcon={false}
            >
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold">2500 PIXP</h4>
                        <div className="flex items-center bg-gray-700  cursor-pointer space-x-3 px-2 py-1 rounded hover:bg-app-black-duration">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                                <path
                                    d="M6.66073 5.43691C5.40881 7.14696 2.85577 7.14696 1.60385 5.4369C0.0883452 3.3668 1.56673 0.452269 4.13229 0.452269C6.69785 0.452269 8.17624 3.3668 6.66073 5.43691Z"
                                    fill="white"
                                />
                            </svg>
                            <p className="text-xl">Winning</p>
                        </div>
                    </div>
                    <div className="flex  mt-[10px] justify-center">
                        <Image
                            src={NFT_3}
                            alt="NFT_Archer"
                            className="w-full h-64 max-w-full max-xs:h-auto object-cover max-h-full rounded"
                        />
                    </div>
                    <div className="flex justify-between mt-[10px]">
                        <div className="flex flex-col">
                            <p className="text-xl font-medium">Remaining Time:</p>
                            <p className="text-xl font-medium text-app-primary">2 Days 24 : 10 : 04</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <input type="text" className="bg-app-black-button p-1 rounded-md w-[183px]" />
                            <button
                                className="bg-app-primary ml-auto w-[105px] hover:bg-app-blue-hover uppercase text-base font-medium px-4 py-2 rounded-md"
                                onClick={handleNftCardClose}
                            >
                                Bid
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Active;
