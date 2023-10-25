import React from "react";
import MintGameCharacter from "./MintGameCharacter";
import HotTrending from "./HotTrending";
import InvestmentStake from "./InvestmentStake";
import DreamList from "./DreamList";

function index() {
    return (
        <div className="bg-cover pt-11 bg-[url('/assets/images/UserHome/bgmainc2.jpg')] relative">
            <MintGameCharacter />
            <HotTrending />
            <InvestmentStake />
            <DreamList />
        </div>
    );
}

export default index;
