import React from "react";

interface TokenButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
}
const TokenButton = ({ handleClick, title, selected }: TokenButton) => {
    const className = "rounded-md hover:bg-[#717A8B] active:bg-app-black-light cursor-pointer";
    return (
        <div className={className + (selected ? " bg-app-blue" : " bg-app-black-button")} onClick={handleClick}>
            <div className="flex items-center font-semibold text-base justify-center gap-2 lg:px-12 px-4 py-2.5">
                {title}
            </div>
        </div>
    );
};
export default TokenButton;
