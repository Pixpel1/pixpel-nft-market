import React, { useState } from "react";
import { useAppContext } from "@nft/contexts/AppContext";
import vector from "@public/assets/images/vector.svg";
import vectorBlue from "@public/assets/images/vector-blue.svg";
import { useRouter } from "next/router";
import Image from "next/image";

const Market = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useRouter();
    const context = useAppContext();

    return (
        <div className="cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
            <div className={"flex gap-1 items-center justify-between"}>
                <div className={` hover:text-app-blue ${context.developerHeader === 0 ? "text-app-blue " : ""}`}>
                    Marketplace
                </div>
                <Image
                    src={context.developerHeader === 0 ? vectorBlue : vector}
                    width={20}
                    height={20}
                    className="w-full h-full"
                    alt="vector"
                />
            </div>
            <div className="relative">
                {showDropDown ? (
                    <div className="absolute inset-8 left-3 z-10">
                        <div className="fixed inset-0 w-full h-full" onClick={() => setShowDropDown(!showDropDown)} />
                        <div className="flex flex-col rounded-b-md bg-app-black w-max text-lg">
                            <div
                                className="relative flex justify-start px-5 border-b-2 border-app-black py-1 hover:text-app-blue"
                                onClick={async () => {
                                    navigate.push("/nft-market");
                                    context.setDeveloperHeader?.(0);
                                }}
                            >
                                NFT
                            </div>
                            <div
                                className="relative flex justify-start px-5 py-1 hover:text-app-blue"
                                onClick={async () => {
                                    navigate.push("/game-market");
                                    await context.setDeveloperHeader?.(0);
                                }}
                            >
                                Game
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Market;
