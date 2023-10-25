/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Modal, Tooltip } from "antd";
import cart from "@public/assets/images/cart.svg";
import { purchaseList } from "@nft/pages-components/NFTMarket/dataList";
import { ADD_CART } from "@nft/actions/type";
import SuccessModal from "./SuccessModal";
import NftCardPayModal from "./NftCardPayModal";
import Image, { StaticImageData } from "next/image";
import { useAppDispatch } from "@nft/hooks";

interface NftCardModal {
    setShowModal: (value: boolean) => void;
    showModal: boolean;
    data: { id: string | number; img: StaticImageData | string } | null;
    nftDetails:
        | {
              title: string;
              value: string;
              items: { title: string; value: string }[];
          }[]
        | null;
}

const NftCardModal = ({ showModal, setShowModal, data, nftDetails }: NftCardModal) => {
    const [showSuccessModal, setShowSuccessModal] = useState<boolean | undefined>(false);
    const [payModal, setPayModal] = useState<boolean | undefined>(false);
    const [wishList, setWishList] = useState<boolean | undefined>(false);

    const dispatch = useAppDispatch();

    const handleCartClick = () => {
        setShowModal?.(false);
        dispatch({ type: ADD_CART, payload: data });
    };

    const handleBuyClick = () => {
        setShowModal?.(false);
        setPayModal(true);
    };
    return (
        <>
            {showModal ? (
                <div className="fixed inset-0 z-10 overflow-x-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal?.(false)}
                    ></div>
                    <div className="flex items-center px-4 py-6 min-h-screen">
                        <div className="relative flex flex-wrap lg:flex-nowrap w-full max-w-7xl mx-auto bg-app-black-modal rounded-xl shadow-lg px-4 sm:px-6 md:px-8 py-12 text-lg gap-4 sm:gap-6 md:gap-10">
                            <div className="flex flex-col gap-3 order-2 lg:order-1 lg:gap-7 w-full lg:w-2/5">
                                <Image
                                    src={data?.img as StaticImageData}
                                    alt="NFT"
                                    className="hidden lg:flex w-full h-full object-cover rounded-xl !relative"
                                />

                                <div className="grid grid-cols-1 gap-x-4 text-base">
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                        <div className="flex">Auction Ends:</div>
                                        <div className="lg:col-span-2 flex justify-end text-app-blue font-semibold">
                                            23/10/2023 5:00 PM CST
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                        <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">Minimum Bid:</div>
                                        <div className="flex justify-end items-center text-app-blue font-semibold">
                                            20 PIXP
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                        <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">Highest Bid:</div>
                                        <div className="flex justify-end items-center text-app-blue font-semibold">
                                            2500 PIXP
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                        <div className="flex">Remaining Time:</div>
                                        <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 flex justify-end items-center text-app-blue font-semibold">
                                            2 months : 4 hours : 60 sec
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                        <div className="flex flex-col gap-2 lg:gap-3">
                                            <button
                                                className="bg-app-green hover:bg-app-green-hover rounded-md uppercase text-sm px-4 py-2"
                                                onClick={handleBuyClick}
                                            >
                                                Buy
                                            </button>
                                            <button
                                                className="bg-app-blue hover:bg-app-blue-hover uppercase rounded-md text-sm px-2 py-2"
                                                onClick={() => setShowSuccessModal(true)}
                                            >
                                                Bid
                                            </button>
                                        </div>
                                        <div className="flex flex-col flex-wrap col-span-1  md:col-span-2 items-center md:items-end">
                                            <div className="text-app-blue text-xl font-semibold">
                                                Buy it now price: 5000 PIXP
                                            </div>
                                            <div className="from-group mt-2 flex flex-col w-full md:w-auto items-center">
                                                <label
                                                    htmlFor="offer_amout"
                                                    className="text-app-gray-dark font-semibold text-sm"
                                                >
                                                    Input Offer Amount Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="bg-gray-600 w-auto lg:w-[236px] h-[37px] rounded px-2 text-base text-app-blue"
                                                    id="offer_amount"
                                                    placeholder="Offer Amount"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full order-1 lg:order-2 lg:w-3/5">
                                <div className="flex flex-col 1xs:flex-row justify-between items-center 1xs:justify-between w-full 1xs:items-end mb-8">
                                    <div className="text-2xl order-2 mt-2 1xs:mt-0 1xs:order-1 flex justify-start">
                                        ARCHER LIGHT BOW LEGENDARY
                                    </div>
                                    <div className="flex order-1 1xs:order-2 justify-end gap-3">
                                        <Tooltip
                                            placement="bottom"
                                            title={"Add to Wishlist"}
                                            color="#fff"
                                            overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                                        >
                                            <div className="group bg-app-black-button rounded-md gap-2 flex justify-center items-center w-full px-4 py-3 cursor-pointer hover:bg-app-primary"  onClick={() => setWishList(true)}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="27"
                                                    height="27"
                                                    viewBox="0 0 27 27"
                                                    className="stroke-app-primary group-hover:stroke-white"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_960_23118)">
                                                        <path
                                                            d="M3.9375 23.0583V2.81359C3.93749 2.21634 4.17406 1.6434 4.59537 1.22007C5.01669 0.796751 5.58844 0.557518 6.18569 0.554688H24.1608"
                                                            stroke-width="1.05"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M13.9609 6.1875H19.5815"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M13.9609 8.4375H17.3333"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M13.9609 11.8203H19.5815"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M13.9609 14.0703H17.3333"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M13.9609 17.4375H19.5815"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M13.9609 19.6875H17.3333"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M19.686 26.4442H2.81375C2.51671 26.4456 2.22227 26.3882 1.94756 26.2752C1.67286 26.1622 1.42328 25.9958 1.21324 25.7858C1.0032 25.5757 0.83684 25.3261 0.723821 25.0514C0.610801 24.7767 0.553295 24.4824 0.554713 24.1853V23.0612H17.4378V24.1853C17.4378 24.7816 17.6747 25.3534 18.0963 25.775C18.5179 26.1967 19.0897 26.4335 19.686 26.4335C20.2822 26.4335 20.8541 26.1967 21.2757 25.775C21.6974 25.3534 21.9343 24.7816 21.9343 24.1853V2.77373C21.913 2.46473 21.9553 2.15462 22.0589 1.86272C22.1626 1.57082 22.3251 1.30333 22.5365 1.07691C22.7478 0.850478 23.0034 0.669957 23.2875 0.546517C23.5716 0.423077 23.8781 0.359375 24.1878 0.359375C24.4976 0.359375 24.8039 0.423077 25.088 0.546517C25.3721 0.669957 25.6278 0.850478 25.8392 1.07691C26.0505 1.30333 26.213 1.57082 26.3166 1.86272C26.4202 2.15462 26.4627 2.46473 26.4414 2.77373V3.84431H21.9343"
                                                            stroke-width="1.05"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M11.2551 12.3203L9.00692 14.5685L7.88281 13.4444"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M11.2551 17.5078L9.00692 19.7667L7.88281 18.6319"
                                                            stroke-width="1.05"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M10.7696 5.89155C10.4691 5.88763 10.1734 5.96651 9.91466 6.11946C9.65597 6.27241 9.44432 6.49353 9.30292 6.75871C9.15975 6.49268 8.94624 6.27115 8.68569 6.11822C8.42515 5.96529 8.12759 5.88686 7.82552 5.89155C7.61654 5.88441 7.40826 5.91875 7.2126 5.9925C7.01694 6.06626 6.83781 6.178 6.68554 6.32131C6.53328 6.46462 6.41084 6.63662 6.32537 6.82745C6.23991 7.01829 6.19303 7.22416 6.1875 7.43318C6.1875 9.47799 9.30292 10.5593 9.30292 10.5593C9.30292 10.5593 12.4076 9.4887 12.4076 7.43318C12.4021 7.22416 12.3552 7.01829 12.2698 6.82745C12.1843 6.63662 12.0618 6.46462 11.9096 6.32131C11.7573 6.178 11.5782 6.06626 11.3825 5.9925C11.1869 5.91875 10.9786 5.88441 10.7696 5.89155Z"
                                                            stroke-width="0.73"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_960_23118">
                                                            <rect width="27" height="27" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="bottom"
                                            title={"Add to Cart"}
                                            color="#fff"
                                            overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                                        >
                                            <div
                                                className="group bg-app-black-button rounded-md gap-2 flex justify-center items-center w-full px-4 py-3 cursor-pointer hover:bg-app-primary"
                                                onClick={handleCartClick}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    className="stroke-app-primary group-hover:stroke-white"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </Tooltip>
                                        <div
                                            className="group rounded-md flex justify-center items-center cursor-pointer"
                                            onClick={() => setShowModal?.(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 50 50"
                                                className="[&>rect]:group-hover:fill-app-primary [&>path]:group-hover:stroke-white"
                                                fill="none"
                                            >
                                                <rect width="50" height="50" rx="10" fill="#48515F" />
                                                <path
                                                    d="M19 19L25 25M31 31L25 25M25 25L19 31L31 19"
                                                    stroke="#717A8B"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src={data?.img as StaticImageData}
                                    fill
                                    alt="NFT"
                                    className="lg:hidden w-full h-full object-cover rounded-xl"
                                />
                                <div className="grid  grid-cols-1 sm:md-grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
                                    {nftDetails?.map((details, i) => {
                                        if (i > 2) return;
                                        return (
                                            <div
                                                className={`${details.title} mt-6 sm:mt-4 md:mt-4 lg:mt-0  border-app-gray `}
                                                key={i}
                                            >
                                                <div className="bg-app-black-button text-sm rounded-lg justify-between flex items-center tracking-wider py-2 px-6 mb-2 mx-4">
                                                    <h4 className="inline-flex uppercase font-semibold">
                                                        {details.title}
                                                    </h4>
                                                    <span className="text-app-blue font-semibold">{details.value}</span>
                                                </div>
                                                <ul
                                                    className={`px-1 py-1 border-app-gray  text-sm ${
                                                        i === 2 ? "border-r-0" : "md:border-r"
                                                    }`}
                                                >
                                                    {details.items?.map((item, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 px-4 -mx-1"
                                                            >
                                                                <h4 className="inline-flex uppercase">{item.title}</h4>
                                                                <span className="text-app-blue font-semibold">
                                                                    {item.value}
                                                                </span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex mt-4 flex-col">
                                    <div className="text-2xl uppercase">WEAPON SKILLS</div>

                                    <ul className="grid grid-cols-1 sm:grid-cols-4 mt-2">
                                        <li className="flex gap-2 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                            <h4 className="uppercase text-base">Sword:</h4>
                                            <span className="text-app-blue font-semibold">20</span>
                                        </li>
                                        <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                            <h4 className="uppercase text-base">Axe:</h4>
                                            <span className="text-app-blue font-semibold">20</span>
                                        </li>
                                        <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                            <h4 className="uppercase text-base">Bow:</h4>
                                            <span className="text-app-blue font-semibold">50</span>
                                        </li>
                                        <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                            <h4 className="uppercase text-base">Wand:</h4>
                                            <span className="text-app-blue font-semibold">80</span>
                                        </li>
                                        <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                            <h4 className="uppercase text-base">Staff:</h4>
                                            <span className="text-app-blue font-semibold">100</span>
                                        </li>
                                        <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                            <h4 className="uppercase text-base">Shield:</h4>
                                            <span className="text-app-blue font-semibold">20</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 mb-6 mt-8">
                                    <div className="text-2xl uppercase -mb-2">NFT STATUS</div>
                                    <div className="grid grid-cols-1 gap-x-4">
                                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">Blockchain:</div>
                                            <div className="flex justify-end text-app-blue font-semibold">
                                                CONCORDIUM
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
                                                Blockchain ID:
                                            </div>
                                            <div className="flex justify-end items-center text-app-blue font-semibold">
                                                c47befa...18076d627f
                                                <svg
                                                    className="h-5 w-5 ml-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    {" "}
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />{" "}
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">Game:</div>
                                            <div className="flex justify-end text-app-blue font-semibold">
                                                CRYPTO BOTS
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
                                                NFT Location:
                                            </div>
                                            <div className="flex justify-end text-app-blue font-semibold">C3RSTKOM</div>
                                        </div>
                                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
                                                Insurance Expires in:
                                            </div>
                                            <div className="flex justify-end text-app-blue font-semibold">
                                                03/12/2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-app-black-button py-5 px-5 rounded-md">
                                    <div className="text-xl">Previous Purchase</div>
                                    <div className="overflow-x-auto relative mt-4 w-full">
                                        <table className="table-auto">
                                            <thead>
                                                <tr>
                                                    <td className="text-gray-400 w-1/6 text-xs">Price</td>
                                                    <td className="text-gray-400 w-1/5 px-6 text-xs">
                                                        <div className="text-gray-400 w-max">USD Price</div>
                                                    </td>
                                                    <td className="text-gray-400 w-1/4 px-6 text-xs">
                                                        <div className="text-gray-400 w-max">Floor Differnece</div>
                                                    </td>
                                                    <td className="text-gray-400 w-1/6 px-6 text-xs">
                                                        <div className="text-gray-400 w-max">Expiration</div>
                                                    </td>
                                                    <td className="text-gray-400 pl-6 text-xs">From</td>
                                                </tr>
                                            </thead>
                                            <tbody className="px-4">
                                                {purchaseList.map((menu, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td className="py-2">
                                                                <div className="text-xs w-max">{menu.price}</div>
                                                            </td>
                                                            <td className="px-6">
                                                                <div className="text-xs w-max">{menu.usd}</div>
                                                            </td>
                                                            <td className="px-6">
                                                                <div className="text-xs w-max">{menu.floor}</div>
                                                            </td>
                                                            <td className="px-6">
                                                                <div className="text-xs w-max">{menu.expiration}</div>
                                                            </td>
                                                            <td className="pl-6">
                                                                <div className="underline text-xs w-max">
                                                                    {menu.from}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {
                <Modal
                    open={showSuccessModal}
                    className="[&>.ant-modal-content]:bg-main max-w-md"
                    closeIcon={false}
                    footer={null}
                >
                    <div className="flex flex-col items-center pt-[22px] pb-[30px] px-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="130"
                            height="130"
                            viewBox="0 0 130 130"
                            fill="none"
                        >
                            <circle cx="65" cy="65" r="64.5" stroke="#2EBD85" stroke-dasharray="2 2" />
                            <circle cx="65" cy="65" r="50" fill="#2EBD85" />
                            <path
                                d="M84.186 48.0339L70.0869 62.0222L58.5303 73.5829L46.9737 62.0222C46.3147 61.3669 45.4225 61.0003 44.4933 61.003C43.5641 61.0057 42.6741 61.3775 42.0189 62.0367C41.3638 62.6959 40.9973 63.5886 41 64.5182C41.0027 65.4477 41.3744 66.3381 42.0334 66.9934L56.0168 80.9818C56.3406 81.3123 56.7271 81.5747 57.1538 81.7534C57.5805 81.9321 58.0388 82.0235 58.5014 82.0224C58.9553 82.0224 59.4043 81.9301 59.8215 81.7512C60.2386 81.5724 60.6152 81.3106 60.9282 80.9818L88.9532 52.976C89.6083 52.3168 89.9748 51.4243 89.972 50.4947C89.9693 49.5652 89.5977 48.6748 88.9387 48.0194C88.2797 47.3641 87.3875 46.9973 86.4583 47C85.5291 47.0027 84.639 47.3747 83.9839 48.0339"
                                fill="white"
                            />
                        </svg>
                        <h4 className="text-lg font-medium text-white text-center mt-[23px] mb-[50px]">
                            Your Bid has been submitted. Please check the auction to be sure you won the bid.
                        </h4>
                        <button
                            className="text-lg max-w-[203px] font-medium py-5 bg-app-green hover:bg-app-green-hover w-full rounded-md"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Confirm
                        </button>
                    </div>
                </Modal>
            }
            {<NftCardPayModal showModal={payModal} setShowModal={setPayModal} data={data} nftDetails={nftDetails} />}
            {
                <Modal
                    open={wishList}
                    className="[&>.ant-modal-content]:bg-main max-w-xs [&>.ant-modal-content]:rounded-3xl [&>.ant-modal-content]:rounded-tl-none  h-48 "
                    closeIcon={false}
                    footer={null}
                >
                    <div className="flex flex-col items-center relative">
                        <div className="flex items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="104"
                                height="104"
                                viewBox="0 0 104 104"
                                fill="none"
                            >
                                <circle cx="52" cy="52" r="51.5" stroke="#2EBD85" stroke-dasharray="2 2" />
                                <circle cx="52" cy="52" r="40" fill="#2EBD85" />
                                <path
                                    d="M67.3921 38.8266L56.164 50.0101L46.9607 59.2528L37.7573 50.0101C37.2325 49.4862 36.522 49.1931 35.782 49.1952C35.042 49.1974 34.3332 49.4947 33.8114 50.0217C33.2897 50.5487 32.9979 51.2624 33 52.0056C33.0022 52.7487 33.2982 53.4606 33.8229 53.9845L44.9589 65.168C45.2168 65.4323 45.5246 65.6421 45.8644 65.7849C46.2043 65.9278 46.5692 66.0009 46.9376 66C47.2991 66 47.6567 65.9262 47.9889 65.7832C48.3211 65.6402 48.621 65.4309 48.8703 65.168L71.1886 42.7777C71.7103 42.2507 72.0021 41.5372 72 40.794C71.9978 40.0508 71.7019 39.339 71.1771 38.815C70.6523 38.2911 69.9417 37.9978 69.2017 38C68.4617 38.0022 67.7529 38.2996 67.2312 38.8266"
                                    fill="white"
                                />
                            </svg>
                            <button
                                className="group closeIcon inline-flex justify-end absolute right-0"
                                onClick={() => setWishList(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    className="fill-slate-600 group-hover:fill-slate-500"
                                    fill="none"
                                >
                                    <rect width="28" height="28" rx="5" />
                                    <path
                                        d="M9.79688 10.5L13.6469 14.35M17.4969 18.2L13.6469 14.35M13.6469 14.35L9.79688 18.2L17.4969 10.5"
                                        stroke="#717A8B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <h4 className="text-base font-medium text-white text-center mt-[10px]">
                            Successfully sent to the Wish List!
                        </h4>
                    </div>
                </Modal>
            }
        </>
    );
};

export default NftCardModal;
