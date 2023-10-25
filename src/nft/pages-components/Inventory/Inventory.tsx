import HeaderWithPills from "@nft/components/Market/HeaderWithPills/HeaderWithPills";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sell from "./Sell/Sell";
import Stake from "./Stake/Stake";
import CheckboxDropDown from "@nft/components/DropDown/CheckboxDropDown";
import { sortList, classList } from "@nft/important/dataList";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import NFTCrypto from "@public/assets/images/NFT/nft_bids.png";
import Image from "next/image";
import InfoBox from "./InfoBox/InfoBox";

const Inventory = () => {
    const navigate = useRouter();
    const { show } = navigate.query;
    const [largeView, setLargeView] = useState<boolean>(false);
    const [openNftInfoBox, setOpenNftInfoBox] = useState<boolean>(false);
    const [tabActiveIndex, setTabsActiveIndex] = useState<number>(0);
    const [tabkey, setTabKey] = useState<string>("0");
    const setBackToSell = () => {
        setTabsActiveIndex(1);
    };

    const tabsData = [
        {
            id: 1,
            title: "Sell",
            component: (
                <Sell
                    largeTab={largeView}
                    openInfoBox={openNftInfoBox}
                    setLargeView={setLargeView}
                    setOpenNftInfoBox={setOpenNftInfoBox}
                    tabkey={tabkey}
                    setTabKey={setTabKey}
                    tabActiveIndex={tabActiveIndex}
                    setBackToSell={setBackToSell}
                    setTabsActiveIndex={setTabsActiveIndex}
                />
            ),
            active: show === "Sell" ? true : false,
        },
        {
            id: 2,
            title: "Stake",
            component: <Stake />,
            active: show === "Stake" ? true : false,
        },
    ];

    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    // };
    const handleLargeView = () => {
        setLargeView(true);
        // setOpenNftInfoBox(true);
    };
    const handleSmallView = () => {
        setLargeView(false);
        // setOpenNftInfoBox(false);
    };
    const handleNftInfoBox = () => {
        setOpenNftInfoBox(!openNftInfoBox);
        // setLargeView(!largeView);
    };

    useEffect(() => {
        console.log(openNftInfoBox, largeView);
    }, [openNftInfoBox, largeView]);

    return (
        <div className="inventory relative">
            <div className={`flex flex-col 2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 pb-20 pr-5`}>
                <div className="grid grid-cols-3 w-full items-center">
                    <div className="flex flex-col space-y-4">
                        <div
                            className="flex shrink grow-0 py-2 max-w-[50px] h-12 px-4 items-center bg-app-black-button  hover:bg-app-blue rounded-md cursor-pointer"
                            onClick={() => navigate.back()}
                        >
                            <svg
                                className="md:h-5 h-4 md:w-5 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                                />
                            </svg>
                        </div>
                        <div className="flex gap-x-2">
                            <CheckboxDropDown
                                initialContent={sortList.title}
                                contentList={sortList.list}
                                classNames="w-[88px] px-[14px]"
                            />
                            <CheckboxDropDown
                                initialContent={"All"}
                                contentList={classList.list}
                                classNames="w-[88px] px-[22px]"
                            />
                            <div className="flex gap-3 bg-app-black p-1">
                                <button
                                    title="small_view"
                                    type="submit"
                                    // className={`group border border-solid border-app-black-button hover:border-app-primary  grid_small bg-app-black-button p-2 rounded-sm`}
                                    className={`group border border-solid ${
                                        !largeView ? "border-app-primary" : "border-app-black-button"
                                    } hover:border-app-primary  grid_small bg-app-black-button p-2 rounded-sm`}
                                    // className={`group border border-solid border-app-primary hover:border-app-primary  grid_small bg-app-black-button p-2 rounded-sm`}
                                    onClick={handleSmallView}
                                >
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        // className={`"group-hover:fill-app-primary"`}
                                        className={`${
                                            !largeView ? "fill-app-primary" : "group-hover:fill-app-primary"
                                        }`}
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
                                    title="large_view"
                                    type="submit"
                                    className={`group border border-solid ${
                                        largeView ? "border-app-primary" : "border-app-black-button"
                                    } hover:border-app-primary  grid_small bg-app-black-button p-2 rounded-sm`}
                                    // className={`group border border-solid border-app-primary hover:border-app-primary  grid_small bg-app-black-button p-2 rounded-sm`}
                                    onClick={handleLargeView}
                                >
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        // className={`fill-app-primary`}
                                        className={`${largeView ? "fill-app-primary" : "group-hover:fill-app-primary"}`}
                                        fill="#48515F"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="14" height="14" rx="2" />
                                        <rect y="16" width="14" height="14" rx="2" />
                                        <rect x="16" width="14" height="14" rx="2" />
                                        <rect x="16" y="16" width="14" height="14" rx="2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex mx-auto">
                        <HeaderWithPills
                            tabs={true}
                            tabsData={tabsData}
                            setTabsActiveIndex={setTabsActiveIndex}
                            setTabKey={setTabKey}
                            title="Inventory"
                            filterButtons={true}
                            setOpenNftInfoBox={setOpenNftInfoBox}
                            setLargeView={setLargeView}
                        />
                    </div>
                </div>
                <div className={`flex mt-14 relative`}>
                    {tabActiveIndex !== 0 && (
                        <div className="flex w-full">
                            {tabsData && tabsData.map((tabItem) => (tabItem.active ? tabItem.component : ""))}
                        </div>
                    )}
                    {tabActiveIndex === 0 && (
                        <div className="flex bg-app-black py-3 gap-3 px-6 w-full">
                            {openNftInfoBox ? (
                                <>
                                    <div className="flex  left-0 ease-out z-20 duration-[0.5s] translate-x-0">
                                        <InfoBox />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex absolute left-0 ease-out duration-[0.5s] -translate-x-[200%]">
                                        <InfoBox />
                                    </div>
                                </>
                            )}
                            <div className="flex flex-col w-full">
                                <div
                                    className={`grid ${
                                        largeView && openNftInfoBox
                                            ? "xl1:grid-cols-2 2xl1:grid-cols-4 3xl1:grid-cols-4"
                                            : `${
                                                  !largeView && openNftInfoBox
                                                      ? `xl1:grid-cols-2 2xl1:grid-cols-5 3xl1:grid-cols-5`
                                                      : `${
                                                            openNftInfoBox
                                                                ? "xl1:grid-cols-4 2xl1:grid-cols-5 3xl1:grid-cols-6"
                                                                : `${
                                                                      largeView
                                                                          ? "xl1:grid-cols-4 2xl1:grid-cols-5 3xl1:grid-cols-6 4xl1:grid-cols-9"
                                                                          : "xl1:grid-cols-5 2xl1:grid-cols-7 3xl1:grid-cols-11 4xl1:grid-cols-10"
                                                                  }`
                                                        }`
                                              }`
                                    } gap-3`}
                                >
                                    {new Array(49).fill(null).map((_, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col gap-y-[15px] relative bg-app-black-button p-4 rounded-md"
                                            >
                                                <div className="flex bg-app-black-select p-4 hover:bg-app-black-duration">
                                                    <Image src={NFTCrypto} className="max-w-full w-full" alt="" />
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-base font-medium">Crypto Bot</h3>
                                                    <button
                                                        className="bg-app-black-duration flex items-center hover:bg-app-primary  py-[5px] px-[10px] space-x-1 rounded-md "
                                                        onClick={handleNftInfoBox}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                        >
                                                            <g clip-path="url(#clip0_303_10456)">
                                                                <path
                                                                    d="M6.9974 12.8307C10.2191 12.8307 12.8307 10.2191 12.8307 6.9974C12.8307 3.77573 10.2191 1.16406 6.9974 1.16406C3.77573 1.16406 1.16406 3.77573 1.16406 6.9974C1.16406 10.2191 3.77573 12.8307 6.9974 12.8307Z"
                                                                    stroke="white"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                                <path
                                                                    d="M7 9.33333V7"
                                                                    stroke="white"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                                <path
                                                                    d="M7 4.66406H7.00667"
                                                                    stroke="white"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_303_10456">
                                                                    <rect width="14" height="14" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <p className="text-sm font-medium uppercase">info</p>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    <div
                        className={`absolute ${
                            tabActiveIndex === 0 ? "top-20" : "top-[135px]"
                        } -left-[70px] rotate-[90deg] z-40`}
                    >
                        <button
                            className={`group flex ${
                                openNftInfoBox
                                    ? "bg-app-black-duration hover:bg-app-gray-hover"
                                    : "bg-app-gray hover:bg-app-black-duration"
                            } text-app-gray  items-center px-9 py-4 gap-3 rounded-md w-[208px] justify-center ${
                                openNftInfoBox ? "rounded-bl-3xl" : ""
                            }`}
                            onClick={handleNftInfoBox}
                        >
                            <svg
                                className={`${
                                    openNftInfoBox ? "fill-white" : "fill-app-black-duration group-hover:fill-white"
                                } `}
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                            </svg>
                            <p
                                className={`${
                                    openNftInfoBox ? "text-white" : "text-app-black-duration"
                                }  group-hover:text-white`}
                            >{`${openNftInfoBox ? "Hide" : "OPEN DETAILS"}`}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
