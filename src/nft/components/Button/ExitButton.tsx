import React from "react";
import Arrow from "@public/assets/images/arrow.svg";
import Image from "next/image";

const ExitButton = () => {
    return (
        <div className="flex bg-app-black-button rounded-md cursor-pointer px-10 py-2 h-max gap-3">
            <div className="text-app-red font-medium text-lg">Exit</div>
            <Image src={Arrow} alt="arrow" />
        </div>
    );
};
export default ExitButton;
