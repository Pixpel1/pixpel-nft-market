import React from "react";
import nftMarketPlace from "@launchpad/assets/images/marketPlace_wallet.png";
import Image from "next/image";

const NftWalletDescription = () => {
    return (
        <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pr-5 bg-app-black">
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-0 gap-x-20 py-24 items-center ">
                <div className="flex flex-col">
                    <h3 className="text-3xl  lg:text-[40px] mb-8 font-bold">NFT Marketplace and Wallet</h3>
                    <p className="text-base  sm:text-lg text-app-black-duration font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet enim orci. Sed placerat
                        varius lorem ultrices tincidunt. Ut eget cursus enim. Ut faucibus, orci et fringilla finibus,
                        lectus augue tempor felis, ut fermentum nulla nunc ut ex. Fusce tortor magna, convallis quis
                        diam eu, tempor faucibus ligula. Praesent nec elit tellus. Nam congue auctor ullamcorper. Donec
                        in felis auctor nisi varius hendrerit in a nunc. Donec dolor leo, fermentum quis elit sed,
                        vehicula accumsan nisi. Curabitur eget sem at est rutrum cursus. Suspendisse dictum tempor
                        tincidunt. Suspendisse at felis velit. Nulla sodales semper justo vel tristique. Sed iaculis
                        faucibus nibh, sit amet auctor est.
                    </p>
                </div>
                <div className="flex">
                    <Image src={nftMarketPlace} className="max-w-full w-full" alt="nftMarket" />
                </div>
            </div>
        </div>
    );
};

export default NftWalletDescription;
