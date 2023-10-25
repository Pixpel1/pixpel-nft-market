import React, { useEffect, useRef, useState } from "react";
import { Tooltip, Modal } from "antd";
import GameCardModal from "@nft/components/CardModal/GameCardModal";
import { ADD_CART } from "@nft/actions/type";
import cart from "@public/assets/images/shopping-cart.svg";
import saveLater from "@public/assets/images/save_later.svg";
import Image, { StaticImageData } from "next/image";
import { useAppDispatch } from "@nft/hooks";
import { useRouter } from "next/router";

interface CollectionButtons {
    id: number;
    title: string;
}
interface GameImage {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
    blurWidth: number;
    blurHeight: number;
}
interface GameData {
    id: number;
    img: GameImage;
    title: string;
    genre: string;
    price: string;
    token: string;
    stock: string;
    buttons: CollectionButtons[];
}
interface CollectionCardType {
    data: GameData | null;
    cartClicked: boolean;
    gridSmall: boolean;
}

const SingleCollectionCard = ({ data, gridSmall, cartClicked }: CollectionCardType) => {
    const navigate = useRouter();
    const gameButtons = data?.buttons;
    // const bidPrice = useRef<HTMLButtonElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const [wishList, setWishList] = useState(false);

    useEffect(() => {
        const handleMouseEnter = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const originalText = target.textContent || "";

            // Check if the text contains "bid" and replace it with "500 PIXP" on hover
            if (originalText.includes("bid")) {
                const updatedText = originalText.replace("bid", "500 PIXP");
                target.textContent = updatedText;
            }
        };

        const handleMouseLeave = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const originalText = target.textContent || "";

            // Check if the text contains "500 PIXP" and replace it with "bid" on hover out
            if (originalText.includes("500 PIXP")) {
                const updatedText = originalText.replace("500 PIXP", "bid");
                target.textContent = updatedText;
            }
        };

        // Attach event listeners to the container element
        const containerElement = containerRef.current;

        if (containerElement) {
            const buttons = containerElement.querySelectorAll(".bidButton");
            buttons.forEach((button) => {
                button.addEventListener("mouseenter", handleMouseEnter as EventListener);
                button.addEventListener("mouseleave", handleMouseLeave as EventListener);
            });
        }

        return () => {
            // Clean up event listeners when the component unmounts
            if (containerElement) {
                const buttons = containerElement.querySelectorAll(".bidButtonn");
                buttons.forEach((button) => {
                    button.removeEventListener("mouseenter", handleMouseEnter as EventListener);
                    button.removeEventListener("mouseleave", handleMouseLeave as EventListener);
                });
            }
        };
    }, [gridSmall]);
    return (
        <>
            <div className={`flex flex-col py-4 gap-2 uppercase`} ref={containerRef}>
                <div className="flex justify-center">
                    {data?.img && <Image src={data?.img} alt="Game" className="cursor-pointer w-full max-w-full" />}
                </div>
                <div className="flex justify-between border-b-2 border-app-gray pb-1">
                    <div className={(gridSmall ? "text-h4 " : "text-h3 ") + "font-semibold"}>C3 PO</div>
                    <div className={(gridSmall ? "text-h5 " : "text-h4 ") + " text-app-black-duration font-semibold"}>
                        THE WARRIOR
                    </div>
                </div>
                {gridSmall ? (
                    <>
                        <div className="flex justify-between">
                            <div className={"text-sm font-semibold"}>
                                <div className={`flex flex-col justify-between gap-1`}>
                                    <p>Price</p>
                                    <span className="text-app-blue">200 PIXP</span>
                                </div>
                            </div>
                            <div className={"text-sm font-semibold"}>
                                <div className="flex flex-col justify-end gap-1">
                                    <p>Available</p>
                                    <span className="text-app-blue ml-auto">{"x"}175</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between">
                            <div className={(gridSmall ? "text-sm " : "text-lg") + "font-semibold"}>
                                <div className={`flex justify-between gap-3`}>
                                    <p>Price</p>
                                    <span className="text-app-blue">200 PIXP</span>
                                </div>
                            </div>
                            <div className={(gridSmall ? "text-sm " : "text-lg") + "font-semibold"}>
                                <div className="flex justify-between gap-1">
                                    <p>Available</p>
                                    <span className="text-app-blue">{"x"}175</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex mt-2">
                    <div
                        className={`${
                            cartClicked && gridSmall
                                ? "flex justify-between"
                                : `${gridSmall ? "flex justify-between" : "flex justify-center  mx-4"}`
                        } gap-2 w-full`}
                    >
                        <Tooltip
                            placement="bottom"
                            title={"Add to Wishlist"}
                            color="#fff"
                            overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                        >
                            <button
                                type="button"
                                className={
                                    " group bg-app-black-button flex justify-center rounded text-gray-400 text-sm font-medium p-[15px] cursor-pointer gap-1 items-center  hover:bg-app-blue"
                                }
                                onClick={() => setWishList(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    className="stroke-white group-hover:stroke-app-primary"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1024_22578)">
                                        <path
                                            d="M3.9375 23.0583V2.81359C3.93749 2.21634 4.17406 1.6434 4.59537 1.22007C5.01669 0.796751 5.58844 0.557518 6.18569 0.554688H24.1608"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.9609 6.1875H19.5815"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.9609 8.4375H17.3333"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.9609 11.8203H19.5815"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.9609 14.0703H17.3333"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.9609 17.4375H19.5815"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.9609 19.6875H17.3333"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M19.686 26.4442H2.81375C2.51671 26.4456 2.22227 26.3882 1.94756 26.2752C1.67286 26.1622 1.42328 25.9958 1.21324 25.7858C1.0032 25.5757 0.83684 25.3261 0.723821 25.0514C0.610801 24.7767 0.553295 24.4824 0.554713 24.1853V23.0612H17.4378V24.1853C17.4378 24.7816 17.6747 25.3534 18.0963 25.775C18.5179 26.1967 19.0897 26.4335 19.686 26.4335C20.2822 26.4335 20.8541 26.1967 21.2757 25.775C21.6974 25.3534 21.9343 24.7816 21.9343 24.1853V2.77373C21.913 2.46473 21.9553 2.15462 22.0589 1.86272C22.1626 1.57082 22.3251 1.30333 22.5365 1.07691C22.7478 0.850478 23.0034 0.669957 23.2875 0.546517C23.5716 0.423077 23.8781 0.359375 24.1878 0.359375C24.4976 0.359375 24.8039 0.423077 25.088 0.546517C25.3721 0.669957 25.6278 0.850478 25.8392 1.07691C26.0505 1.30333 26.213 1.57082 26.3166 1.86272C26.4202 2.15462 26.4627 2.46473 26.4414 2.77373V3.84431H21.9343"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M11.2551 12.3203L9.00692 14.5685L7.88281 13.4444"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M11.2551 17.5078L9.00692 19.7667L7.88281 18.6319"
                                            stroke="white"
                                            stroke-width="1.05"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M10.7696 5.89155C10.4691 5.88763 10.1734 5.96651 9.91466 6.11946C9.65597 6.27241 9.44432 6.49353 9.30292 6.75871C9.15975 6.49268 8.94624 6.27115 8.68569 6.11822C8.42515 5.96529 8.12759 5.88686 7.82552 5.89155C7.61654 5.88441 7.40826 5.91875 7.2126 5.9925C7.01694 6.06626 6.83781 6.178 6.68554 6.32131C6.53328 6.46462 6.41084 6.63662 6.32537 6.82745C6.23991 7.01829 6.19303 7.22416 6.1875 7.43318C6.1875 9.47799 9.30292 10.5593 9.30292 10.5593C9.30292 10.5593 12.4076 9.4887 12.4076 7.43318C12.4021 7.22416 12.3552 7.01829 12.2698 6.82745C12.1843 6.63662 12.0618 6.46462 11.9096 6.32131C11.7573 6.178 11.5782 6.06626 11.3825 5.9925C11.1869 5.91875 10.9786 5.88441 10.7696 5.89155Z"
                                            stroke="white"
                                            stroke-width="0.73"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1024_22578">
                                            <rect width="27" height="27" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </Tooltip>

                        {!gridSmall && (
                            <>
                                {gameButtons && gameButtons.length > 1 ? (
                                    <>
                                        <div
                                            className={
                                                (cartClicked && gridSmall ? "" : "sm:flex") +
                                                " hidden  justify-center gap-3 w-full items-center"
                                            }
                                        >
                                            {gameButtons.map((item: { id: number; title: string }) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => {
                                                        item.title === "bid"
                                                            ? navigate.push({
                                                                  pathname: "/shopping-cart",
                                                                  query: { show: "Bids" },
                                                              })
                                                            : navigate.push({
                                                                  pathname: "/checkout",
                                                              });
                                                    }}
                                                    className={` ${
                                                        item.title === "bid"
                                                            ? "bg-app-primary hover:bg-app-blue-hover bidButton"
                                                            : "bg-app-green hover:bg-app-green-hover"
                                                    } text-lg font-semibold  w-[94px] h-[46px] rounded-lg uppercase `}
                                                >
                                                    {/* {isBidHovered && item.title === "bid" ? "500 PIXP" : item.title} */}
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            className={
                                                (cartClicked && gridSmall ? "" : "sm:flex") +
                                                " hidden  col-span-2 w-full justify-center items-center"
                                            }
                                        >
                                            {gameButtons &&
                                                gameButtons.map((item: { id: number; title: string }, idx: number) => (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => {
                                                            item.title === "bid"
                                                                ? navigate.push({
                                                                      pathname: "/shopping-cart",
                                                                      query: { show: "Bids" },
                                                                  })
                                                                : navigate.push({
                                                                      pathname: "/checkout",
                                                                  });
                                                        }}
                                                        className={`${gridSmall ? "w-[108px] " : "w-[168px] "} ${
                                                            item.title === "bid"
                                                                ? "bg-app-primary hover:bg-app-blue-hover bidButton"
                                                                : "bg-app-green hover:bg-app-green-hover"
                                                        } text-lg font-semibold   h-[46px] rounded-lg uppercase button-key-${idx} button-id-${
                                                            item.id
                                                        }`}
                                                    >
                                                        {/* {isBidHovered && item.title === "bid" ? "500 PIXP" : item.title} */}
                                                        {item.title}
                                                    </button>
                                                ))}
                                        </div>
                                    </>
                                )}
                            </>
                        )}

                        <Tooltip
                            placement="bottom"
                            title={"Add to Cart"}
                            color="#fff"
                            overlayClassName=" [&>.ant-tooltip-content>.ant-tooltip-inner]:text-zinc-800 [&>.ant-tooltip-content>.ant-tooltip-inner]:text-sm [&>.ant-tooltip-content>.ant-tooltip-inner]:font-medium [&>.ant-tooltip-content>.ant-tooltip-inner]:py-[1px] [&>.ant-tooltip-content>.ant-tooltip-inner]:min-h-[18px]"
                        >
                            <button
                                className={
                                    " group bg-app-black-button flex justify-center rounded text-gray-400 text-sm font-medium p-[15px] cursor-pointer gap-1 items-center hover:bg-app-blue"
                                }
                                onClick={() => dispatch({ type: ADD_CART, payload: data })}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="27"
                                    viewBox="0 0 29 27"
                                    fill="none"
                                >
                                    <path
                                        d="M11.3828 24.7418C11.9567 24.7418 12.4219 24.2784 12.4219 23.7068C12.4219 23.1352 11.9567 22.6719 11.3828 22.6719C10.809 22.6719 10.3438 23.1352 10.3438 23.7068C10.3438 24.2784 10.809 24.7418 11.3828 24.7418Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M22.8125 24.7418C23.3864 24.7418 23.8516 24.2784 23.8516 23.7068C23.8516 23.1352 23.3864 22.6719 22.8125 22.6719C22.2386 22.6719 21.7734 23.1352 21.7734 23.7068C21.7734 24.2784 22.2386 24.7418 22.8125 24.7418Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M3.07031 3H7.22656L10.0112 16.8579C10.1063 17.3344 10.3665 17.7624 10.7464 18.0671C11.1264 18.3717 11.6017 18.5335 12.0894 18.5242H22.1891C22.6767 18.5335 23.1521 18.3717 23.532 18.0671C23.9119 17.7624 24.1722 17.3344 24.2672 16.8579L25.9297 8.17473H8.26562"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div
                    className={`${
                        cartClicked && gridSmall
                            ? "flex justify-between"
                            : `${gridSmall ? "flex justify-between" : "flex sm:hidden"}`
                    } ${gameButtons && gameButtons.length < 2 ? "mx-auto" : ""}`}
                >
                    {gameButtons && gameButtons.length > 1 ? (
                        <>
                            {gameButtons.map((item: { id: number; title: string }) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        item.title === "bid"
                                            ? navigate.push({
                                                  pathname: "/shopping-cart",
                                                  query: { show: "Bids" },
                                              })
                                            : navigate.push({
                                                  pathname: "/checkout",
                                              });
                                    }}
                                    className={` ${
                                        item.title === "bid"
                                            ? "bg-app-primary hover:bg-app-blue-hover bidButton"
                                            : "bg-app-green hover:bg-app-green-hover"
                                    } text-lg font-semibold  w-[94px] h-[46px] rounded-lg uppercase `}
                                >
                                    {/* {isBidHovered && item.title === "bid" ? "500 PIXP" : item.title} */}
                                    {item.title}
                                </button>
                            ))}
                        </>
                    ) : (
                        <>
                            {gameButtons &&
                                gameButtons.map((item: { id: number; title: string }, idx: number) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            item.title === "bid"
                                                ? navigate.push({
                                                      pathname: "/shopping-cart",
                                                      query: { show: "Bids" },
                                                  })
                                                : navigate.push({
                                                      pathname: "/checkout",
                                                  });
                                        }}
                                        className={`${gridSmall ? "w-[108px] " : "w-[168px] "} ${
                                            item.title === "bid"
                                                ? "bg-app-primary hover:bg-app-blue-hover bidButton"
                                                : "bg-app-green hover:bg-app-green-hover"
                                        } text-lg font-semibold   py-3 rounded-lg uppercase button-key-${idx} button-id-${
                                            item.id
                                        }`}
                                    >
                                        {/* {isBidHovered && item.title === "bid" ? "500 PIXP" : item.title} */}
                                        {item.title}
                                    </button>
                                ))}
                        </>
                    )}
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
export default SingleCollectionCard;
