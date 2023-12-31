import React, { useState } from "react";
import { tokenList } from "@nft/pages-components/Profile/datalist";
import TokenButton from "../Button/TokenButton";
import EstimateBalance from "./TokenState/EstimateBalance";
import ProfileCircle from "./ProfilePlayer/ProfileCircle";
import ProfileDevices from "./ProfilePlayer/ProfileDevices";
import ProfileActivity from "./ProfilePlayer/ProfileActivity";
import ProfileOpenOrders from "./ProfilePlayer/ProfileOpenOrders";
import ProfileSecurity from "./ProfilePlayer/ProfileSecurity";

const ProfilePlayerStat = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (idx: number) => () => {
        setSelectedIndex(idx);
    };

    return (
        <div>
            <div className="mt-12 font-semibold text-2xl">Balance Details</div>
            <div className="flex flex-col md:flex-row gap-4 mt-6 my-5">
                {tokenList.map((menu, idx) => {
                    return (
                        <TokenButton
                            key={idx}
                            title={menu.title}
                            selected={selectedIndex === idx}
                            handleClick={handleClick(idx)}
                        />
                    );
                })}
            </div>
            <div className="bg-app-black flex xl:flex-row flex-col h-auto w-full rounded-lg justify-between py-6 gap-6 px-6">
                <EstimateBalance id={selectedIndex} />
                <ProfileCircle />
            </div>
            <ProfileOpenOrders />
            <ProfileSecurity />
            <div className="flex flex-col lg:flex-row gap-12">
                <ProfileActivity />
                <ProfileDevices />
            </div>
        </div>
    );
};

export default ProfilePlayerStat;
