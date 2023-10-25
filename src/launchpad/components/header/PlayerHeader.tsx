import { WalletApi } from "@concordium/browser-wallet-api-helpers";
import Iconmenu from "@launchpad/assets/icons//menu.svg";
import inventory from "@launchpad/assets/icons/inventory.svg";
import notification from "@launchpad/assets/icons/notification.svg";
import NotificationDot from "@launchpad/assets/icons/notification_icon.png";
import profile from "@launchpad/assets/icons/profile.svg";
import RocketIcon from "@launchpad/assets/icons/rocket_icon.png";
import cart from "@launchpad/assets/icons/shopping-cart.svg";
import walletBlue from "@launchpad/assets/icons/wallet-blue.svg";
import walletIcon from "@launchpad/assets/icons/wallet-header.svg";
import logo from "@launchpad/assets/logo/logo.png";
import { connectClient, connectWallet } from "@launchpad/contracts/wallet";
import { getWalletAccount, setWallet } from "@launchpad/features/walletSlice";
import { useAppSelector } from "@launchpad/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Market from "./Market";
import Notification from "./Notification";
import Trade from "./Trade";

interface PlayerHeader {
    headerType: string;
}

const PlayerHeader = (props: PlayerHeader) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [localClient, setLocalClient] = useState<WalletApi | null>(null);
    // eslint-disable-next-line
    const walletRef = useRef<any>(null);
    const changeArea = (currentArea: string) => {
        return currentArea === "player" ? "developerside" : "playerside";
    };
    const navigate = useRouter();

    const walletAccount = useAppSelector(getWalletAccount);
    const wallet = walletAccount ? walletAccount.wallet : undefined;

    const dispatch = useDispatch();

    const dispatchSetWallet = (wallet: string) => {
        dispatch(setWallet(wallet));
    };

    const initProviderWallet = async () => {
        if (!localClient) {
            const newClient = await connectClient(dispatchSetWallet);
            setLocalClient(newClient);
        }

        if (!wallet && localClient) {
            const wallet = await connectWallet(localClient);
            dispatchSetWallet(wallet as string);
        }
    };

    const handleArea = () => {
        const headerTypeChange = changeArea(props.headerType);
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        navigate.push("/launchpad/launchpad/" + headerTypeChange.toLowerCase());
    };

    useEffect(() => {
        initProviderWallet();
        if (localClient && walletRef.current) {
            walletRef.current.src = walletBlue;
        }
        // eslint-disable-next-line
    }, [localClient]);

    return (
        <div className="bg-app-black flex justify-between px-8 py-5 items-center mb-11">
            <div className="flex gap-7 items-center">
                <Image src={logo} alt="logo" onClick={() => navigate.push("/")} className="cursor-pointer" />
                <div className="hidden xl:flex gap-12 ">
                    <Market />
                    <div className={"hover:text-app-blue cursor-pointer"}>Staking</div>
                    <Trade />
                    <div className={"hover:text-app-blue cursor-pointer w-max"}>Buy Crypto</div>
                </div>
            </div>
            <div
                className="hidden lg:flex bg-app-black-button capitalize px-8 py-3 rounded-md text-app-blue w-max hover:cursor-pointer"
                onClick={handleArea}
            >
                {props?.headerType}
            </div>
            <div className="hidden xl:flex gap-5 items-center">
                <Link href="/launchpad/launchpad/playerside">
                    <div className="flex flex-col relative -top-1">
                        <div className="flex">
                            <Image src={NotificationDot} alt="RocketIcon" />
                        </div>
                        <div className="flex">
                            <Image src={RocketIcon} alt="rocketIcon" />
                        </div>
                    </div>
                </Link>
                <Image src={cart} alt="cart" className="cursor-pointer" />
                <Notification />
                <Image src={inventory} alt="inventory" className="cursor-pointer" />
                <Image src={walletIcon} ref={walletRef} alt="wallet" className="cursor-pointer" />
                <Image src={profile} alt="profile" className="cursor-pointer" />
            </div>
            <div className="xl:hidden flex" onClick={() => setOpenMenu(!openMenu)}>
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
                        }}
                        className="hover:text-app-blue cursor-pointer"
                    >
                        NFT Market
                    </div>
                    <div
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                        className="hover:text-app-blue cursor-pointer"
                    >
                        Game Market
                    </div>
                    {/* <div
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                        className="hover:text-app-blue cursor-pointer"
                    >
                        Staking
                    </div> */}
                    <div
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                        className="hover:text-app-blue cursor-pointer"
                    >
                        Swap
                    </div>
                    <div
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                        className="hover:text-app-blue cursor-pointer"
                    >
                        CEX
                    </div>
                    <div
                        className="w-max cursor-pointer hover:text-app-blue"
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        Buy Crypto
                    </div>
                    <div className="flex gap-5">
                        <Image
                            src={cart}
                            alt="cart"
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        />
                        <Image
                            src={notification}
                            alt="notification"
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        />
                        <Image
                            src={inventory}
                            alt="inventory"
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        />
                        <Image
                            src={wallet}
                            alt="wallet"
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        />
                        <Image
                            src={profile}
                            alt="profile"
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerHeader;
