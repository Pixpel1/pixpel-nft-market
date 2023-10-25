import React, { useState } from "react";
import { removeCart } from "@nft/actions/cart";
import cart from "@public/assets/images/cart.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@nft/hooks";
import { useRouter } from "next/router";
import NFTCrypto from "@public/assets/images/NFT/nft-1.png";

interface Cart {
    showCart: boolean;
    setShowCart: (val: boolean) => void;
    shoppingCart?: boolean;
}
interface cartData {
    img: string;
    id: string;
}

const Cart = ({ showCart, setShowCart, shoppingCart }: Cart) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigate = useRouter();
    const cardsInCart: cartData[] = useAppSelector((state) => state.cart);
    const [classState, setClassState] = useState<string>("");

    const dispatch = useAppDispatch();
    const handleCartClick = () => {
        setShowCart(!showCart);
    };
    const handleClassAnimate = () => {
        setClassState("hoverClass");
    };
    const handleClassAnimateLeave = () => {
        setClassState("");
    };

    return (
        <div className=" bg-app-black-button cart !z-20  ease-in-out duration-[0.5s] ">
            <div
                className={`${
                    showCart
                        ? `group bg-app-black custom-cart-animation ${classState} hover:bg-app-primary rounded-md gap-2 ease-in-out duration-[0.6s] hover:border-white  h-14  border-app-blue border-2 flex justify-center items-center cursor-pointer  shrink-0 grow-0 relative`
                        : `hidden`
                }`}
                onClick={handleCartClick}
                onMouseOver={handleClassAnimate}
                onMouseLeave={handleClassAnimateLeave}
            >
                <div className="ease-in-out duration-[0.3s] translate-x-0 pr-0 group-hover:pr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="ease-in-out duration-[0.5s] stroke-app-primary  group-hover:stroke-[#fff]"
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
                <span className="text-[0px] opacity-0 group-hover:opacity-100 -ml-[10px]  relative py-[3px] px-[5px] bg-white rounded-md ease-in-out duration-[0.5s] group-hover:ease-in-out group-hover:duration-[0.5s] group-hover:text-base">
                    <svg
                        className="absolute -left-[5px] top-0 bottom-0 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                    >
                        <path
                            d="M2.91544 5.27471C1.41768 4.49646 0.668803 4.10733 0.668803 3.5C0.668803 2.89267 1.41768 2.50354 2.91544 1.72529L4.07783 1.12129C5.38474 0.442202 6.03819 0.102659 6.51909 0.394727C7 0.686794 7 1.4232 7 2.896L7 4.104C7 5.5768 7 6.31321 6.51909 6.60527C6.03819 6.89734 5.38474 6.5578 4.07783 5.87871L2.91544 5.27471Z"
                            fill="white"
                        />
                    </svg>{" "}
                    <p className="text-app-black">Close Cart</p>
                </span>
            </div>
            <div className="cart__body">
                <div className="cart__inner">
                    {shoppingCart ? (
                        <>
                            <div className="cart__title text-2xl font-semibold mb-[17px]">NFT</div>
                            <div className={`cart__list`}>
                                {new Array(3).fill(null).map((card, index) => {
                                    return (
                                        <div className="cart__item" key={index}>
                                            <div className="cart__img-wrap">
                                                <Image src={NFTCrypto} alt="" className="cart__img" />
                                            </div>
                                            <div className="cart__content flex justify-between ml-[15px] mr-[70px]">
                                                <div className="cart__content-title text-base font-medium">Archer</div>
                                                <div className="cart__content-price text-sky-600 text-base font-semibold">
                                                    2 PIXP
                                                </div>
                                            </div>
                                            <div className="cart__delete cursor-pointer">
                                                <svg
                                                    width="13"
                                                    height="13"
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 1L6.5 6.5M12 12L6.5 6.5M6.5 6.5L1 12L12 1"
                                                        stroke="#717A8B"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex mt-5 justify-between items-center border-b border-gray-600 pb-3.5">
                                <div className="text-white text-2xl font-medium">Sub Total</div>
                                <div className="cart__content-price text-sky-600 text-base font-semibold mr-[82px]">
                                    2361 PIXP
                                </div>
                            </div>
                            <div className="cart__title text-2xl font-semibold mb-[17px] mt-3.5">Mystery Box</div>
                            <div className={`cart__list`}>
                                {new Array(2).fill(null).map((card, index) => {
                                    return (
                                        <div className="cart__item" key={index}>
                                            <div className="cart__img-wrap">
                                                <Image src={NFTCrypto} alt="" className="cart__img" />
                                            </div>
                                            <div className="cart__content flex justify-between ml-[15px] mr-[70px]">
                                                <div className="cart__content-title text-base font-medium">Archer</div>
                                                <div className="cart__content-price text-sky-600 text-base font-semibold">
                                                    2 PIXP
                                                </div>
                                            </div>
                                            <div className="cart__delete cursor-pointer">
                                                <svg
                                                    width="13"
                                                    height="13"
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 1L6.5 6.5M12 12L6.5 6.5M6.5 6.5L1 12L12 1"
                                                        stroke="#717A8B"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex mt-5  justify-between items-center border-b border-gray-600 pb-3.5">
                                <div className="text-white text-2xl font-medium">Sub Total</div>
                                <div className="cart__content-price text-sky-600 text-base font-semibold mr-[82px]">
                                    2000 PIXP
                                </div>
                            </div>
                            <div className="flex flex-col border-b space-y-3 border-gray-600 py-3.5">
                                <div className="flex justify-between items-center">
                                    <div className="text-white text-2xl font-medium">Total</div>
                                    <div className="cart__content-price text-sky-600 text-base font-semibold mr-[82px]">
                                        4361 PIXP
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-white text-xl font-medium">Fee NFT 0,5%</div>
                                    <div className="cart__content-price text-sky-600 text-base font-semibold mr-[82px]">
                                        21 PIXP
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-white text-xl font-medium">Fee Mystery 0,3%</div>
                                    <div className="cart__content-price text-sky-600 text-base font-semibold mr-[82px]">
                                        13 PIXP
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-5 justify-between border-b border-gray-600 pb-3.5">
                                <div className="text-white text-2xl font-medium">Grand Total</div>
                                <div className="cart__content-price text-sky-600 text-base font-semibold mr-[82px]">
                                    4395 PIXP
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="cart__title">Cart</div>
                            <div className={`cart__list}`}>
                                {cardsInCart.map((card) => {
                                    return (
                                        <div className="cart__item" key={card.id}>
                                            <div className="cart__img-wrap">
                                                <Image src={card.img} alt="" className="cart__img" />
                                            </div>
                                            <div className="cart__content">
                                                <div className="cart__content-title">H1 hero text for you</div>
                                                <div className="cart__content-price">2 PIXP</div>
                                            </div>
                                            <div
                                                className="cart__delete cursor-pointer"
                                                onClick={() => dispatch(removeCart(card.id))}
                                            >
                                                <svg
                                                    width="13"
                                                    height="13"
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 1L6.5 6.5M12 12L6.5 6.5M6.5 6.5L1 12L12 1"
                                                        stroke="#717A8B"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
                <div className="cart__footer">
                    {shoppingCart ? (
                        <>
                            <button className="cart__btn hover:bg-app-green-hover">Buy</button>
                        </>
                    ) : (
                        <>
                            <div className="cart__footer-top">
                                <div className="cart__footer-top-name">Total price</div>
                                <div className="cart__footer-top-price">214 421.21 PIXP</div>
                            </div>
                            <button
                                className="cart__btn !bg-app-blue hover:!bg-app-blue-hover"
                                onClick={() =>
                                    navigate.push({
                                        pathname: "/shopping-cart",
                                        query: { show: "Cart" }, // Custom state parameter
                                    })
                                }
                            >
                                Go to cart
                            </button>
                            <button className="cart__btn hover:bg-app-green-hover">Buy it now</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Cart;
