import React from "react";

interface SecurityButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
}

const SecurityButton = ({ title, handleClick, selected }: SecurityButton) => {
    const className = "rounded-full w-3 h-3";
    return (
        <div
            className="bg-app-black-button hover:bg-[#717A8B] py-4 w-auto items-center justify-center flex rounded-md gap-3 px-12 font-medium text-base hover:cursor-pointer"
            onClick={handleClick}
        >
            <div className={className + (selected ? " bg-app-green" : " bg-app-red")}></div>
            {title}
        </div>
    );
};
export default SecurityButton;
