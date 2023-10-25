import React from "react";
import Probability from "./Probability";
import Image, { StaticImageData } from "next/image";

interface NFTWithProbability {
    img: StaticImageData | string;
    percent: string | number;
    height: string | number;
}

const NFTWithProbability = ({ img, percent, height }: NFTWithProbability) => {
    return (
        <div className="flex flex-col">
            <Image src={img} alt="NFt" className="rounded-md mb-6 w-80 h-80" />
            <div className="mb-3">Probability:</div>
            <Probability percent={percent} height={height} className="w-80" />
        </div>
    );
};

export default NFTWithProbability;
