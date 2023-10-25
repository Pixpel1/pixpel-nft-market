import Link from "next/link";
import { useEffect, useState } from "react";
import { ADD_CART } from "../../actions/type";
import Cart from "../../components/Cart/Cart";
import HeaderWithPills from "../../components/Market/HeaderWithPills/HeaderWithPills";
import { StickyCart } from "../../components/Market/StickyCart/StickyCart";
import { nftDetails, nftSingleData } from "./dataList";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch } from "@nft/hooks";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const NftLanding = () => {
    // const [nftSingleData, setNftSingleData] = useState<nftSingleData>();
    const { singleData } = useRouter().query;
    const dispatch = useAppDispatch();
    const [cartClicked, setCartClicked] = useState(false);
    const handleCartClick = () => {
        setCartClicked(!cartClicked);
    };
    // Check if singleData is defined and not empty
    if (!singleData || singleData === "undefined") {
        // Handle the case when singleData is undefined or 'undefined'
        return <div>Data not available</div>;
    }

    try {
        // Parse the JSON data if it's valid
        const nftSingleData = JSON.parse(decodeURIComponent(singleData as string));

        // Use the parsed data here
        return (
            <>
                <div
                    className={
                        (cartClicked ? "relative" : "") +
                        " 2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5 relative"
                    }
                >
                    <HeaderWithPills title={"NFT Details"} tabs={false} />

                    <div className="flex gap-8 mt-5">
                        <div className={"w-full"}>
                            <div className="lg1:grid-cols-3  grid-cols-1 bg-app-black grid gap-y-8 lg1:gap-8 p-10">
                                <div className="bg-app-black-button p-6 row-span-1 flex justify-center">
                                    <Image
                                        src={nftSingleData.img}
                                        alt="featured"
                                        className="w-full object-cover object-center"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <h4 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md uppercase text-sm mb-6 font-semibold border-b-2 pb-2 border-b-app-gray">
                                        CRYPTO BOT LEGENDARY SET
                                    </h4>
                                    <h4 className="2xl:text-3 xl xl:text-xl lg:text-lg md:text-md uppercase text-sm font-semibold border-b-2 pb-6 border-b-app-gray">
                                        HUMAN ARCHER WITH ARMOR
                                    </h4>
                                    <div className="grid grid-cols-1 gap-x-4">
                                        <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="2xl:col-span-2 sm:col-span-1">
                                                <p className="2xl:text-xl xl:text-lg text-base font-medium">
                                                    2500 PIXP
                                                </p>
                                            </div>
                                            <div className="flex gap-2 ml-auto">
                                                <Link
                                                    href="/checkout"
                                                    className="bg-app-green hover:bg-app-green-hover rounded-md text-sm 2xl:text-lg px-12 py-2 font-semibold lg:col-span-2 md:col-span-2 uppercase"
                                                >
                                                    Buy
                                                </Link>
                                                <button
                                                    className="bg-app-blue hover:bg-app-blue-hover rounded-md text-sm 2xl:text-lg  font-semibold px-3 py-2 uppercase"
                                                    onClick={() => dispatch({ type: ADD_CART, payload: nftSingleData })}
                                                >
                                                    Send to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="2xl:col-span-2 sm:col-span-1">
                                                <p className="2xl:text-xl xl:text-lg text-base font-medium">
                                                    Auction Ends:
                                                </p>
                                            </div>
                                            <div className="flex justify-end font-semibold">
                                                <p className="text-xl text-app-blue  font-medium">
                                                    23/10/2023 5:00 PM CST
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="2xl:col-span-2 sm:col-span-1">
                                                <p className="2xl:text-xl xl:text-lg text-base font-medium">
                                                    Remaining Time:
                                                </p>
                                            </div>
                                            <div className="flex justify-end font-semibold">
                                                <p className="text-xl text-app-blue font-medium">
                                                    5 Days 2:30:51 PM CST
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="2xl:col-span-2 sm:col-span-1">
                                                <p className="2xl:text-xl xl:text-lg text-base font-medium">
                                                    Highest Bid:
                                                </p>
                                            </div>
                                            <div className="flex justify-end font-semibold">
                                                <p className="text-xl text-app-blue  font-medium">2000 PIXP</p>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="2xl:col-span-2 sm:col-span-1">
                                                <p className="2xl:text-xl xl:text-lg text-base font-medium">
                                                    Minimum Bid:
                                                </p>
                                            </div>
                                            <div className="flex justify-end font-semibold">
                                                <p className="text-xl text-app-blue  font-medium">+20 PIXP</p>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="2xl:col-span-2 sm:col-span-1">
                                                <button className="bg-app-blue hover:bg-app-blue-hover rounded-md 2xl:text-lg font-semibold px-14 py-2">
                                                    BID
                                                </button>
                                            </div>
                                            <div className="flex justify-end font-semibold">
                                                <p className="text-xl text-app-blue font-medium">2020 PIXP</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full my-5">
                                <div className="flex justify-center w-full">
                                    <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg uppercase text-center text-lg mb-6 font-medium">
                                        NFT Details
                                    </h4>
                                </div>
                                <div className="grid  grid-cols-1 sm:md-grid-cols-2  md:grid-cols-2 lg:grid-cols-4">
                                    {nftDetails.map((details, i) => {
                                        return (
                                            <div className={`${details.title} mt-6 sm:mt-4 md:mt-4 lg:mt-0 `} key={i}>
                                                <div className="bg-app-black-button text-sm rounded-lg justify-between flex items-center tracking-wider py-2 px-6 mb-4 mx-4">
                                                    <h4 className="inline-flex uppercase font-semibold">
                                                        {details.title}
                                                    </h4>
                                                    <span className="text-app-blue font-semibold">{details.value}</span>
                                                </div>
                                                {details.items.map((item, index) => {
                                                    return (
                                                        <ul
                                                            key={index}
                                                            className="px-5 py-3 border-b border-app-gray  text-sm"
                                                        >
                                                            <li className="flex gap-4 justify-between items-center py-2 mx-4">
                                                                <h4 className="inline-flex uppercase">{item.title}</h4>
                                                                <span className="text-app-blue font-semibold">
                                                                    {item.value}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                                <hr className="border-t-2 border-t-gray-400 border-solid my-6" />
                                <div className="flex flex-nowrap flex-col sm:flex-row justify-center w-full">
                                    <div className="flex flex-col  flex-wrap w-full">
                                        <ul>
                                            <li className="py-3 border-b border-app-gray flex justify-between px-2 sm:pr-6">
                                                <p>Blockchain:</p>
                                                <span className="text-app-blue font-semibold">Concordium</span>
                                            </li>
                                            <li className="py-3 border-b border-app-gray flex justify-between px-2 sm:pr-6">
                                                <p>Blockchain NFT ID:</p>
                                                <span className="text-app-blue font-semibold">C470X8912JHLV56</span>
                                            </li>
                                            <li className="py-3 border-b border-app-gray flex justify-between px-2 sm:pr-6">
                                                <p>Game:</p>
                                                <span className="text-app-blue font-semibold">Crypto Bots</span>
                                            </li>
                                            <li className="py-3 border-b border-app-gray flex justify-between px-2 sm:pr-6">
                                                <p>NFT Location:</p>
                                                <span className="text-app-blue font-semibold">Pixpel Wallet</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden sm:flex flex-col  border-l border-app-gray "></div>
                                    <div className="flex flex-col  flex-wrap w-full">
                                        <ul>
                                            <li className="py-3 border-b border-app-gray flex px-2 sm:pl-6 justify-between">
                                                <p className="inline-flex">Owner:</p>
                                                <span className="text-app-blue font-semibold">C3RSTKOM</span>
                                            </li>
                                            <li className="py-3 border-b border-app-gray flex px-2 sm:pl-6 justify-between">
                                                <p>Insurance:</p>
                                                <span className="text-app-blue font-semibold">Yes</span>
                                            </li>
                                            <li className="py-3 border-b border-app-gray flex px-2 sm:pl-6 justify-between">
                                                <p>Insurance Expiration Date:</p>
                                                <span className="text-app-blue font-semibold">03/12/2023</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full my-5">
                                <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg uppercase text-center text-lg mb-6 font-medium">
                                    DESCRIPTION
                                </h4>
                                <div className="flex bg-app-black-button rounded-lg w-100 h-50"></div>
                            </div>
                        </div>
                    </div>
                    <StickyCart cartClicked={cartClicked} handleCartClick={handleCartClick} classNames="top-40" />
                    <div
                        className={
                            cartClicked
                                ? "w-4/5 sm:w-3/5 md:w-2/5 xl1:w-1/5 absolute right-0 top-40 h-full ease-in duration-[0.2s] translate-x-0"
                                : "absolute right-0 top-40 ease-out duration-[0.2s] translate-x-[200%]"
                        }
                    >
                        <Cart showCart={cartClicked} setShowCart={setCartClicked} />
                    </div>
                </div>
            </>
        );
    } catch (error) {
        // Handle JSON parsing errors here
        console.error("Error parsing JSON:", error);
        return <div>Error parsing data</div>;
    }
};

export default NftLanding;
