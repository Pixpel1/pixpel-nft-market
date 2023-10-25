import React, { useState } from "react";
import { Modal } from "antd";
import { paymentOptions } from "@nft/important/dataList";
import SuccessModal from "./SuccessModal";
import DropDownRoundedIcon from "../DropDown/DropDownRoundedIcon";
import Image, { StaticImageData } from "next/image";

interface NftCardPayModal {
    setShowModal: (value: boolean) => void;
    showModal?: boolean;
    data: { id: string | number; img: StaticImageData | string } | null;
    nftDetails:
        | {
              title: string;
              value: string;
              items: { title: string; value: string }[];
          }[]
        | null;
}

const NftCardPayModal = ({ showModal, setShowModal, data, nftDetails }: NftCardPayModal) => {
    const [showSuccessModal, setShowSuccessModal] = useState<boolean | undefined>(false);

    console.log("paymentOptions", paymentOptions);

    return (
        <>
            {showModal ? (
                <div className="fixed inset-0 z-10 overflow-x-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal?.(false)}
                    ></div>
                    <div className="flex items-center px-4 py-6 min-h-screen">
                        {/* <div className="relative flex flex-wrap lg:flex-nowrap w-full max-w-7xl mx-auto bg-app-black-modal rounded-xl shadow-lg px-4 sm:px-6 md:px-8 py-12 text-lg gap-4 sm:gap-6 md:gap-10 border-b-2 border-b-app-gray"> */}
                        <div className="relative flex flex-col max-w-7xl w-full mx-auto bg-app-black-modal rounded-xl shadow-lg px-4 sm:px-6 md:px-8 py-12">
                            <div className="flex flex-wrap lg:flex-nowrap w-full text-lg gap-4 sm:gap-6 md:gap-10 ">
                                <div className="flex flex-col gap-3 order-2 lg:order-1 lg:gap-7 w-full lg:w-2/5">
                                    <Image
                                        src={data?.img as StaticImageData}
                                        fill
                                        alt="NFT"
                                        className="hidden lg:flex w-full h-full object-cover rounded-xl !relative"
                                    />
                                </div>
                                <div className="flex flex-col w-full order-1 lg:order-2 lg:w-3/5">
                                    <div className="flex flex-col items-start 1xs:flex-row justify-between 1xs:justify-between w-full mb-4">
                                        <div className="text-2xl font-medium order-2 mt-2 1xs:mt-0 1xs:order-1 flex justify-start">
                                            ARCHER LIGHT BOW LEGENDARY
                                        </div>
                                        <div className="flex order-1 1xs:order-2 justify-end gap-3">
                                            <div
                                                className="group rounded-md flex justify-center items-center h-11 w-11 cursor-pointer"
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
                                        className="lg:hidden w-full h-full relative object-cover rounded-xl"
                                    />
                                    <div className="grid  grid-cols-1 sm:md-grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
                                        {nftDetails?.map((details, i) => {
                                            return i < 3 ? (
                                                <div
                                                    className={`${details.title} mt-6 sm:mt-4 md:mt-4 lg:mt-0  border-app-gray `}
                                                    key={i}
                                                >
                                                    <div className="bg-app-black-button text-base rounded-lg justify-between flex items-center tracking-wider py-2 px-6 mb-2 mx-4">
                                                        <h4 className="inline-flex uppercase font-medium">
                                                            {details.title}
                                                        </h4>
                                                        <span className="text-app-blue font-semibold">
                                                            {details.value}
                                                        </span>
                                                    </div>
                                                    <ul
                                                        className={`px-1 py-1 border-app-gray  text-base ${
                                                            i === 2 ? "border-r-0" : "md:border-r"
                                                        }`}
                                                    >
                                                        {details.items?.map((item, index) => {
                                                            return (
                                                                <li
                                                                    key={index}
                                                                    className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 px-4 -mx-1"
                                                                >
                                                                    <h4 className="inline-flex uppercase font-medium">
                                                                        {item.title}
                                                                    </h4>
                                                                    <span className="text-app-blue font-semibold">
                                                                        {item.value}
                                                                    </span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            ) : (
                                                ""
                                            );
                                        })}
                                    </div>
                                    <div className="flex mt-4 flex-col">
                                        <div className="text-2xl uppercase">WEAPON SKILLS</div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-4 mt-2">
                                            <li className="flex gap-2 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                                <h4 className="uppercase text-base font-medium">Sword:</h4>
                                                <span className="text-app-blue font-semibold">20</span>
                                            </li>
                                            <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                                <h4 className="uppercase text-base font-medium">Axe:</h4>
                                                <span className="text-app-blue font-semibold">20</span>
                                            </li>
                                            <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                                <h4 className="uppercase text-base font-medium">Bow:</h4>
                                                <span className="text-app-blue font-semibold">50</span>
                                            </li>
                                            <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                                <h4 className="uppercase text-base font-medium">Wand:</h4>
                                                <span className="text-app-blue font-semibold">80</span>
                                            </li>
                                            <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                                <h4 className="uppercase text-base font-medium">Staff:</h4>
                                                <span className="text-app-blue font-semibold">100</span>
                                            </li>
                                            <li className="flex gap-4 border-b  border-app-gray justify-between items-center py-1 pl-1 pr-12">
                                                <h4 className="uppercase text-base font-medium">Shield:</h4>
                                                <span className="text-app-blue font-semibold">20</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2 mb-6 mt-8">
                                        <div className="text-2xl uppercase -mb-2">NFT STATUS</div>
                                        <div className="grid grid-cols-1 gap-x-4 text-base">
                                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 text-base font-medium">
                                                    Blockchain:
                                                </div>
                                                <div className="flex justify-end text-app-blue font-semibold">
                                                    CONCORDIUM
                                                </div>
                                            </div>
                                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 text-base font-medium">
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
                                                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 text-base font-medium">
                                                    Game:
                                                </div>
                                                <div className="flex justify-end text-app-blue font-semibold">
                                                    CRYPTO BOTS
                                                </div>
                                            </div>
                                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center border-b-2 py-3 border-b-app-gray">
                                                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 text-base font-medium">
                                                    NFT Location:
                                                </div>
                                                <div className="flex justify-end text-app-blue font-semibold">
                                                    C3RSTKOM
                                                </div>
                                            </div>
                                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center py-3">
                                                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 text-base font-medium">
                                                    Warranty Expires in:
                                                </div>
                                                <div className="flex justify-end text-app-blue font-semibold">
                                                    03/12/2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full gap-x-20 gap-y-8  border-b border-t mt-3 border-app-gray py-6">
                                <div className="flex gap-4 items-center">
                                    <p>Pay with:</p>
                                    <DropDownRoundedIcon
                                        initialContent={paymentOptions.title}
                                        contentList={paymentOptions.list}
                                        fontSize="text-base"
                                        textColor={""}
                                        backgroundColor={""}
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Wallet:</p>
                                    <DropDownRoundedIcon
                                        initialContent="Wallet 1"
                                        contentList={paymentOptions.list}
                                        fontSize="text-base"
                                        textColor={""}
                                        backgroundColor={""}
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Account:</p>
                                    <DropDownRoundedIcon
                                        initialContent={"Account 1"}
                                        contentList={paymentOptions.list}
                                        fontSize="text-base"
                                        textColor={""}
                                        backgroundColor={""}
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Token:</p>
                                    <DropDownRoundedIcon
                                        initialContent={"PIXP"}
                                        contentList={paymentOptions.list}
                                        fontSize="text-base"
                                        textColor={""}
                                        backgroundColor={""}
                                    />
                                </div>
                                <div className="flex flex-col border-b border-app-black w-full h-[2px]"></div>
                                <div className="flex gap-4 items-center">
                                    <p>Warranty:</p>
                                    <DropDownRoundedIcon
                                        initialContent={"Warranty 1"}
                                        contentList={paymentOptions.list}
                                        fontSize="text-base"
                                        textColor={""}
                                        backgroundColor={""}
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Duration:</p>
                                    <DropDownRoundedIcon
                                        initialContent={"3 Months"}
                                        contentList={paymentOptions.list}
                                        fontSize="text-base"
                                        textColor={""}
                                        backgroundColor={""}
                                    />
                                </div>
                                <div className="flex gap-4 items-center max-w-full">
                                    <p>Warranty Ends:</p>
                                    {/* <input
                        type="date"
                        placeholder="18/02/2023"
                        defaultValue={"18/02/2023"}
                        className="bg-app-black px-4 py-2 rounded-xl max-w-full"
                        style={{ webkitCalendarPickerIndicator: "white" }}
                      /> */}
                                    <p className="bg-app-black text-white px-5 py-3 rounded-xl">03/12/2023</p>
                                    {/* <InputDatePicker /> */}
                                </div>
                            </div>
                            <div className="grid grid-cols-5 py-5">
                                <div className="col-span-1  flex flex-col text-center">
                                    <h3 className="text-4xl font-semibold text-app-primary leading-10 mb-4">
                                        Total Price : {"1500"}
                                        {"PIXP"}
                                    </h3>
                                    <button
                                        className="text-lg bg-app-yellow hover:bg-app-yellow-hover rounded-xl px-16 py-3 capitalize text-app-black mx-auto"
                                        onClick={() => {
                                            setShowSuccessModal(true);
                                        }}
                                    >
                                        Pay
                                    </button>
                                </div>
                                <div className="col-span-4 ">
                                    <div className="flex flex-col">
                                        <div className="flex text-xl border-b border-app-black px-28 py-1.5">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Price:</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                            <div className="flex items-center ml-auto">
                                                <h4 className="font-medium">Warranty:</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                        </div>
                                        <div className="flex text-xl border-b border-app-black px-28 py-1.5">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Fee (2%):</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                            <div className="flex items-center ml-auto">
                                                <h4 className="font-medium">Fee (2%):</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                        </div>
                                        <div className="flex text-xl border-b border-app-black px-28 py-1.5">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Discount:</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                            <div className="flex items-center ml-auto">
                                                <h4 className="font-medium">Discount:</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                        </div>
                                        <div className="flex text-xl border-b border-app-black px-28 py-1.5">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Purchase Price:</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                            <div className="flex items-center ml-auto">
                                                <h4 className="font-medium">Warranty Price:</h4>
                                                <span className="text-app-blue font-semibold ml-16">100 PIXP</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <ul className="space-y-[5px]">
                                        <li className="flex items-center text-xl border-b border-app-black justify-end">
                                            <h4 className="font-medium">Price:</h4>
                                            <span className="text-app-blue font-semibold">100 PIXP</span>
                                        </li>
                                        <li className="flex items-center text-xl border-b border-app-black justify-end">
                                            <h4 className="font-medium">Fee (2%):</h4>
                                            <span className="text-app-blue font-semibold">100 PIXP</span>
                                        </li>
                                        <li className="flex items-center text-xl border-b border-app-black justify-end">
                                            <h4 className="font-medium">Discount:</h4>
                                            <span className="text-app-blue font-semibold">100 PIXP</span>
                                        </li>
                                        <li className="flex items-center text-xl border-b border-app-black justify-end">
                                            <h4 className="font-medium">Purchase Price:</h4>
                                            <span className="text-app-blue font-semibold">100 PIXP</span>
                                        </li>
                                    </ul> */}
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
                            Your has been submitted. Please check your email for your order.
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
        </>
    );
};

export default NftCardPayModal;
