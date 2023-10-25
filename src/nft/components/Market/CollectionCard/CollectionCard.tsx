import React, { useState } from "react";
import { Tooltip, Modal } from "antd";
import GameCardModal from "@nft/components/CardModal/GameCardModal";
import { ADD_CART } from "@nft/actions/type";
import cart from "@public/assets/images/shopping-cart.svg";
import help from "@public/assets/images/help.svg";
import saveLater from "@public/assets/images/save_later.svg";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import { useAppDispatch } from "@nft/hooks";

interface CollectionCardType {
    data: { id: string | number; img: StaticImageData | string } | null;
}

const CollectionCard = ({ data }: CollectionCardType) => {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const [wishList, setWishList] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col px-5 py-4 bg-app-black rounded gap-2">
                <div className="flex gap-2">
                    <Tooltip
                        placement="right"
                        title={"Add to Cart"}
                        color="#fff"
                        overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                    >
                        <div
                            className="group bg-app-black-button flex rounded text-gray-400 text-sm font-medium px-2 py-1 cursor-pointer gap-1 items-center hover:bg-app-blue"
                            onClick={() => dispatch({ type: ADD_CART, payload: data })}
                        >
                            <Image src={cart} alt="cart" className="h-5 w-5 filter group-hover:brightness-200" />
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="right"
                        title={"Save For Later"}
                        color="#fff"
                        overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                    >
                        <div
                            className="group bg-app-black-button flex rounded text-gray-400 text-sm font-medium px-2 py-1 cursor-pointer gap-1 items-center  hover:bg-app-blue"
                            onClick={() => setWishList(true)}
                        >
                            <Image
                                src={saveLater}
                                alt="save for later"
                                className="h-5 w-5 filter brightness-100 group-hover:brightness-200"
                            />
                        </div>
                    </Tooltip>
                    <div className="flex w-full justify-end">
                        <Tooltip
                            placement="left"
                            title={"Info"}
                            color="#fff"
                            overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                        >
                            <div
                                className="group bg-app-black-button flex rounded px-2 text-sm font-medium text-gray-400 py-1 cursor-pointer gap-1 items-center hover:bg-app-blue"
                                onClick={() => setShowModal(true)}
                            >
                                <Image src={help} alt="help" className="filter group-hover:brightness-200" />
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        onClick={() =>
                            router.push(
                                {
                                    pathname: "/collections/single-collections",
                                    query: { singleData: JSON.stringify(data) },
                                },
                                "/collections/single-collections"
                            )
                        }
                        className="cursor-pointer"
                    >
                        {data?.img && <Image src={data?.img} alt="Game" className="cursor-pointer w-70 h-50" />}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold">BOXES OPENED</div>
                    <div className="text-app-blue font-semibold">4K</div>
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold">BOXES LEFT</div>
                    <div className="text-app-blue font-semibold">10K</div>
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold">MYSTERY BOX PRICE</div>
                    <div className="text-app-blue font-semibold">10K</div>
                </div>
            </div>
            {<GameCardModal showModal={showModal} setShowModal={setShowModal} data={data} />}
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
export default CollectionCard;
