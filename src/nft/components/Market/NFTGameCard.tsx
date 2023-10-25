import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface NFTGameCardType {
    img: StaticImageData | string;
    gameName: string;
}

const NFTGameCard = ({ img, gameName }: NFTGameCardType) => {
    const navigate = useRouter();
    return (
        <div
            className="bg-app-black gap-2 flex flex-col justify-center py-4 px-4 items-center border-app-blue border-2 cursor-pointer mr-4"
            onClick={() => navigate.push("/game-market")}
        >
            <Image src={img} alt="Game" className="flex  h-31" />
            <div className="flex items-center w-max">{gameName}</div>
        </div>
    );
};

export default NFTGameCard;
