import React from "react";

interface Button {
    title: string;
    handleClick: () => void;
}
const BuyButton = ({ title, handleClick }: Button) => {
    return (
        <div
            className="flex bg-app-green hover:bg-[#1FF19F] py-3 px-4 h-max w-max text-sm rounded-md hover:cursor-pointer active:bg-violet-700"
            onClick={handleClick}
        >
            {title}
        </div>
    );
};

export default BuyButton;
