import { Select } from "antd";
import Image from "next/image";
import React from "react";
import search from "@public/assets/images/search.svg";
// import ShoppingCartIcon from "@public/assets/images/icons/shopping-cart.png";
// import NFTArcher from "@public/assets/images/NFT/nft_archer.png";
import NFT_3 from "@public/assets/images/NFT/nft-3.png";
import FilterDropDown from "@launchpad/components/DropDown/FilterDropDown";
// import deleteNFT from "@public/assets/images/icons/delete_nft.png";

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const filterOptions = [
    {
        id: 1,
        title: "Purchased",
        value: "purchased",
    },
    {
        id: 2,
        title: "Not Purchased",
        value: "not_purchased",
    },
    {
        id: 3,
        title: "All",
        value: "all",
    },
];
const filterSortOptions = [
    {
        id: 1,
        title: "Highest Price",
        value: "highest_price",
    },
    {
        id: 2,
        title: "Lowest Price",
        value: "lowest_price",
    },
];
const OrdersView = () => {
    return (
        <div className="flex flex-col bg-app-black p-5 ">
            <div className="flex gap-x-4 flex-wrap">
                <div className="flex justify-center items-center order_details rounded relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-app-primary fill-app-primary group-hover:stroke-[#fff] group-hover:fill-[#fff] calenderIcon"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_1_22293)">
                            <path
                                d="M25.6602 2.33765H20.9935V1.75592C20.9558 1.31734 20.755 0.908864 20.4306 0.611228C20.1063 0.313593 19.6821 0.148438 19.2419 0.148438C18.8017 0.148438 18.3775 0.313593 18.0532 0.611228C17.7289 0.908864 17.5279 1.31734 17.4902 1.75592V2.35055H10.4968V1.75592C10.4591 1.31734 10.2582 0.908864 9.93389 0.611228C9.60956 0.313593 9.18537 0.148438 8.74517 0.148438C8.30497 0.148438 7.88078 0.313593 7.55646 0.611228C7.23213 0.908864 7.03114 1.31734 6.99342 1.75592V2.35055H2.32678C1.7107 2.35394 1.12081 2.6002 0.685172 3.03584C0.249533 3.47148 0.00339444 4.06137 2.73058e-10 4.67744V25.671C-9.43662e-06 26.2893 0.244748 26.8825 0.680753 27.3209C1.11676 27.7593 1.70847 28.0073 2.32678 28.0108H25.5955C26.216 28.0108 26.8112 27.7643 27.25 27.3255C27.6888 26.8867 27.9353 26.2915 27.9353 25.671V4.6645C27.9319 4.04619 27.6839 3.45437 27.2454 3.01836C26.807 2.58236 26.2138 2.33764 25.5955 2.33765M18.6021 1.74298C18.6021 1.5887 18.6632 1.44076 18.7723 1.33167C18.8814 1.22258 19.0294 1.16128 19.1837 1.16128C19.338 1.16128 19.486 1.22258 19.5951 1.33167C19.7042 1.44076 19.7654 1.5887 19.7654 1.74298V4.08277C19.7654 4.23705 19.7042 4.38503 19.5951 4.49412C19.486 4.60321 19.338 4.6645 19.1837 4.6645C19.0294 4.6645 18.8814 4.60321 18.7723 4.49412C18.6632 4.38503 18.6021 4.23705 18.6021 4.08277V1.74298ZM8.09235 1.74298C8.09573 1.58752 8.15983 1.43958 8.27098 1.33084C8.38213 1.2221 8.53145 1.16125 8.68694 1.16128C8.84122 1.16128 8.98924 1.22258 9.09833 1.33167C9.20742 1.44076 9.2686 1.5887 9.2686 1.74298V4.08277C9.2686 4.23705 9.20742 4.38503 9.09833 4.49412C8.98924 4.60321 8.84122 4.6645 8.68694 4.6645C8.53145 4.66454 8.38213 4.60368 8.27098 4.49495C8.15983 4.38621 8.09573 4.23823 8.09235 4.08277V1.74298ZM26.7589 25.658C26.7607 25.8119 26.7319 25.9646 26.6742 26.1072C26.6165 26.2499 26.531 26.3797 26.4228 26.4891C26.3146 26.5985 26.1858 26.6853 26.0438 26.7446C25.9018 26.8039 25.7494 26.8344 25.5955 26.8344H2.32678C2.01703 26.831 1.72119 26.7055 1.50337 26.4853C1.28555 26.2651 1.16345 25.9678 1.16347 25.658V8.21944H26.8236L26.7589 25.658ZM26.7589 7.0043H1.09877V4.6645C1.09877 4.35594 1.22127 4.06003 1.43946 3.84185C1.65765 3.62366 1.95367 3.50108 2.26223 3.50108H6.92888V4.08277C6.96659 4.52135 7.16743 4.92982 7.49176 5.22746C7.81609 5.52509 8.24028 5.69025 8.68047 5.69025C9.12067 5.69025 9.54486 5.52509 9.86919 5.22746C10.1935 4.92982 10.3944 4.52135 10.4321 4.08277V3.50108H17.4256V4.08277C17.4634 4.52135 17.6642 4.92982 17.9885 5.22746C18.3128 5.52509 18.737 5.69025 19.1772 5.69025C19.6174 5.69025 20.0416 5.52509 20.366 5.22746C20.6903 4.92982 20.8911 4.52135 20.9288 4.08277V3.50108H25.5955C25.904 3.50108 26.2001 3.62366 26.4182 3.84185C26.6364 4.06003 26.7589 4.35594 26.7589 4.6645V7.0043ZM5.18376 16.3247H8.68694C8.84122 16.3247 8.98924 16.2634 9.09833 16.1543C9.20742 16.0452 9.2686 15.8973 9.2686 15.743V12.2527C9.26863 12.0972 9.20786 11.9479 9.09912 11.8367C8.99038 11.7256 8.8424 11.6614 8.68694 11.658H5.18376C5.0283 11.6614 4.88032 11.7256 4.77159 11.8367C4.66285 11.9479 4.60191 12.0972 4.60195 12.2527V15.743C4.60195 15.8973 4.66328 16.0452 4.77237 16.1543C4.88147 16.2634 5.02948 16.3247 5.18376 16.3247ZM5.76542 12.8344H8.19571V15.1613H5.85584L5.76542 12.8344ZM12.2289 16.3247H15.7321C15.8085 16.3247 15.8842 16.3097 15.9548 16.2804C16.0254 16.2512 16.0895 16.2083 16.1435 16.1543C16.1975 16.1003 16.2404 16.0362 16.2696 15.9656C16.2988 15.895 16.3139 15.8194 16.3139 15.743V12.2527C16.314 12.0972 16.253 11.9479 16.1443 11.8367C16.0356 11.7256 15.8876 11.6614 15.7321 11.658H12.2289C12.0735 11.6614 11.9255 11.7256 11.8168 11.8367C11.708 11.9479 11.6473 12.0972 11.6473 12.2527V15.743C11.6473 15.8194 11.6622 15.895 11.6915 15.9656C11.7207 16.0362 11.7635 16.1003 11.8176 16.1543C11.8716 16.2083 11.9357 16.2512 12.0063 16.2804C12.0769 16.3097 12.1526 16.3247 12.2289 16.3247ZM12.8106 12.8344H15.1505V15.1613H12.8106V12.8344ZM19.2741 16.3247H22.7775C22.9317 16.3247 23.0796 16.2634 23.1887 16.1543C23.2978 16.0452 23.3591 15.8973 23.3591 15.743V12.2527C23.3592 12.0972 23.2984 11.9479 23.1896 11.8367C23.0809 11.7256 22.9329 11.6614 22.7775 11.658H19.2741C19.1187 11.6614 18.9708 11.7256 18.8621 11.8367C18.7534 11.9479 18.6924 12.0972 18.6925 12.2527V15.743C18.6925 15.8973 18.7538 16.0452 18.8629 16.1543C18.972 16.2634 19.1198 16.3247 19.2741 16.3247ZM19.8559 12.8344H22.1827V15.1613H19.8301L19.8559 12.8344ZM5.27418 23.3312H8.77736C8.85376 23.3312 8.92944 23.3161 9.00002 23.2869C9.0706 23.2576 9.13473 23.2148 9.18875 23.1608C9.24277 23.1068 9.2856 23.0426 9.31483 22.9721C9.34407 22.9015 9.35918 22.8258 9.35918 22.7494V19.2462C9.35918 19.1698 9.34407 19.0942 9.31483 19.0236C9.2856 18.953 9.24277 18.8889 9.18875 18.8349C9.13473 18.7809 9.0706 18.738 9.00002 18.7088C8.92944 18.6796 8.85376 18.6645 8.77736 18.6645H5.27418C5.19779 18.6645 5.1221 18.6796 5.05152 18.7088C4.98095 18.738 4.91681 18.7809 4.86279 18.8349C4.80878 18.8889 4.76595 18.953 4.73671 19.0236C4.70748 19.0942 4.69253 19.1698 4.69253 19.2462V22.7494C4.69253 22.8258 4.70748 22.9015 4.73671 22.9721C4.76595 23.0426 4.80878 23.1068 4.86279 23.1608C4.91681 23.2148 4.98095 23.2576 5.05152 23.2869C5.1221 23.3161 5.19779 23.3312 5.27418 23.3312ZM5.85584 19.828H8.19571V22.1677H5.85584V19.828ZM12.3194 23.3312H15.8227C15.977 23.3312 16.1248 23.2699 16.2339 23.1608C16.343 23.0517 16.4044 22.9037 16.4044 22.7494V19.2462C16.4044 19.0919 16.343 18.944 16.2339 18.8349C16.1248 18.7258 15.977 18.6645 15.8227 18.6645H12.3194C12.1651 18.6645 12.0172 18.7258 11.9081 18.8349C11.799 18.944 11.7377 19.0919 11.7377 19.2462V22.7494C11.7377 22.9037 11.799 23.0517 11.9081 23.1608C12.0172 23.2699 12.1651 23.3312 12.3194 23.3312ZM12.9012 19.828H15.2409V22.1677H12.9012V19.828ZM19.3647 23.3312H22.8679C23.0222 23.3312 23.1702 23.2699 23.2793 23.1608C23.3884 23.0517 23.4497 22.9037 23.4497 22.7494V19.2462C23.4497 19.0919 23.3884 18.944 23.2793 18.8349C23.1702 18.7258 23.0222 18.6645 22.8679 18.6645H19.3647C19.2104 18.6645 19.0624 18.7258 18.9533 18.8349C18.8442 18.944 18.7829 19.0919 18.7829 19.2462V22.7494C18.7829 22.9037 18.8442 23.0517 18.9533 23.1608C19.0624 23.2699 19.2104 23.3312 19.3647 23.3312ZM19.8301 19.8538H22.157V22.1936H19.8301V19.8538Z"
                                fill="#0196C9"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_22293">
                                <rect width="28" height="28" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Select
                        defaultValue="Last 60 days"
                        onChange={handleChange}
                        className="global_select inline_orderdate"
                        popupClassName="global_select_popup inline_orderdate_popup"
                        options={[
                            { value: "last7days", label: "Last 7 days" },
                            { value: "last30days", label: "Last 30 days" },
                            { value: "last60days", label: "Last 60 days" },
                            { value: "all", label: "All" },
                        ]}
                    />
                </div>
                <FilterDropDown
                    contentList={filterSortOptions}
                    filterIconSvg={true}
                    filterSort={true}
                    initialContent={""}
                    fontSize={""}
                    textColor={""}
                    backgroundColor={"bg-app-black-button"}
                />
                <FilterDropDown
                    contentList={filterOptions}
                    filterIconSvg={true}
                    filterSort={false}
                    initialContent={""}
                    fontSize={""}
                    textColor={""}
                    backgroundColor={"bg-app-black-button"}
                />
                <div className="flex items-center gap-3 px-7 py-4 ml-auto bg-app-black-button rounded-md">
                    <Image src={search} alt="search" />
                    <input className="bg-app-black-button font-medium 2xl1:w-44" placeholder="Search..." />
                </div>
            </div>
            <div className="flex gap-x-7 py-6 flex-col lg:flex-row shrink-0  ">
                <div className="bg-app-gray w-72 px-4 py-5 rounded">
                    <Image src={NFT_3} alt="NFT_Archer" className="rounded" />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col pb-7 ">
                        <div className="flex justify-between border-b border-app-gray pb-2">
                            <p className="font-bold text-2xl">ARCHER</p>
                            <p className="text-base font-medium text-app-primary">Item ID#123456</p>
                        </div>

                        <div className="flex justify-between">
                            <div className="w-[75%]">
                                <p className="font-medium text-lg border-b py-4 border-app-gray ">Paid: 200 PIXP</p>
                                <p className="font-medium text-lg border-b py-4 border-app-gray">Delivered: 27/03/23</p>
                                <p className="font-medium text-lg border-b py-4 border-app-gray">
                                    Paid with: Wallet #1
                                </p>
                            </div>

                            <div className="flex flex-col items-end pt-10  space-y-11">
                                <p className="text-lg font-medium text-app-primary">Order ID#123456</p>

                                <button className=" px-12 bg-app-blue-details rounded hover:bg-app-blue-hover py-3 font-medium text-lg">
                                    Buy Again
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-x-3 flex justify-center">
                <button className="p-3 bg-app-black-button text-base font-medium rounded-md hover:bg-app-black-duration hover:text-white text-app-black-duration">
                    RECEIPT
                </button>
                <button className="p-3 bg-app-black-button text-base font-medium rounded-md hover:bg-app-black-duration hover:text-white text-app-black-duration">
                    GIVE REPUTATION
                </button>
                <button className="p-3 bg-app-black-button text-base font-medium rounded-md hover:bg-app-black-duration hover:text-white text-app-black-duration">
                    ORDER DETAILS
                </button>
            </div>
        </div>
    );
};

export default OrdersView;
