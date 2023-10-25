import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface CollectionCardType {
    slug?: string;
    title?: string;
    tabs?: boolean;
    tabsData?: TabsItem[];
    setTabsActiveIndex?: (value: number) => void;
    setTabKey?: (value: string) => void;
    setOpenNftInfoBox?: (value: boolean) => void;
    setLargeView?: (value: boolean) => void;
    filterButtons?: boolean;
    classNames?: string;
}
interface TabsItem {
    id: number;
    title: string;
    active: boolean;
}

const HeaderWithPills = ({
    slug,
    title,
    tabs,
    classNames,
    tabsData,
    setTabsActiveIndex,
    filterButtons,
    setTabKey,
    setOpenNftInfoBox,
    setLargeView,
}: CollectionCardType) => {
    const navigate = useRouter();
    const { show } = navigate.query;
    console.log("navigate=>", navigate);
    return (
        <>
            {!slug && tabsData && filterButtons ? (
                <>
                    <div className="flex flex-col  mt-12">
                        <div className="2xl:text-[40px] xl:text-3xl lg:text-2xl md:text-xl text-center text-lg mb-5 font-semibold">
                            {title ? title : "Market place"}
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-between mx-auto mt-5 sm:mt-0">
                            <div className="flex flex-row gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
                                {tabsData.map((tabsItem: TabsItem, index: number) => {
                                    return (
                                        <button
                                            key={index}
                                            className={` ${
                                                tabsItem.active ? "bg-app-blue" : "bg-app-black"
                                            } px-8 py-4 font-semibold rounded-md hover:bg-app-blue cursor-pointer text-lg uppercase`}
                                            onClick={() => {
                                                navigate.push({
                                                    pathname: "/inventory",
                                                    query: { show: tabsItem.title }, // Custom state parameter
                                                });
                                                setTabsActiveIndex ? setTabsActiveIndex(tabsItem.id) : "";
                                                setTabKey ? setTabKey("0") : "";
                                                setOpenNftInfoBox ? setOpenNftInfoBox(false) : "";
                                                setLargeView ? setLargeView(false) : "";
                                            }}
                                        >
                                            {tabsItem.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </>
            ) : !slug && tabsData ? (
                <div className="grid grid-cols-3 mt-12">
                    <div className="flex justify-between items-start">
                        <div
                            className="flex py-2 h-12 px-4 items-center bg-app-black-button  hover:bg-app-blue rounded-md cursor-pointer"
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
                    </div>
                    <div className="flex flex-col ">
                        <div className="2xl:text-[40px] xl:text-3xl lg:text-2xl md:text-xl text-center text-lg mx-auto mb-7 font-semibold">
                            {title ? title : "Market Place"}
                        </div>
                        <div
                            className={
                                "flex flex-col lg:flex-row gap-3 justify-between mx-auto mb-14 mt-5 sm:mt-0 " +
                                (classNames ? classNames : "")
                            }
                        >
                            <div className="flex flex-row gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
                                {tabsData.map((tabsItem: TabsItem, index: number) => {
                                    return (
                                        <button
                                            key={index}
                                            className={` ${
                                                tabsItem.active ? "bg-app-blue" : "bg-app-black"
                                            } px-8 py-4 font-semibold rounded-md hover:bg-app-blue cursor-pointer text-lg uppercase ss`}
                                            onClick={() => {
                                                navigate.push({
                                                    pathname: "/shopping-cart",
                                                    query: { show: tabsItem.title }, // Custom state parameter
                                                });
                                                setTabsActiveIndex ? setTabsActiveIndex(tabsItem.id) : "";
                                            }}
                                        >
                                            {tabsItem.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className={`grid grid-cols-3 ${!tabs ? "mb-12" : ""}  mt-12`}>
                        <div
                            className="inline-flex py-2 w-12 h-12 px-4 shrink-0 items-center bg-app-black-button  hover:bg-app-blue rounded-md cursor-pointer"
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
                        <div className="flex flex-col">
                            <div
                                className={`2xl:text-[40px] xl:text-3xl lg:text-2xl md:text-xl text-center text-lg ${
                                    tabs ? "mb-5" : ""
                                } font-semibold`}
                            >
                                {title ? title : "Market place"}
                            </div>
                            {tabs && (
                                <div className="flex flex-col lg:flex-row gap-3 justify-between mx-auto mb-14 mt-5 sm:mt-0">
                                    <div className="flex flex-row gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
                                        <Link
                                            href="/nft-market"
                                            className={`${
                                                slug === "/nft-market" ? "bg-app-blue" : "bg-app-black"
                                            } +  px-8 py-4 font-semibold rounded-md hover:bg-app-blue cursor-pointer uppercase`}
                                        >
                                            NFT
                                        </Link>
                                        <Link
                                            href="/collections"
                                            className={`${
                                                slug === "/collections" ? "bg-app-blue" : "bg-app-black"
                                            } +  px-8 py-4 font-semibold rounded-md hover:bg-app-blue cursor-pointer uppercase`}
                                        >
                                            Collections
                                        </Link>
                                        <Link
                                            href="/game-market"
                                            className={`${
                                                slug === "/game-market" ? "bg-app-blue" : "bg-app-black"
                                            } +  px-8 py-4 font-semibold rounded-md hover:bg-app-blue cursor-pointer uppercase`}
                                        >
                                            Games
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

HeaderWithPills.defaultProps = {
    slug: "",
    title: "Market Place",
    tabs: true,
};

export default HeaderWithPills;
