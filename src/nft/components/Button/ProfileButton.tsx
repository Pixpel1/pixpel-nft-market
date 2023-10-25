import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProfileButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
    img?: string | StaticImageData;
    selectedImg?: string | StaticImageData;
}

const ProfileButton = ({ handleClick, title, selected, img, selectedImg }: ProfileButton) => {
    const className = "rounded-md hover:bg-app-blue cursor-pointer";
    const pictureClassName = "h-6 w-6 flex-none ";
    return (
        <div className={className + (selected ? " bg-app-blue" : " bg-app-black-button")} onClick={handleClick}>
            <div className="flex items-center text-base font-medium gap-3 px-6 py-4">
                {!img ? (
                    <div
                        className={pictureClassName + (selected ? "bg-white/20 rounded-full" : "bg-app-black-select")}
                    ></div>
                ) : (
                    <Image src={(selected ? selectedImg : img) || ""} alt="" />
                )}
                {title}
            </div>
        </div>
    );
};
export default ProfileButton;
