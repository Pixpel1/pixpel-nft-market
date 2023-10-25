/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Tabs, Tooltip } from "antd";
import HeaderWithPillsDev from "@launchpad/components/header/HeaderWithPills/HeaderWithPillsDev";
import AddRocket from "@launchpad/assets/developer/icons/add_rocket.png";
import Active from "./Active/Active";
import Finalized from "./Finalized/Finalized";
import { useAppContext } from "@launchpad/context/AppContext";
import { getDevRockets } from "@launchpad/helpers/requests/getDevRockets";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Rockets = () => {
    const navigate = useRouter();
    const slugParams = navigate.pathname;
    const [devRockets, setDevRockets] = useState<any[]>([]);

    const { account } = useAppContext();

    const getFinilizedDevRockets = async () => {
        const rockets = await getDevRockets(account);
        const filteredRockets = rockets.filter(
            (i) => i.invest_amount === i.hard_cap || new Date(i.end_time).getTime() < new Date().getTime()
        );
        console.log(filteredRockets);
        setDevRockets(filteredRockets);
    };

    useEffect(() => {
        if (account) {
            getFinilizedDevRockets();
        }
        // eslint-disable-next-line
    }, [account]);
    const cardItems = [
        {
            key: "1",
            label: "Active",
            children: <Active />,
        },
        {
            key: "2",
            label: "Finalized",
            children: <Finalized />,
            disabled: devRockets.length > 0 ? false : true,
        },
    ];
    return (
        <>
            <HeaderWithPillsDev slug={slugParams} />

            <div className="flex w-full mt-24 relative">
                <Tooltip placement="top" title="Create Rocket" color="#29313C">
                    <Link href="/launchpad/launchpad/developerside/create-rocket">
                        <button className="absolute ml-auto right-0 border border-transparent border-t-4 hover:border hover:border-t-4 hover:border-app-yellow bg-app-black py-3 z-10 px-3 cursor-pointer">
                            <Image src={AddRocket} alt="add_rocket" />
                        </button>
                    </Link>
                </Tooltip>
                <Tabs defaultActiveKey="1" type="card" className="w-full projectTabs" items={cardItems} />
            </div>
        </>
    );
};

export default Rockets;
