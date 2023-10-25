import Auction from "@launchpad/components/gameLobby/Auctions";
import React from "react";

function NFTMarketplace() {
    return (
        <div className="bg-app-black-modal py-16">
            <div className="text-center font-bold text-4xl">NFT MARKETPLACE</div>
            <Auction buy title="BUY NOW" />
            <Auction bid />
            <Auction bid buy title="MYSTERY BOX" />
        </div>
    );
}

export default NFTMarketplace;
