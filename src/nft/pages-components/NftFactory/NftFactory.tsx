import React, { useState } from "react";
// import { useRouter } from "next/router";
import HeaderWithPills from "@nft/components/Market/HeaderWithPills/HeaderWithPills";
import FactoryCollections from "./FactoryCollections";
import MintArea from "./MintArea";
import BoxWrap from "./BoxWrap";
import { Tooltip } from "antd";

const NftFactory = () => {
    // const navigate = useRouter();
    // const [tabClicked, setTabClicked] = useState<boolean>(false);
    const [tabActiveIndex, setTabsActiveIndex] = useState<number>(1);
    const tabsData = [
        {
            id: 1,
            title: "Collections",
            component: <FactoryCollections />,
            active: tabActiveIndex === 1 ? true : false,
        },
        {
            id: 2,
            title: "Mint Area",
            component: <MintArea />,
            active: tabActiveIndex === 2 ? true : false,
        },
        {
            id: 3,
            title: "Box Wrap",
            component: <BoxWrap />,
            active: tabActiveIndex === 3 ? true : false,
        },
    ];
    return (
        <div className="nft-factory relative">
            <div className="flex flex-col 2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 pb-20 pr-5">
                <div className="flex flex-col factory">
                    <HeaderWithPills
                        tabsData={tabsData}
                        setTabsActiveIndex={setTabsActiveIndex}
                        title={"NFT Factory"}
                        slug=""
                        classNames={"!mb-0"}
                    />
                    <div className="flex justify-end mb-14">
                        <Tooltip placement="top" color="#29313C" title={"Create Collection"}>
                            <button
                                className="group border-solid border-transparent hover:border-app-yellow rounded-tl-md rounded-tr-md relative 
                            before:absolute before:border-t-4 before:border-transparent before:-top-[5px] before:left-0 before:right-0 before:w-[90%] before:mx-auto hover:before:border-app-yellow"
                                title="create_collection"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="68"
                                    height="72"
                                    viewBox="0 0 68 72"
                                    fill="none"
                                >
                                    <path
                                        d="M0 5C0 2.23857 2.23858 0 5 0H63C65.7614 0 68 2.23858 68 5V72H0V5Z"
                                        fill="#29313C"
                                    />
                                    <rect x="32.2227" y="19" width="3.55556" height="32" rx="1.77778" fill="#FFC700" />
                                    <rect
                                        x="50"
                                        y="33.2188"
                                        width="3.55556"
                                        height="32"
                                        rx="1.77778"
                                        transform="rotate(90 50 33.2188)"
                                        fill="#FFC700"
                                    />
                                </svg>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex mt-14 relative">
                    <div className="flex w-full">
                        {tabsData && tabsData.map((tabItem) => (tabItem.active ? tabItem.component : ""))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftFactory;
