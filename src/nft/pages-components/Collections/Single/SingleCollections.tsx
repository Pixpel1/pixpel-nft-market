import Link from "next/link";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { GridLarge, GridLargeInvert, GridSmall, GridSmallInvert } from "@public/assets/images/icons";
import search from "@public/assets/images/search.svg";
import CollectionsBanner from "@nft/components/Banner/CollectionsBanner";
import Cart from "@nft/components/Cart/Cart";
import ButtonDropwDown from "@nft/components/DropDown/ButtonDropDown";
import CheckboxDropDown from "@nft/components/DropDown/CheckboxDropDown";
import DropDownFilter from "@nft/components/DropDown/DropDownFilter";
import SingleCollectionCard from "@nft/components/Market/CollectionCard/SingleCollectionCard";
import { StickyCart } from "@nft/components/Market/StickyCart/StickyCart";
import { avgPrice, categoryList, filterButtons, sortList } from "@nft/important/dataList";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

// interface Game {
//     id: string;
//     idx: string;
//     img: StaticImageData | string;
// }

// type GameList = {
//     list: Game[]; // An array of Game objects
//     bannerImg: string; // Total count of games
//     featuredImage?: string; // Optional property for the previous page number
// };

interface CollectionButtons {
    id: number;
    title: string;
}
interface GameImage {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
    blurWidth: number;
    blurHeight: number;
}
interface GameData {
    id: number;
    img: GameImage;
    title: string;
    genre: string;
    price: string;
    token: string;
    stock: string;
    buttons: CollectionButtons[];
}
const SingleCollections = () => {
    const { singleData } = useRouter().query;
    let data;
    if (singleData) {
        data = JSON.parse(decodeURIComponent((singleData as string) ?? ""));
    }
    let list;
    if (data) {
        ({ list } = data);
    }
    const [cartClicked, setCartClicked] = useState(false);
    const [gridLarge, setGridLarge] = useState(true);
    const [gridSmall, setGridSmall] = useState(false);
    const handleCartClick = () => {
        setCartClicked(!cartClicked);
    };

    const handleGridLarge = () => {
        setGridLarge(true);
        setGridSmall(false);
    };
    const handleGridSmall = () => {
        setGridLarge(false);
        setGridSmall(true);
    };
    if (data)
        return (
            <div className="pt-11">
                <CollectionsBanner bannerImg={data.bannerImg.src} />
                <div className="flex relative w-full justify-center bottom-44 -mb-36 h-full px-12 sm:px-0">
                    <Link
                        href="/gamelanding"
                        // className={`group h-[${data.featuredImage.height}px]  overflow-hidden relative before:absolute before:w-0 before:h-0 hover:before:w-full hover:before:h-full hover:before:inset-0 hover:before:m-auto before:rounded-full hover:before:bg-app-green-hover hover:before:bg-opacity-[0.84] hover:before:ease-in-out before:duration-300`}
                        className={`group featuredImage w-[377px] h-[377px]  overflow-hidden relative`}
                    >
                        <Image src={data.featuredImage} alt="main" className="w-full max-w-full" />
                        <div
                            className={`flex justify-center featuredHeading items-center text-[32px] font-semibold w-[377px] h-[377px]   absolute`}
                        >
                            Game Lobby
                        </div>
                    </Link>
                </div>
                <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 relative">
                    <div className="flex flex-col items-center mb-20 flex-wrap">
                        <h3 className="text-h3 font-semibold uppercase mb-7">THE WARRIOR</h3>
                        <div className="flex gap-4 flex-wrap justify-center">
                            <div className="flex flex-col bg-app-black items-center justify-center uppercase px-12 py-2 rounded-lg gap-1">
                                <p className="text-app-blue text-md">300.000</p>
                                <span className="text-base text-app-black-duration">ITEMS</span>
                            </div>
                            <div className="flex flex-col bg-app-black items-center justify-center uppercase px-12 py-2 rounded-lg gap-1">
                                <p className="text-app-blue text-md">200.000</p>
                                <span className="text-base text-app-black-duration">OWNERS</span>
                            </div>

                            <div className="flex flex-col bg-app-black items-center justify-center uppercase px-12 py-2 rounded-lg gap-1">
                                <p className="text-app-blue text-md">2M PIXP</p>
                                <span className="text-base text-app-black-duration">VOLUME TRADED</span>
                            </div>
                            <ButtonDropwDown
                                initialContent={avgPrice.title}
                                contentList={avgPrice.list}
                                clicked={cartClicked}
                            />
                        </div>
                    </div>
                    <div className={(cartClicked ? "w-4/5" : "w-full") + " flex mb-7"}>
                        <div className="flex gap-3 2xl1:flex-row flex-col w-full flex-wrap">
                            <div className="flex w-full">
                                <div className="flex gap-3 flex-wrap ">
                                    <DropDownFilter
                                        icon={filterButtons.titleImage}
                                        contentList={filterButtons.items}
                                        singleCollection={true}
                                        clicked={false}
                                    />
                                    <div className="flex items-center gap-3 px-7 py-4 bg-app-black rounded-md">
                                        <Image src={search} alt="search" />
                                        <input className="bg-app-black 2xl1:w-44" placeholder="Search..." />
                                    </div>

                                    <CheckboxDropDown
                                        initialContent={"All Items"}
                                        contentList={categoryList.list}
                                        clicked={false}
                                    />
                                    <CheckboxDropDown
                                        initialContent={"Price: Low to High"}
                                        contentList={sortList.list}
                                        clicked={false}
                                    />
                                    <div className="flex items-center gap-2">
                                        <button
                                            title="small_view"
                                            type="submit"
                                            className={`group border-2 border-solid ${
                                                gridSmall ? "border-app-primary" : "border-app-black-button"
                                            } hover:border-app-primary  grid_small bg-app-black-button p-3 rounded-md`}
                                            onClick={handleGridSmall}
                                        >
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                className={`${
                                                    gridSmall ? "fill-app-primary" : "group-hover:fill-app-primary"
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
                                            className={`group border-2 border-solid ${
                                                gridLarge ? "border-app-primary" : "border-app-black-button"
                                            } hover:border-app-primary  grid_small bg-app-black-button p-3 px-3 rounded-md`}
                                            onClick={handleGridLarge}
                                        >
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                // className={`fill-app-primary`}
                                                className={`${
                                                    gridLarge ? "fill-app-primary" : "group-hover:fill-app-primary"
                                                }`}
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
                            <StickyCart cartClicked={cartClicked} handleCartClick={handleCartClick} />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className={cartClicked ? "w-4/5" : "w-full"}>
                            <div
                                className={
                                    (cartClicked && gridSmall
                                        ? "3xl1:grid-cols-5 2xl1:grid-cols-5 xl1:grid-cols-3 lg1:grid-cols-3 sm1:grid-cols-2 grid-cols-1 "
                                        : cartClicked
                                        ? "3xl1:grid-cols-3 2xl1:grid-cols-3 xl1:grid-cols-2 lg1:grid-cols-2 grid-cols-1"
                                        : gridSmall
                                        ? "3xl1:grid-cols-6 2xl1:grid-cols-6 xl1:grid-cols-5 lg1:grid-cols-3 sm1:grid-cols-2 grid-cols-1"
                                        : "3xl1:grid-cols-4 2xl1:grid-cols-4 xl1:grid-cols-4 lg1:grid-cols-3 sm1:grid-cols-2 grid-cols-1") +
                                    " grid gap-8"
                                }
                            >
                                {list.map((game: GameData, idx: number) => {
                                    return (
                                        <SingleCollectionCard
                                            key={idx}
                                            data={game}
                                            gridSmall={gridSmall}
                                            cartClicked={cartClicked}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            cartClicked
                                ? "w-4/5 sm:w-3/5 md:w-2/5 xl1:w-1/5 absolute right-0 top-[215px] h-full  ease-in duration-[0.2s] translate-x-0"
                                : "absolute right-0  top-[215px] ease-out duration-[0.5s] translate-x-[200%]"
                        }
                    >
                        <Cart showCart={cartClicked} setShowCart={setCartClicked} />
                    </div>
                </div>
            </div>
        );
};

export default SingleCollections;
