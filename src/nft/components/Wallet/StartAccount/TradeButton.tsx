import React from "react";

interface Button {
    title: string;
    handleClick: () => void;
}
const TradeButton = ({ title, handleClick }: Button) => {
    return (
        <div
            className="flex bg-app-red hover:bg-[#FE8091] py-3 px-4 h-max w-max text-sm rounded-md hover:cursor-pointer active:bg-violet-700"
            onClick={handleClick}
        >
            {title}
        </div>
    );
};

export default TradeButton;
