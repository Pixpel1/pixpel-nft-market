import React from "react";
import RocketIcon from "@launchpad/assets/icons/rocket_icon.png";
import Image from "next/image";

interface StickyRocket {
    rocketClicked: boolean;
    handleRocketClick: () => void;
    classNames: string;
}

export const StickyRocket = ({ rocketClicked, handleRocketClick, classNames }: StickyRocket) => {
    return (
        <div className={"flex absolute right-4 " + classNames}>
            <div
                className="group bg-app-black rounded-md gap-2 px-4 w-16 h-14 border-app-blue border-2 flex justify-center items-center cursor-pointer shrink-0 cartIcon"
                onClick={handleRocketClick}
            >
                <Image src={RocketIcon} className="group-hover:brightness-200" alt="rocket" />
                <span>{rocketClicked ? "Close Rocket" : "Open Rocket"}</span>
            </div>
        </div>
    );
};

StickyRocket.defaultProps = {
    classNames: "",
};
