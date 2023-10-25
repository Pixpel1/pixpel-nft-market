import Image, { StaticImageData } from "next/image";
import React from "react";

interface GameIntroProps {
    image: string | StaticImageData;
    title: string;
    userNumber: string;
    desription: string;
}

const GameIntro = ({ image, title, userNumber, desription }: GameIntroProps) => {
    return (
        <div className="flex flex-col gap-4">
            <Image src={image} alt="Game" className="w-60" />
            <div className="text-lg text-gray-500 font-medium">{title}</div>
            <div className="text-4xl font-bold">{userNumber}</div>
            <div className="text-gray-500 text-base w-2/3">{desription}</div>
        </div>
    );
};

export default GameIntro;
