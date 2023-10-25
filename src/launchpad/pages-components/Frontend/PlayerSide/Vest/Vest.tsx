import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import HeaderWithPills from "@launchpad/components/header/HeaderWithPills/HeaderWithPills";
import "./vest.module.scss";
import PixpelVestCard from "@launchpad/assets/images/pixpel_vest.png";
import LaunchPadFilter from "@launchpad/components/SortFilter/LaunchPadFilter";
import { useAppContext } from "@launchpad/context/AppContext";
import { getHolderById } from "@launchpad/helpers/requests/getHoldersById";
import { getAllRockets } from "@launchpad/helpers/requests/getAllRockets";
import Link from "next/link";
import { useRouter } from "next/router";

interface PlayerRocket {
    launchpad_id: string;
    title: string;
    claimable_token: string;
}

const Vest = () => {
    const router = useRouter();
    const [playerRockets, setPlayerRockets] = useState<PlayerRocket[]>([]);
    const slugParams = router.pathname;

    const { loading, account } = useAppContext();

    const getPlayerRockets = async () => {
        try {
            const holders = await getHolderById("", account);
            const data = await getAllRockets();
            const playerRocketsData = holders.map(
                (rocket: {
                    cancel: boolean;
                    cis2_amount: number;
                    cis2_price: number;
                    cliff_duration: number;
                    id: string;
                    doc_id: string;
                    cliff_period: string;
                    description: string;
                    dev_paid: number;
                    discord_url: string;
                    end_time: string;
                    fb_url: string;
                    github_url: string;
                    hard_cap: number;
                    holders: {
                        length: number;
                        wallet: string;
                    };
                    address: string;
                    amount: number;
                    instagram_url: string;
                    invest_amount: number;
                    live: boolean;
                    live_pause_count: number;
                    logo_url: string;
                    launchpad_id: string;
                    maximum_invest: number;
                    minimum_invest: number;
                    owner: string;
                    pause_start: string;
                    pause_until: string;
                    reddit_url: string;
                    soft_cap: number;
                    start_time: string;
                    telegram_url: string;
                    title: string;
                    token_release_data: {
                        id: number;
                        per_cycle_release: number;
                        release_time: string;
                    }[];
                    total_tx: number;
                    twitter_url: string;
                    website_url: string;
                }) => {
                    const findRocketByID = data.filter((i) => i.id === rocket.launchpad_id)[0];
                    return { ...rocket, ...findRocketByID };
                }
            );
            setPlayerRockets(playerRocketsData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getPlayerRockets();
        // eslint-disable-next-line
    }, [account]);

    return (
        <>
            <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5">
                <HeaderWithPills slug={slugParams} title="Launch Pad" />
                <LaunchPadFilter classNames={""} />

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center bg-app-black px-6 py-8 gap-20">
                    {loading ? (
                        <Spin size="large" />
                    ) : playerRockets.length > 0 ? (
                        playerRockets.map((item, idx) => {
                            return (
                                <Link key={idx} href={`launch/${item.launchpad_id}`}>
                                    <div className="flex flex-col flex-wrap rounded-md 1xs:w-93">
                                        <div
                                            className="flex flex-wrap p-12 h-48 justify-center items-center text-center projectHeader"
                                            style={{
                                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                                backgroundImage: `url(${PixpelVestCard})`,
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                            <h2 className="text-4xl font-bold">{item.title}</h2>
                                        </div>
                                        <div className="grid grid-rows-2 grid-cols-2 border-t-2 border-app-black-duration bg-app-black-button gap-4 px-6 py-8 rounded-br-xl rounded-bl-xl">
                                            <button className="bg-app-black-button_b uppercase font-bold text-lg 1xs:text-[28px] rounded-lg p-2">
                                                rockets
                                            </button>
                                            <button className="bg-app-black-button_b uppercase font-bold text-lg 1xs:text-[28px] rounded-lg p-2">
                                                Ships
                                            </button>
                                            <button className="bg-app-black-button_b uppercase font-semibold text-base max-1xs:p-2 1xs:text-h5 text-app-blue rounded-lg p-1">
                                                {item.claimable_token} PIXP
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        "No data found against your wallet address, Please invest first"
                    )}
                </div>
            </div>
        </>
    );
};

export default Vest;
