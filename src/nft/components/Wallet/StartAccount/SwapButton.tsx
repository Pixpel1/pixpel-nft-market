import React from "react";

interface Button {
    title: string;
    handleClick: () => void;
}
const SwapButton = ({ title, handleClick }: Button) => {
    return (
        <div
            className="flex bg-app-blue hover:bg-[#50D0FB] py-3 px-4 h-max w-max text-sm rounded-md cursor-pointer active:bg-violet-700"
            onClick={handleClick}
        >
            {title}
        </div>
    );
};

export default SwapButton;
