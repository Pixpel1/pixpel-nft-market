/* eslint-disable @typescript-eslint/no-explicit-any */
import PixpelBanner from "@launchpad/assets/banner/pixpel-banner.png";
import NftWalletDescription from "@launchpad/components/gameLobby/NftWalletDescription";
import PixpelTeam from "@launchpad/components/gameLobby/PixpelTeam";
import SolutionDetails from "@launchpad/components/gameLobby/SolutionDetails";
import Staking from "@launchpad/components/gameLobby/Staking";
import HeaderWithScroll from "@launchpad/components/header/HeaderWithPills/HeaderWithScroll";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Launchpad from "./launchpad";
import NFTMarketplace from "./launchpad/NFTMarketplace";

const GameLobby = () => {
    const [showTopButton, setShowTopButton] = useState(false);
    const launchPadRef = useRef<any>(null);
    const stakingRef = useRef<any>(null);
    const InfoRef = useRef<any>(null);
    const handleUp = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const handleChangeVisiblity = () => {
        if (window.scrollY > 90) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };
    // bannerRef.current.scrollIntoView({ behaviour: "smooth" });
    useEffect(() => {
        if (typeof window !== "undefined") {
            handleUp();
            setTimeout(() => {
                launchPadRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }, 500);
            window.addEventListener("scroll", handleChangeVisiblity);
        }
    }, []);
    return (
        <div className="relative pt-11">
            <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pr-5">
                <HeaderWithScroll
                    title="PIXPEL"
                    LaunchpadRef={launchPadRef}
                    stakingRef={stakingRef}
                    InfoRef={InfoRef}
                />
            </div>
            <div className="banner ">
                <Image src={PixpelBanner} alt="pixpel-banner" />
            </div>

            <NftWalletDescription />
            <SolutionDetails />
            <PixpelTeam scrollToRef={InfoRef} />
            <NFTMarketplace />
            <Launchpad scrollToRef={launchPadRef} />
            <Staking scrollToRef={stakingRef} />
            <div
                className={
                    "fixed top-1/3 transition-all duration-500 ease-in-out bottom-0 " +
                    (showTopButton ? "right-0" : "-right-20")
                }
            >
                <button className="bg-app-black-select p-4 py-6 rounded-lg " onClick={handleUp}>
                    <AiOutlineArrowUp />
                </button>
            </div>
        </div>
    );
};

export default GameLobby;
