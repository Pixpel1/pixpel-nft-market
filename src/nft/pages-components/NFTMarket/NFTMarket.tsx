import { useEffect, useMemo, useState } from "react";
import search from "@public/assets/images/search.svg";
import Cart from "../../components/Cart/Cart";
import CheckboxDropDown from "../../components/DropDown/CheckboxDropDown";
import GameSlider from "../../components/Market/GameSlider";
import NFTCard from "../../components/Market/NFTCard/NFTCard";
import { NFTCardList, categoryList, classList, insuranceList, nftDetails, sortList, teamsList } from "./dataList";

import game from "@public/assets/images/game-white.png";
import CheckboxDropDownN from "../../components/DropDown/CheckboxDropDown";
import HeaderWithPills from "../../components/Market/HeaderWithPills";
import { StickyCart } from "../../components/Market/StickyCart/StickyCart";
import Paginate from "./Paginate";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";

interface NFTCardList {
    id: number;
    img: StaticImageData | string;
    title: string;
}

const PageSize = 32;
const NFTMarket = () => {
    const router = useRouter();
    const slugParams = router.pathname;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [cartClicked, setCartClicked] = useState(false);
    const [gameClicked, setGameClicked] = useState(false);
    const [expandedNFTCardList, setExpandedNFTCardList] = useState<NFTCardList[]>([]);
    const handleCartClick = () => {
        setCartClicked(!cartClicked);
    };
    const handleGameClick = () => {
        setGameClicked(!gameClicked);
    };
    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        const generatedData: NFTCardList[] = [];
        for (let i = 0; i < 160; i++) {
            const randomIndex = getRandomInt(0, NFTCardList.length - 1);
            const randomItem = NFTCardList[randomIndex];
            generatedData.push({
                id: i + 1,
                img: randomItem.img,
                title: randomItem.title,
            });
        }
        setExpandedNFTCardList(generatedData);
    }, []);

    // Slice the data for the current page
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return expandedNFTCardList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, expandedNFTCardList]);

    return (
        <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5 relative">
            <HeaderWithPills slug={slugParams} title={"Market Place"} tabs={true} />
            <div className={cartClicked ? "2xl:pr-8 xl:pr-28 lg:pr-16 md:pr-12 sm:pr-8 pr-4 " : ""}>
                <div className={(cartClicked ? "w-4/5" : "w-full") + " flex mb-7"}>
                    <div className="flex gap-3 2xl1:flex-row flex-col w-full flex-wrap">
                        <div className="flex w-full">
                            <div className="flex gap-3 flex-wrap ">
                                <div className="flex items-center gap-3 px-7 py-4 bg-app-black rounded-md">
                                    <Image src={search as StaticImageData} alt="search" />
                                    <input className="bg-app-black 2xl1:w-44" placeholder="Search..." />
                                </div>
                                <div
                                    className={`w-41 flex bg-app-black gap-2 px-7 sm:px-0 py-4 sm:py-0 rounded-md items-center hover:bg-app-blue justify-center cursor-pointer ${
                                        gameClicked ? "bg-app-blue" : ""
                                    }`}
                                    onClick={handleGameClick}
                                >
                                    <Image src={game} alt="Game" />
                                    <div className="text-base">GAMES</div>
                                </div>
                                <CheckboxDropDownN
                                    initialContent={classList.title}
                                    contentList={classList.list}
                                    clicked={cartClicked}
                                />
                                <CheckboxDropDown
                                    initialContent={categoryList.title}
                                    clicked={cartClicked}
                                    contentList={categoryList.list}
                                />
                                <CheckboxDropDown
                                    initialContent={teamsList.title}
                                    clicked={cartClicked}
                                    contentList={teamsList.list}
                                />
                                <CheckboxDropDown
                                    initialContent={insuranceList.title}
                                    clicked={cartClicked}
                                    contentList={insuranceList.list}
                                />
                                <CheckboxDropDown
                                    initialContent={sortList.title}
                                    clicked={cartClicked}
                                    contentList={sortList.list}
                                />
                            </div>
                            <StickyCart cartClicked={cartClicked} handleCartClick={handleCartClick} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className={cartClicked ? "w-4/5" : "w-full"}>
                        <div className={(gameClicked ? "" : "hidden") + " mb-8"}>
                            <GameSlider cartClicked={cartClicked} />
                        </div>
                        <div
                            className={
                                (cartClicked
                                    ? "5xl:grid-cols-10 3xl1:grid-cols-6 2xl1:grid-cols-5 xl1:grid-cols-4 lg1:grid-cols-3 md1:grid-cols-2 grid-cols-1"
                                    : "5xl:grid-cols-12 3xl1:grid-cols-8 2xl1:grid-cols-7 xl1:grid-cols-6 lg1:grid-cols-5 md1:grid-cols-4 sm1:grid-cols-3 1xs:grid-cols-2 grid-cols-1") +
                                " grid gap-3"
                            }
                        >
                            {currentTableData.map((nft, idx) => (
                                <NFTCard
                                    key={idx}
                                    data={nft}
                                    nftData={nftDetails}
                                    linkDetails="/nft-market/nftlanding"
                                />
                            ))}
                        </div>
                        <Paginate
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={expandedNFTCardList.length}
                            pageSize={PageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                            siblingCount={0}
                        />
                    </div>
                    <div
                        className={
                            cartClicked
                                ? "w-4/5 sm:w-3/5 md:w-2/5 xl1:w-1/5 absolute right-0 top-[215px] h-full  ease-in duration-[0.2s] translate-x-0"
                                : "absolute right-0 ease-out duration-[0.5s] translate-x-[200%]"
                        }
                    >
                        <Cart showCart={cartClicked} setShowCart={setCartClicked} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTMarket;
