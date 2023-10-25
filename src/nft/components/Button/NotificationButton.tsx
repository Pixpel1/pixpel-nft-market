import React from "react";

interface NotificationButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
}

const NotificationButton = ({ title, selected, handleClick }: NotificationButton) => {
    const className = "rounded-full w-2 h-2 mx-2 flex-none";
    return (
        <div
            className="flex items-center bg-app-black hover:bg-[#37404C] rounded-md px-[30px] py-[15px] cursor-pointer"
            onClick={handleClick}
        >
            <div className={className + (selected ? " bg-app-green" : " bg-app-red")}></div>
            <p className="text-[16px] font-medium">{title}</p>
        </div>
    );
};

export default NotificationButton;
