import React from "react";
import NFT from "@public/assets/images/market/nft-1.jpg";
import Image from "next/image";

const NFTAvatar = () => {
    return (
        <div className="flex w-24 h-24 bg-app-black-button rounded-md items-center justify-center">
            <Image src={NFT} alt="NFT" className="w-20 h-20 rounded bg-app-black-button" />
        </div>
    );
};

export default NFTAvatar;
