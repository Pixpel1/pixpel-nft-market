import React from "react";
import cart from "@public/assets/images/cart.svg";
import Image from "next/image";

interface StickyCartType {
    cartClicked: boolean;
    handleCartClick: () => void;
    classNames: string;
}

export const StickyCart = ({ cartClicked, handleCartClick, classNames }: StickyCartType) => {
    return (
        <div className={cartClicked ? "hidden" : "flex absolute z-30 right-0 " + classNames}>
            <div
                className="group bg-app-black ease-in-out duration-[0.5s] hover:ease-in-out hover:duration-[0.5s] hover:w-[180px] hover:border-white hover:bg-app-primary rounded-md gap-2 w-16 h-14 [&>svg]:w-6 border-app-blue border-2 flex justify-center items-center cursor-pointer shrink-0 relative"
                onClick={handleCartClick}
            >
                <div className="ease-in-out duration-[0.9s] translate-x-0 group-hover:-translate-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="stroke-app-primary group-hover:stroke-[#fff] ease-in-out duration-[0.5s]"
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
                    </svg>
                    <p className="text-app-black">Open Cart</p>
                </span>
            </div>
        </div>
    );
};

StickyCart.defaultProps = {
    classNames: "",
};
