import React, { useState } from "react";
import vector from "@launchpad/assets/icons/vector.svg";
import Image from "next/image";

const Market = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div className="cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
            <div className={"flex px-5 gap-1 items-center justify-between"}>
                <div className="hover:text-app-blue">Market</div>
                <Image src={vector} alt="vector" />
            </div>
            <div className="relative">
                {showDropDown ? (
                    <div className="absolute inset-8 left-3 z-10">
                        <div className="fixed inset-0 w-full h-full" onClick={() => setShowDropDown(!showDropDown)} />
                        <div className="flex flex-col rounded-b-md bg-app-black w-max text-lg">
                            <div className="relative flex justify-start px-5 border-b-2 border-app-black py-1 hover:text-app-blue">
                                NFT
                            </div>
                            <div className="relative flex justify-start px-5 py-1 hover:text-app-blue">Game</div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Market;
