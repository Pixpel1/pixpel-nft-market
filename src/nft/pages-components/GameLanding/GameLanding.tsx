import { useEffect, useRef, useState } from "react";
import LandingHeader from "../../components/GameLanding/LandingHeader";
// import Description from "../../components/GameLanding/Description";
// import BuyWeapons from "../../components/GameLanding/BuyWeapons";
// import TokenDetail from "../../components/GameLanding/TokenDetail";
// import Chart from "../../components/GameLanding/Chart";
import Staking from "../../components/GameLanding/Staking";
// import SmartInvest from "../../components/GameLanding/SmartInvest";
// import Developers from "../../components/GameLanding/Developers";
import image from "@public/assets/images/home/landing1.png";
// import Image from "next/image";

// const GameLanding = () => {
//     return (
//         <div className="flex pt-11 flex-col pb-20">

//             <Description />
//             <BuyWeapons />
//             <TokenDetail />
//             <Chart />
//             <Staking />
//             <SmartInvest />
//             <Developers />
//         </div>
//     );
// };
/* eslint-disable @typescript-eslint/no-explicit-any */
import NftWalletDescription from "@launchpad/components/gameLobby/NftWalletDescription";
import PixpelTeam from "@launchpad/components/gameLobby/PixpelTeam";
import SolutionDetails from "@launchpad/components/gameLobby/SolutionDetails";
import Image from "next/image";

import { AiOutlineArrowUp } from "react-icons/ai";
import Launchpad from "@nft/pages-components/GameLanding/launchpad";
import NFTMarketplace from "@nft/pages-components/GameLanding/launchpad/NFTMarketplace";

const GameLanding = () => {
    const [showTopButton, setShowTopButton] = useState(false);
    const launchPadRef = useRef<any>(null);
    const stakingRef = useRef<any>(null);
    const InfoRef = useRef<any>(null);
    const handleUp = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const handleChangeVisiblity = () => {
        console.log("window.scrollY", window.scrollY);
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
            window.addEventListener("scroll", handleChangeVisiblity);
        }
    }, []);
    return (
        <div className="relative pt-11">
            {/* <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pr-5">
                <HeaderWithScroll
                    title="PIXPEL"
                    LaunchpadRef={launchPadRef}
                    stakingRef={stakingRef}
                    InfoRef={InfoRef}
                />
            </div> */}
            {/* <div className="banner px-0">
                <Image src={PixpelBanner} alt="pixpel-banner" />
            </div> */}
            <LandingHeader
                title="Dungeons & Bots"
                LaunchpadRef={launchPadRef}
                stakingRef={stakingRef}
                InfoRef={InfoRef}
            />
            <Image src={image} alt="landing" className="w-full object-cover" />

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

export default GameLanding;
