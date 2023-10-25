import React from "react";
import cart from "@launchpad/assets/icons/shopping-cart.svg";
import saveLater from "@launchpad/assets/icons/save_later.svg";
import Image, { StaticImageData } from "next/image";

interface NftCard {
    data: { img: string | StaticImageData };
    buy?: boolean;
    bid?: boolean;
}

const NftCard = ({ data, bid = false, buy = false }: NftCard) => {
    return (
        <div className="flex max-1xs:flex-shrink shrink-0 grow-0 basis-auto  xl1:w-[24%] flex-col py-4 gap-2 uppercase">
            <div className="flex justify-center">
                <Image src={data.img} alt="Game" className="cursor-pointer w-full max-w-full" />
            </div>
            <div className="flex justify-between border-b-2 border-app-gray pb-1">
                <div className={"max-1xs:text-base text-h5 lg:text-h4 xl1:text-h3 font-semibold"}>C3 PO</div>
                <div className={"max-1xs:text-base text-h3 xl1:text-h4 text-app-black-duration font-semibold"}>
                    THE WARRIOR
                </div>
            </div>
            <div className="flex justify-between">
                <div className={"text-lg font-semibold"}>
                    <div className="flex justify-between  max-1xs:gap-1 gap-3">
                        <p className=" text-base 2xl:text-lg">Price</p>
                        <span className="text-app-blue   max-1xs:w-full text-base 2xl:text-lg">200 PIXP</span>
                    </div>
                </div>
                <div className={"text-lg font-semibold"}>
                    <div className="flex  max-1xs:items-end justify-between gap-1">
                        <p className=" text-base 2xl:text-lg">Available</p>
                        <span className="text-app-blue  text-base 2xl:text-lg">{"x"}175</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="flex justify-between gap-2 w-full">
                    <div className="group w-14 bg-app-black-button flex rounded justify-center text-gray-400 text-sm font-medium p-4 cursor-pointer gap-1 items-center hover:bg-app-blue">
                        <Image src={cart} alt="cart" className="max-1xs:w-12 w-6 h-auto filter brightness-200" />
                    </div>
                    <div className="flex col-span-2 gap-2 w-full justify-center">
                        {buy && (
                            <button
                                className={
                                    "max-1xs:hidden flex px-14 lg:px-12 2xl:px-14 bg-app-green hover:bg-app-green-hover text-lg font-semibold   py-3 rounded-lg " +
                                    (bid && buy && "!px-5")
                                }
                            >
                                Buy
                            </button>
                        )}
                        {bid && (
                            <button
                                className={
                                    "max-1xs:hidden flex px-14 lg:px-12 2xl:px-14 bg-app-blue hover:bg-app-blue-hover text-lg font-semibold   py-3 rounded-lg " +
                                    (bid && buy && "!px-5")
                                }
                            >
                                Bid
                            </button>
                        )}
                    </div>
                    <div className="group w-14 bg-app-black-button flex rounded justify-center text-gray-400 text-sm font-medium px-4 py-1 max-1xs:py-2  cursor-pointer gap-1 items-center  hover:bg-app-blue">
                        <Image
                            src={saveLater}
                            alt="save for later"
                            className="max-1xs:w-12 w-6 h-auto filter brightness-200 object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <div className={"flex 1xs:hidden mt-2 mx-auto"}>
                {buy && (
                    <button className="bg-app-green hover:bg-app-green-hover text-lg font-semibold px-12 py-2 rounded-lg">
                        Buy
                    </button>
                )}
                {bid && (
                    <button className="bg-app-blue hover:bg-app-blue-hover text-lg font-semibold px-12 py-2 rounded-lg">
                        Bid
                    </button>
                )}
            </div>
        </div>
    );
};

export default NftCard;
