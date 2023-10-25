/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, message } from "antd";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import LaunchPadFilter from "@launchpad/components/SortFilter/LaunchPadFilter";
import HeaderWithPills from "@launchpad/components/header/HeaderWithPills/HeaderWithPills";
import { useAppContext } from "@launchpad/context/AppContext";
import { getHolderById } from "@launchpad/helpers/requests/getHoldersById";
import { getSelectedRocket } from "@launchpad/helpers/requests/getSelectedRocket";
import VestOverview from "./Sections/VestOverview";
import VestRockets from "./Sections/VestRockets";

interface SelectedRocket {
    token_release_data: { release_time: string; per_cycle_release: number; id: number }[];
    ownedToken: number;
    cis2_price: number;
    isDisabled: boolean;
    next_release_amount: number;
    claimed_token: number;
    next_release_date: string | number;
    completed_cycle: number;
}

const VestInner = () => {
    const [releaseData, setReleaseData] = useState<any>();
    const [lockupHolders, setLockupHolders] = useState();
    const [selectedRocket, setSelectedRocket] = useState<SelectedRocket>({} as SelectedRocket);

    const { account } = useAppContext();
    const params = useRouter().query;

    const [, contextHolder] = message.useMessage();

    const getHolders = async (id: string) => {
        const result = await getHolderById(id, account);
        console.log(result);
        setLockupHolders(result);
    };

    const getRocketById = async (id: number | string) => {
        const result: any = await getSelectedRocket(id as string);
        setSelectedRocket(result);
    };

    const nextRelease = async () => {
        try {
            if (!lockupHolders || !selectedRocket)
                return setReleaseData({
                    next_release_date: "--:--:--",
                    next_release_amount: 0,
                    claimed_token: 0,
                    completed_cycle: 0,
                    ownedToken: 0,
                    isDisabled: true,
                });
            const { cycle_completed, claimable_token } = lockupHolders;
            const { token_release_data } = selectedRocket;
            const completed_cycle = cycle_completed;
            const owned_token = claimable_token;
            if (completed_cycle === token_release_data.length) {
                return setReleaseData({
                    next_release_date: "--:--:--",
                    next_release_amount: 0,
                    claimed_token: owned_token,
                    completed_cycle: 4,
                    ownedToken: owned_token,
                    isDisabled: true,
                });
            }

            const next_date = new Date(token_release_data[completed_cycle].release_time);
            const release_amount = token_release_data[completed_cycle].per_cycle_release;
            const total_token = claimable_token;

            let claimed_token = 0;
            if (completed_cycle > 0) {
                token_release_data.forEach((element, idx) => {
                    if (idx < completed_cycle) {
                        const release_amount = token_release_data[idx].per_cycle_release;
                        claimed_token += (total_token * release_amount) / 100;
                    }
                });
            }

            const data = {
                next_release_date: `${next_date.getDate()}/${next_date.getMonth() + 1}/${next_date.getFullYear()}`,
                next_release_amount: (total_token * release_amount) / 100,
                claimed_token,
                completed_cycle,
                isDisabled: next_date ? new Date() < next_date : false,
                ownedToken: owned_token,
            };
            return setReleaseData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        nextRelease();
        // eslint-disable-next-line
    }, [selectedRocket, lockupHolders, account]);

    useEffect(() => {
        getHolders(params.id as string);
        getRocketById(params.id as string);
        // eslint-disable-next-line
    }, [params.id, account]);
    console.log(params.id);

    const cardItems = [
        {
            key: "1",
            label: "Overview",
            children: (
                <VestOverview selectedRocket={selectedRocket} lockupHolders={lockupHolders} nextRelease={releaseData} />
            ),
        },
        {
            key: "2",
            label: "Rockets",
            children: <VestRockets selectedRocket={selectedRocket} nextRelease={releaseData} />,
        },
        {
            key: "3",
            label: "Ship",
            children: <></>,
        },
    ];

    return (
        <>
            {contextHolder}
            <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5">
                <HeaderWithPills title="Pixpel" tabs={false} />
                <div className="flex w-full mt-24 relative">
                    <LaunchPadFilter classNames="absolute max-1xs:left-0 1xs:right-0 top-[-65px]  z-40  sm:top-0 items-baseline  bottom-0 m-auto" />
                    <Tabs defaultActiveKey="1" type="card" className="w-full projectTabs" items={cardItems} />
                </div>
            </div>
        </>
    );
};

export default VestInner;
