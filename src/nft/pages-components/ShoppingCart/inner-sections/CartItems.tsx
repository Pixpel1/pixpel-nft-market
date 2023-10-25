import React from "react";
import featuredImage1 from "@public/assets/images/NFT/nft-2.png";
import ArcherImage from "@public/assets/images/NFT/nft-3.png";
import NftSword from "@public/assets/images/NFT/nft-1.png";
import { useAppSelector } from "@nft/hooks";
import Image from "next/image";

const CartItems = () => {
    const cardsInCart: any[] = useAppSelector((state) => state.cart);
    return (
        <>
            <div className="flex flex-col payment mb-10 px-6">
                <div className="flex">
                    <h3 className="2xl:text-3xl xl:text-2xl text-xl font-semibold uppercase text-white bg-app-black px-5 py-4 rounded-sm">
                        NFTs
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row items-center border-b-2 border-app-gray pb-6 my-4">
                    <div className="flex shrink-0">
                        <Image
                            src={ArcherImage}
                            className=" border-x-[14px] border-app-gray w-4/5 border-y-[16px]"
                            alt=""
                        />
                    </div>
                    <div className="flex w-full">
                        <ul className="w-full">
                            <li className="pb-2">
                                <h4 className="uppercase 2xl:text-4xl text-2xl font-bold">ARCHER</h4>
                            </li>
                            <li>
                                <h5 className="capitalize text-lg text-app-black-duration">CRYPTOBOTS</h5>
                            </li>
                            <li>
                                <h5 className="uppercase text-app-blue text-h5">{`361`} PIXP</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center border-b-2 border-app-gray pb-6 my-4">
                    <div className="flex shrink-0">
                        <Image
                            src={featuredImage1}
                            alt=""
                            className=" border-x-[14px] border-app-gray w-4/5 border-y-[16px]"
                        />
                    </div>
                    <div className="flex w-full">
                        <ul className="w-full">
                            <li className="pb-2">
                                <h4 className="uppercase 2xl:text-4xl text-2xl font-bold">GOLF GIL</h4>
                            </li>
                            <li>
                                <h5 className="capitalize text-lg text-app-black-duration">CRYPTOBOTS</h5>
                            </li>
                            <li>
                                <h5 className="uppercase text-app-blue text-h5">{`1000`} PIXP</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center border-app-gray pb-6 my-4">
                    <div className="flex shrink-0">
                        <Image
                            src={NftSword}
                            alt=""
                            className=" border-x-[14px] border-app-gray w-4/5 border-y-[16px]"
                        />
                    </div>
                    <div className="flex w-full">
                        <ul className="w-full">
                            <li className="pb-2">
                                <h4 className="uppercase 2xl:text-4xl text-2xl font-bold">SWORD</h4>
                            </li>
                            <li>
                                <h5 className="capitalize text-lg text-app-black-duration">DUNGEONS OF CRYPTO</h5>
                            </li>
                            <li>
                                <h5 className="uppercase text-app-blue text-h5">{`1000`} PIXP</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col payment mb-10 px-6">
                <div className="flex">
                    <h3 className="2xl:text-3xl xl:text-2xl text-xl font-semibold uppercase text-white bg-app-black px-5 py-4 rounded-sm">
                        MYSTERY BOX 1000 PIXP{" "}
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row items-center border-b-2 border-app-gray pb-6 my-4">
                    <div className="flex shrink-0">
                        <Image
                            src={NftSword}
                            alt=""
                            className=" border-x-[14px] border-app-gray w-4/5 border-y-[16px]"
                        />
                    </div>
                    <div className="flex w-full">
                        <ul className="w-full">
                            <li className="pb-2">
                                <h4 className="uppercase 2xl:text-4xl text-2xl font-bold">CRYPTOBOT</h4>
                            </li>
                            <li>
                                <h5 className="uppercase text-app-blue text-h5">{`1000`} PIXP</h5>
                            </li>
                            <li>
                                <h5 className="capitalize text-lg text-app-black-duration">FULL INSURANCE</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center border-b-2 border-app-gray pb-6 my-4">
                    <div className="flex shrink-0">
                        <Image
                            src={NftSword}
                            alt=""
                            className=" border-x-[14px] border-app-gray w-4/5 border-y-[16px]"
                        />
                    </div>
                    <div className="flex w-full">
                        <ul className="w-full">
                            <li className="pb-2">
                                <h4 className="uppercase 2xl:text-4xl text-2xl font-bold">DUNGEONS OF CRYPTO</h4>
                            </li>
                            <li>
                                <h5 className="uppercase text-app-blue text-h5">{`4000`} PIXP</h5>
                            </li>
                            <li>
                                <h5 className="capitalize text-lg text-app-black-duration">SINGLE INSURANCE</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;
