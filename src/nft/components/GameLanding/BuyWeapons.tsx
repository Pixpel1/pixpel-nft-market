import React from "react";
import nft1 from "@public/assets/images/NFT/nft-1.png";
import Button from "../Button/ButtonMar";
import Image from "next/image";

const BuyWeapons = () => {
    return (
        <div className="flex sm:flex-row flex-col 2xl:py-24 xl:py-20 lg:py-16 md:py-12 sm:py-9 py-5 bg-app-black sm:gap-0 gap-3">
            <div className="flex justify-center items-center sm:w-1/2 w-full 2xl:px-32 xl:px-24 lg:px-16 md:px-8 px-3">
                <Image src={nft1} alt="Game" className="w-full" />
            </div>
            <div className="flex flex-col justify-center 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-3 gap-2 sm:w-1/2 w-full 2xl:px-32 xl:px-24 lg:px-16 md:px-8 px-3">
                <div className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold leading-loose">
                    HOW TO PLAY <br /> CRYPTO BOTS DESCRIPTION
                </div>
                <div className="text-gray-500 2xl:text-lg lg:text-base text-sm font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet enim orci. Sed placerat
                    varius lorem ultrices tincidunt. Ut eget cursus enim. Ut faucibus, orci et fringilla finibus, lectus
                    augue tempor felis, ut fermentum nulla nunc ut ex. Fusce tortor magna, convallis quis diam eu,
                    tempor faucibus ligula. Praesent nec elit tellus. Nam congue auctor ullamcorper. Donec in felis
                    auctor nisi varius hendrerit in a nunc. Donec dolor leo, fermentum quis elit sed, vehicula accumsan
                    nisi. Curabitur eget sem at est rutrum cursus. Suspendisse dictum tempor tincidunt. Suspendisse at
                    felis velit. Nulla sodales semper justo vel tristique. Sed iaculis faucibus nibh, sit amet auctor
                    est.
                </div>
                <Button
                    title="Buy Weapons"
                    handleClick={function (): void {
                        console.log("Function not implemented.");
                    }}
                />
            </div>
        </div>
    );
};

export default BuyWeapons;
