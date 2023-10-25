import React from "react";

interface ColorStatus {
    title: string;
    color: string;
}

const ColorStatus = ({ color, title }: ColorStatus) => {
    return (
        <div className="flex gap-2 items-center">
            <div className={color + " h-3 w-3 rounded-sm flex-none"} />
            <div className="font-medium">{title}</div>
        </div>
    );
};

export default ColorStatus;
