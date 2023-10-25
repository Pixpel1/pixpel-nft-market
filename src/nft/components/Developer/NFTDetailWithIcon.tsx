import Image, { StaticImageData } from "next/image";
import React from "react";

interface NFTDetailType {
    title: string;
    content: string;
    color: string;
    image: string | StaticImageData;
}

const NFTDetailWithIcon = ({ title, content, color, image }: NFTDetailType) => {
    return (
        <div className="flex flex-col gap-3 w-1/3">
            <div>{title}</div>
            <div className="flex gap-3 justify-center items-center bg-app-black rounded-lg py-6">
                <Image src={image as StaticImageData} alt="NFT" className="w-7" />
                <div className={color}>{content}</div>
            </div>
        </div>
    );
};

export default NFTDetailWithIcon;
