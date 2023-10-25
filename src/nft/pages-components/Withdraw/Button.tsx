import React from "react";

interface Button {
    onClick: () => void;
    title: string;
    selected: boolean;
}

const Button = ({ onClick, title, selected }: Button) => {
    const className = "flex items-center justify-center px-8 rounded-md cursor-pointer w-max hover:bg-app-blue h-14";
    return (
        <div className={className + (selected ? " bg-app-blue" : " bg-app-black-button")} onClick={onClick}>
            <div className="text-lg">{title}</div>
        </div>
    );
};

export default Button;
