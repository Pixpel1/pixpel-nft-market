import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal } from "antd";
import Cart from "../../components/Cart/Cart";
import HeaderWithPills from "../../components/Market/HeaderWithPills";
import { StickyCart } from "../../components/Market/StickyCart/StickyCart";

import Wishlist from "./inner-sections/Wishlist/Wishlist";
import CartItems from "./inner-sections/CartItems";
import Orders from "./inner-sections/Orders/Orders";
import Bids from "./inner-sections/Bids/Bids";
import { useAppContext } from "@nft/contexts/AppContext";

const Shopping = () => {
    const router = useRouter();
    const { show } = router.query;
    const slugParams = router.pathname;
    const { cartMenuClicked, setCartMenuClicked, toggleCartClick, addToCart, handleCloseAddToCart } = useAppContext();
    const [cartClicked, setCartClicked] = useState<boolean>(false);
    // const [tabClicked, setTabClicked] = useState<boolean>(false);
    const handleCartClick = () => {
        setCartClicked(!cartClicked);
    };
    const [tabActiveIndex, setTabsActiveIndex] = useState<number>(2);
    const tabsData = [
        {
            id: 1,
            title: "Wish",
            component: <Wishlist />,
            active: show === "Wish" ? true : false,
        },
        {
            id: 2,
            title: "Cart",
            component: <CartItems />,
            active: show === "Cart" ? true : false,
        },
        {
            id: 3,
            title: "Orders",
            component: <Orders />,
            active: show === "Orders" ? true : false,
        },
        {
            id: 4,
            title: "Bids",
            component: <Bids />,
            active: show === "Bids" ? true : false,
        },
    ];

    return (
        <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5 relative">
            <HeaderWithPills
                tabs={true}
                tabsData={tabsData}
                setTabsActiveIndex={setTabsActiveIndex}
                slug={""}
                title={"Shopping Cart"}
            />
            <div className={cartMenuClicked ? "2xl:pr-8 xl:pr-28 lg:pr-16 md:pr-12 sm:pr-8 pr-4 relative" : "relative"}>
                <div className="flex">
                    <div
                        className={
                            (cartMenuClicked ? "w-4/5 ease-out duration-[0.5s]" : "w-full ease-out duration-[0.5s]") +
                            " mb-7"
                        }
                    >
                        <div className={"flex flex-col"}>
                            <div className="flex gap-3 2xl1:flex-row flex-col w-full flex-wrap">
                                <div className="flex w-ful fixed right-4 z-50">
                                    {!cartMenuClicked && toggleCartClick && (
                                        <StickyCart
                                            cartClicked={cartMenuClicked as boolean}
                                            handleCartClick={toggleCartClick}
                                        />
                                    )}
                                </div>
                            </div>
                            {tabsData && tabsData.map((tabItem, key) => (tabItem.active ? tabItem.component : ""))}
                        </div>
                    </div>
                    <div
                        className={
                            cartMenuClicked
                                ? "w-4/5 sm:w-3/5 md:w-2/5 xl1:w-1/4 absolute right-0 top-0 2xl:-mx-28 xl:-mx-24 lg:-mx-20 md:-mx-16 sm:-mx-12 -mx-8 h-full  ease-in duration-[0.2s] translate-x-0"
                                : "absolute right-0 top-0 ease-out duration-[0.5s] translate-x-[200%]"
                        }
                    >
                        <Cart
                            shoppingCart={true}
                            showCart={cartMenuClicked as boolean}
                            setShowCart={setCartMenuClicked as Dispatch<SetStateAction<boolean>>}
                        />
                    </div>
                </div>
            </div>
            <Modal open={addToCart} className="[&>.ant-modal-content]:bg-main max-w-xs" closeIcon={false} footer={null}>
                <div className="flex flex-col items-center space-y-6 pb-5 px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                        <circle cx="65" cy="65" r="64.5" stroke="#2EBD85" stroke-dasharray="2 2" />
                        <circle cx="65" cy="65" r="50" fill="#2EBD85" />
                        <path
                            d="M84.186 48.0339L70.0869 62.0222L58.5303 73.5829L46.9737 62.0222C46.3147 61.3669 45.4225 61.0003 44.4933 61.003C43.5641 61.0057 42.6741 61.3775 42.0189 62.0367C41.3638 62.6959 40.9973 63.5886 41 64.5182C41.0027 65.4477 41.3744 66.3381 42.0334 66.9934L56.0168 80.9818C56.3406 81.3123 56.7271 81.5747 57.1538 81.7534C57.5805 81.9321 58.0388 82.0235 58.5014 82.0224C58.9553 82.0224 59.4043 81.9301 59.8215 81.7512C60.2386 81.5724 60.6152 81.3106 60.9282 80.9818L88.9532 52.976C89.6083 52.3168 89.9748 51.4243 89.972 50.4947C89.9693 49.5652 89.5977 48.6748 88.9387 48.0194C88.2797 47.3641 87.3875 46.9973 86.4583 47C85.5291 47.0027 84.639 47.3747 83.9839 48.0339"
                            fill="white"
                        />
                    </svg>
                    <h4 className="text-2xl font-semibold text-white">Added to Cart</h4>
                    <button
                        className="text-lg font-medium py-5 bg-app-green hover:bg-app-green-hover w-full rounded-md"
                        onClick={handleCloseAddToCart}
                    >
                        ok
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Shopping;
