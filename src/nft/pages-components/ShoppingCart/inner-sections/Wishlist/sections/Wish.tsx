import React, { useState } from "react";
import Image from "next/image";
import { Select } from "antd";
import Modal from "@nft/components/Modal/Modal";
import search from "@public/assets/images/search.svg";
import ShoppingCartIcon from "@public/assets/images/icons/shopping-cart.png";
import NFTArcher from "@public/assets/images/NFT/nft_archer.png";
import NFT_3 from "@public/assets/images/NFT/nft-3.png";
import deleteNFT from "@public/assets/images/icons/delete_nft.png";
import { useAppContext } from "@nft/contexts/AppContext";
import FilterDropDown from "@launchpad/components/DropDown/FilterDropDown";
import FilterIcon from "@public/icons/filter_icon.png";
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
const Wish = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const [gridView, setGridView] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [inviteModal, setInviteModal] = useState<boolean>(false);
    const { cartMenuClicked, handleAddToCart } = useAppContext();
    const handleGridView = () => {
        setGridView(true);
    };
    const handleInlineView = () => {
        setGridView(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleIviteOpen = () => {
        setInviteModal(true);
    };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCloseInvite = () => {
        setInviteModal(false);
    };

    return (
        <div className="bg-app-black p-6">
            <div className="flex flex-col space-y-5">
                <div className="flex flex-wrap gap-3 ">
                    <button
                        className={` bg-app-black-button px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer text-lg capitalize`}
                    >
                        Wish
                    </button>
                    <button
                        className={` bg-app-black-button px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer text-lg capitalize`}
                    >
                        Private
                    </button>
                    <button
                        className={` bg-app-black-button px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer text-lg capitalize`}
                    >
                        Share
                    </button>
                    <button
                        className={` bg-app-black-button px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer text-lg capitalize`}
                        onClick={handleIviteOpen}
                    >
                        Invite
                    </button>
                    <div className="flex items-center gap-3 px-7 py-4 bg-app-black-button rounded-md">
                        <Image src={search} alt="search" />
                        <input className="bg-app-black-button font-medium 2xl1:w-44" placeholder="Search..." />
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
                    <button
                        title="small_view"
                        type="submit"
                        className={`group border-2 border-solid ${
                            gridView ? "border-app-primary" : "border-app-black-button"
                        } hover:border-app-primary  grid_small bg-app-black-button p-3 rounded-md`}
                        onClick={handleGridView}
                    >
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            className={`${gridView ? "fill-app-primary" : "group-hover:fill-app-primary"}`}
                            fill="#48515F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="8" height="8" rx="1" />
                            <rect y="11" width="8" height="8" rx="1" />
                            <rect y="22" width="8" height="8" rx="1" />
                            <rect x="11" width="8" height="8" rx="1" />
                            <rect x="11" y="11" width="8" height="8" rx="1" />
                            <rect x="11" y="22" width="8" height="8" rx="1" />
                            <rect x="22" width="8" height="8" rx="1" />
                            <rect x="22" y="11" width="8" height="8" rx="1" />
                            <rect x="22" y="22" width="8" height="8" rx="1" />
                        </svg>
                    </button>
                    <button
                        className={`group border-2 border-solid ${
                            !gridView ? "border-app-primary" : "border-app-black-button"
                        } hover:border-app-primary  grid_small bg-app-black-button p-3 px-2 rounded-md`}
                        onClick={handleInlineView}
                    >
                        <svg
                            className={`${!gridView ? "fill-app-primary" : "group-hover:fill-app-primary"}`}
                            width="40"
                            height="23"
                            viewBox="0 0 40 23"
                            fill="#48515F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="40" height="3" rx="1.5" />
                            <rect y="10" width="40" height="3" rx="1.5" />
                            <rect y="20" width="40" height="3" rx="1.5" />
                        </svg>
                    </button>
                </div>
                {gridView ? (
                    <>
                        <div className="flex flex-wrap">
                            <div
                                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:${
                                    cartMenuClicked ? "grid-cols-4" : "grid-cols-7"
                                } 3xl1:${
                                    cartMenuClicked ? "grid-cols-6" : "grid-cols-9"
                                }  gap-x-8 xl:gap-x-9 xl:gap-y-10 2xl:gap-x-10 gap-y-[52px] 4xl1:grid-cols-11`}
                            >
                                {new Array(18).fill(null).map((v, i) => {
                                    return (
                                        <>
                                            <div
                                                key={i}
                                                className="nft-box flex flex-col bg-gray-700  px-[14px] max-w-xs py-2 space-y-4"
                                            >
                                                <div className="flex justify-between">
                                                    <Select
                                                        defaultValue="Move"
                                                        onChange={handleChange}
                                                        className="global_select text-xs font-medium wish_select  [&>.ant-select-selector]:!h-6"
                                                        popupClassName="global_select_popup wish_select_popup"
                                                        options={[
                                                            { value: "christmas", label: "Christmas" },
                                                            { value: "birthday", label: "Birthday" },
                                                            { value: "baby", label: "Baby" },
                                                        ]}
                                                    />
                                                    <button
                                                        className="w-8 h-6 px-1.5 bg-slate-500 rounded-sm justify-start items-center gap-0.5 inline-flex hover:bg-app-primary"
                                                        onClick={handleAddToCart}
                                                    >
                                                        <Image src={ShoppingCartIcon} alt="shopping-cart" />
                                                    </button>
                                                </div>
                                                <div className="flex justify-center">
                                                    <Image src={NFTArcher} className=" max-w-full px-3.5" alt="nft-1" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-white text-base font-medium">Crypto Archer</p>
                                                    <button
                                                        className="w-7 h-6 bg-slate-500 py-1.5 px-2 inline-flex items-center rounded-sm hover:bg-app-primary"
                                                        onClick={showModal}
                                                    >
                                                        <Image
                                                            src={deleteNFT}
                                                            className="w-3.5 h-4 relative origin-top-left"
                                                            alt="delete-nft"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {new Array(3).fill(null).map((v, i) => {
                            return (
                                <>
                                    <div
                                        key={i}
                                        className={
                                            "flex gap-x-7 py-6 border-b last-of-type:border-0 border-app-black-duration "
                                        }
                                    >
                                        <div className="flex p-4 bg-app-gray w-56 h-56 shrink-0 rounded">
                                            <Image src={NFT_3} alt="NFT_Archer" className="w-52 h-auto rounded" />
                                        </div>
                                        <div className="flex w-full">
                                            <div className="flex flex-col w-full flex-wrap pb-7">
                                                <div className="flex  w-full justify-between border-b pb-2 border-app-gray  ">
                                                    <p className="font-bold text-2xl">ARCHER</p>
                                                    <p className="text-lg font-medium text-app-primary">ID#123456</p>
                                                    <p className="text-lg font-medium text-app-primary">
                                                        Added 30/02/23
                                                    </p>
                                                </div>

                                                <div className="flex justify-between pt-5">
                                                    <div className="flex flex-col flex-2 w-full pr-4">
                                                        <p className="font-medium text-lg border-b pb-4 border-app-gray">
                                                            Price: 2500 PIXP
                                                        </p>
                                                        <p className="font-medium text-lg border-b pb-4 pt-4 border-app-gray">
                                                            Game: CryptoBots
                                                        </p>
                                                        <p className="font-medium text-lg pt-4">Available</p>
                                                    </div>

                                                    <div className="flex flex-col gap-y-10 shrink-0">
                                                        <button
                                                            className="px-20 rounded font-medium text-lg py-5 bg-app-primary hover:bg-app-blue-hover"
                                                            onClick={handleAddToCart}
                                                        >
                                                            Add to Cart
                                                        </button>
                                                        <div className="flex justify-between">
                                                            <Select
                                                                defaultValue="Move to"
                                                                onChange={handleChange}
                                                                className="global_select  inline_wishlist"
                                                                popupClassName="global_select_popup inline_wishlist_popup"
                                                                options={[
                                                                    { value: "wish", label: "Wish" },
                                                                    { value: "christmas", label: "Christmas" },
                                                                    { value: "birthday", label: "Birthday" },
                                                                    { value: "baby", label: "Baby" },
                                                                ]}
                                                            />
                                                            <button className=" px-9 bg-app-gray rounded hover:bg-app-black-duration text-lg font-medium">
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </>
                )}
                {isModalOpen ? (
                    <>
                        <Modal handleClose={handleCancel} header={"Confirm Delete"} deleteNftModal={true} />
                    </>
                ) : (
                    <></>
                )}
                {inviteModal ? <Modal handleClose={handleCloseInvite} header={"Invite"} inviteModal={true} /> : null}
            </div>
        </div>
    );
};

export default Wish;
