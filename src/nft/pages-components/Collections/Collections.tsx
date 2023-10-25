import React, { useState } from "react";
import CheckboxDropDown from "../../components/DropDown/CheckboxDropDown";
import Cart from "../../components/Cart/Cart";
import GameSlider from "../../components/Market/GameSlider";
import {
    classList,
    categoryList,
    teamsList,
    insuranceList,
    sortList,
    GameCardListCollectionsWithButtons,
} from "../../important/dataList";
import search from "@public/assets/images/search.svg";
import game from "@public/assets/images/game-white.png";
import CollectionCard from "../../components/Market/CollectionCard/CollectionCard";
import HeaderWithPills from "../../components/Market/HeaderWithPills";
import { StickyCart } from "../../components/Market/StickyCart/StickyCart";
import { useRouter } from "next/router";
import Image from "next/image";

const Collections = () => {
    const router = useRouter();
    const slugParams = router.pathname;
    const [cartClicked, setCartClicked] = useState(false);
    const [gameClicked, setGameClicked] = useState(false);
    const handleCartClick = () => {
        setCartClicked(!cartClicked);
    };
    const handleGameClick = () => {
        setGameClicked(!gameClicked);
    };
    return (
        <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5 relative">
            <HeaderWithPills slug={slugParams} title={"Market Place"} tabs={true} />
            <div className={cartClicked ? "2xl:pr-8 xl:pr-28 lg:pr-16 md:pr-12 sm:pr-8 pr-4" : ""}>
                <div className={(cartClicked ? "w-4/5" : "w-full") + " flex mb-7"}>
                    <div className="flex gap-3 2xl1:flex-row flex-col w-full flex-wrap">
                        <div className="flex w-full">
                            <div className="flex gap-3 flex-wrap ">
                                <div className="flex items-center gap-3 px-7 py-4 bg-app-black rounded-md">
                                    <Image src={search} alt="search" />
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
                                <CheckboxDropDown
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
                                    ? "5xl:grid-cols-6 3xl1:grid-cols-5 2xl1:grid-cols-4 xl1:grid-cols-3 lg1:grid-cols-2 grid-cols-1"
                                    : "5xl:grid-cols-6 3xl1:grid-cols-6 2xl1:grid-cols-4 xl1:grid-cols-3 lg1:grid-cols-2 grid-cols-1") +
                                " grid gap-3"
                            }
                        >
                            {GameCardListCollectionsWithButtons.map((game, idx) => {
                                return <CollectionCard key={idx} data={game} />;
                            })}
                        </div>
                    </div>
                    <div
                        className={
                            cartClicked
                                ? "w-4/5 sm:w-3/5 md:w-2/5 xl1:w-1/5 absolute right-0  top-[215px] h-full  ease-in duration-[0.2s] translate-x-0"
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

export default Collections;
