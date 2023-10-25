import Image, { StaticImageData } from "next/image";
import React from "react";

interface data {
    img: StaticImageData | string;
    title?: string;
    des?: string;
    href?: string;
}

function SellYourNFT() {
    return (
        <>
            <div className="flex flex-col px-[30px] mt-[131px] max-sm:mt-4 max-sm:px-0">
                <div className="flex justify-center">
                    <p className="flex text-[#FFFFFF] text-center text-[77px] max-sm:text-[24px] max-lg:text-[36px] font-semibold">
                        Create and Sell Your NFTs
                    </p>
                </div>
                <div className="flex gap-x-[35px] mt-[74px] max-sm:gap-x-4 max-sm:mt-4 max-lg:overflow-x-scroll scroll">
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex cursor-pointer flex-col bg-[#FFFFFF3D] hover:bg-[#717a8beb] min-w-[160px] rounded-[27px] p-[44px_50px_50px_42px] max-sm:rounded-[10px] max-sm:p-[10px_15px_10px_15px] gap-y-[16px]"
                        >
                            <div className="w-fit">
                                <Image alt="" src={item.img} width={72} height={67} onClick={() => item.href} />
                            </div>
                            <div>
                                <p className="text-[#FFFFFF] text-[28px] max-sm:text-[18px] font-medium">
                                    {item.title}
                                </p>
                                <p className="text-[#FFFFFF] text-[18px] max-sm:text-[12px]">{item.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SellYourNFT;

const data: data[] = [
    {
        img: "/assets/images/home/Players/connectwallet.svg",
        title: "Connect Wallet",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        href: "/",
    },
    {
        img: "/assets/images/home/Players/nftmarketplace.svg",
        title: "NFT Marketplace",
        des: "We provide a marketplace to buy or sell creator´s collections of NFTs",
        href: "/collection",
    },
    {
        img: "/assets/images/home/Players/collectnft.svg",
        title: "Collect NFT",
        des: "Add your favorite NFT from our marketplace to your collection from now.",
    },
];
