import React, { useState } from "react";
import launchpad from "@public/assets/images/launchpad.svg";
import launchpadBlue from "@public/assets/images/launchpad-blue.svg";
import nftfactory from "@public/assets/images/nftfactory.svg";
import nftfactoryBlue from "@public/assets/images/nftfactory-blue.svg";
import marketplace from "@public/assets/images/marketplace.svg";
import marketplaceBlue from "@public/assets/images/marketplace-blue.svg";
import gamedashboard from "@public/assets/images/gamedashboard.svg";
import gamedashboardBlue from "@public/assets/images/gamedashboard-blue.svg";
import Notification from "./Notification";
import notification from "@public/assets/images/notification.svg";
import wallet from "@public/assets/images/wallet-header.svg";
import walletBlue from "@public/assets/images/wallet-blue.svg";
import profile from "@public/assets/images/profile.svg";
import profileBlue from "@public/assets/images/profile-blue.svg";
import logo from "@public/assets/images/logo.svg";
import Iconmenu from "@public/assets/images/menu.svg";
import { useAppContext } from "@nft/contexts/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { Tooltip } from "antd";

const DeveloperHeader = () => {
    const navigate = useRouter();
    const [openMenu, setOpenMenu] = useState(false);
    const context = useAppContext();
    context.setDeveloperHeader?.(-1);
    return (
        <div className="bg-app-black flex justify-between px-8 py-5 items-center relative z-10">
            <div className="flex gap-7 items-center">
                <Image src={logo} alt="logo" onClick={() => navigate.push("/")} className="cursor-pointer" />
                <div className="hidden xl:flex gap-12 ">
                    <div
                        className={
                            (context.playerHeader === 0 ? "text-app-blue " : "") + "hover:text-app-blue cursor-pointer"
                        }
                        onClick={() => {
                            navigate.push("/developer");
                            context.setPlayerHeader?.(0);
                        }}
                    >
                        Games
                    </div>
                    <div
                        className={
                            (context.playerHeader === 1 ? "text-app-blue " : "") + "hover:text-app-blue cursor-pointer"
                        }
                        onClick={() => {
                            navigate.push("/developer");
                            context.setPlayerHeader?.(1);
                        }}
                    >
                        DEX
                    </div>
                    <div
                        className={
                            (context.playerHeader === 2 ? "text-app-blue " : "") + "hover:text-app-blue cursor-pointer"
                        }
                        onClick={() => {
                            navigate.push("/developer");
                            context.setPlayerHeader?.(2);
                        }}
                    >
                        Launchpad
                    </div>
                    <div
                        className={
                            (context.playerHeader === 2 ? "text-app-blue " : "") + "hover:text-app-blue cursor-pointer"
                        }
                        onClick={() => {
                            navigate.push("/developer/wallet");
                            context.setPlayerHeader?.(3);
                        }}
                    >
                        Wallet
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex bg-app-black-button px-8 py-3 rounded-md text-app-blue w-max cursor-pointer">
                Developer
            </div>
            <div className="hidden xl:flex gap-5 items-center">
                <Tooltip placement="bottom" title={"Launchpad"}>
                    <Image
                        src={context.developerHeader === 4 ? launchpadBlue : launchpad}
                        alt="cart"
                        className="cursor-pointer"
                        onClick={() => {
                            navigate.push("/player/account");
                            context.setDeveloperHeader?.(4);
                        }}
                    />
                </Tooltip>
                <Tooltip placement="bottom" title={"NFT Factory"}>
                    <Image
                        src={context.developerHeader === 4 ? nftfactoryBlue : nftfactory}
                        alt="cart"
                        className="cursor-pointer"
                        onClick={() => {
                            navigate.push("/developer");
                            context.setDeveloperHeader?.(4);
                        }}
                    />
                </Tooltip>
                <Tooltip placement="bottom" title={"Store"}>
                    <Image
                        src={context.developerHeader === 4 ? marketplaceBlue : marketplace}
                        alt="cart"
                        className="cursor-pointer"
                        onClick={() => {
                            navigate.push("/developer");
                            context.setDeveloperHeader?.(4);
                        }}
                    />
                </Tooltip>
                <Tooltip placement="bottom" title={"Game Dashboard"}>
                    <Image
                        src={context.developerHeader === 4 ? gamedashboardBlue : gamedashboard}
                        alt="cart"
                        className="cursor-pointer"
                        onClick={() => {
                            navigate.push("/developer/game-dashboard");
                            context.setDeveloperHeader?.(4);
                        }}
                    />
                </Tooltip>
                <Tooltip placement="bottom" title={"Wallet"}>
                    <Image
                        src={context.playerHeader === 4 ? walletBlue : wallet}
                        alt="wallet"
                        className="cursor-pointer"
                        onClick={() => {
                            navigate.push("/developer/wallet");
                            context.setPlayerHeader?.(4);
                        }}
                    />
                </Tooltip>
                <Notification />
                <Tooltip placement="bottom" title={"Profile"}>
                    <Image
                        src={context.playerHeader === 5 ? profileBlue : profile}
                        alt="profile"
                        className="cursor-pointer"
                        onClick={() => {
                            navigate.push("/developer/notverified");
                            context.setPlayerHeader?.(5);
                        }}
                    />
                </Tooltip>
            </div>
            <div className="max-xl:flex hidden" onClick={() => setOpenMenu(!openMenu)}>
                <Image src={Iconmenu} alt="menu" />
            </div>
            <div
                className={
                    (openMenu ? "-translate-x-0" : "translate-x-full") +
                    " fixed top-0 right-0 w-screen z-50 min-h-screen bg-black bg-opacity-90 transform shadow-lg shadow-white duration-200"
                }
            >
                <div
                    className="h-36 flex bg-black items-center pr-10 justify-end"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <p className="text-5xl cursor-pointer text-white">×</p>
                </div>
                <div className="w-full flex justify-center flex-col items-center gap-8 pt-10">
                    <div
                        onClick={() => {
                            setOpenMenu(false);
                            navigate.push("/developer");
                        }}
                    >
                        Games
                    </div>
                    <div
                        onClick={() => {
                            setOpenMenu(false);
                            navigate.push("/mycollection");
                        }}
                    >
                        Launchpad
                    </div>
                    <div
                        onClick={() => {
                            setOpenMenu(false);
                            navigate.push("/tokenroom");
                        }}
                    >
                        Dex
                    </div>
                    <div
                        className="w-max"
                        onClick={() => {
                            setOpenMenu(false);
                            navigate.push("/stakingportfolio");
                        }}
                    >
                        Staking
                    </div>
                    <div className="flex gap-3">
                        <Image
                            src={notification}
                            alt="notification"
                            onClick={() => {
                                setOpenMenu(false);
                                navigate.push("/notification");
                            }}
                        />
                        <Image
                            src={wallet}
                            alt="wallet"
                            onClick={() => {
                                setOpenMenu(false);
                                navigate.push("/developer/wallet");
                            }}
                        />
                        <Image
                            src={profile}
                            alt="profile"
                            onClick={() => {
                                setOpenMenu(false);
                                navigate.push("/developer/notverified");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperHeader;
