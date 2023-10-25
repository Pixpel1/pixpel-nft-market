import React, { useState } from "react";
import Image from "next/image";
import { Form, Modal, Input, Select, Button } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import NFTArcher from "@public/assets/images/NFT/nft_archer.png";
// import NFTCheck from "@public/assets/images/icons/green-check.png";
import InfoBox from "../../InfoBox/InfoBox";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
    largeTabView: boolean;
    nftInfoBox: boolean;
    setLargeView: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenNftInfoBox: React.Dispatch<React.SetStateAction<boolean>>;
};

interface NftClicked {
    nftId: number;
    nftChecked: boolean;
}

interface ButtonActiveState {
    type: string;
    active: boolean;
}
dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const Unit = ({ largeTabView, nftInfoBox, setOpenNftInfoBox, setLargeView }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [enableSave, setEnableSave] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState<string>("Selling Method");

    const [nftClicked, setNftClicked] = useState<NftClicked[]>(new Array(49).fill({ nftId: 0, nftChecked: false }));
    const [nftClickedId, setNftClickedId] = useState<number>(0);
    const [listingMessage, setListingMessage] = useState<string | null>("");
    const [buttonActive, setButtonActive] = useState<ButtonActiveState>({
        type: "",
        active: false,
    });
    const [form] = Form.useForm();
    const handleClose = (): void => {
        setShowModal(false);
    };

    const handleOpen = (nftId: number) => {
        setNftClickedId(nftId);
        setShowModal(true);
    };
    const handleSave = () => {
        if (nftClickedId !== null) {
            const updatedNftClicked = nftClicked.map((item, index) => {
                if (index === nftClickedId) {
                    return { ...item, nftChecked: true };
                }
                return item;
            });
            setNftClicked(updatedNftClicked);
        } else {
            setNftClicked([{ nftId: nftClickedId, nftChecked: true }]);
        }
        setEnableSave(true);
        setButtonActive({
            type: "",
            active: false,
        });
        setSelectedOption("Selling Method");
        setShowModal(false);
    };

    const handleButtonActive = (type: string, active: boolean): void => {
        setButtonActive({ type, active });
    };

    const handleChange = (value: string) => {
        if (value) {
            setSelectedOption(value);
            setEnableSave(false);
        }
    };
    const handleFormFinish = () => {
        // console.log("Form Values", values);
    };

    const handleOpenInfoBox = () => {
        setOpenNftInfoBox(true);
        setLargeView(true);
    };

    return (
        <div className="flex bg-app-black py-3 gap-3 px-6">
            {nftInfoBox ? (
                <>
                    <div className="flex xl1:mr-auto  left-0 ease-out z-20 duration-[0.5s] translate-x-0">
                        <InfoBox />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex absolute left-0 ease-out duration-[0.5s] -translate-x-[200%]">
                        <InfoBox />
                    </div>
                </>
            )}

            <div className="flex w-full justify-end">
                <div
                    className={`grid ${
                        largeTabView && nftInfoBox
                            ? "xl1:grid-cols-2 2xl1:grid-cols-4 3xl1:grid-cols-4 gap-6"
                            : `${
                                  !largeTabView && nftInfoBox
                                      ? `xl1:grid-cols-2 2xl1:grid-cols-5 3xl1:grid-cols-5  gap-3`
                                      : `${
                                            nftInfoBox
                                                ? "xl1:grid-cols-4 2xl1:grid-cols-5 3xl1:grid-cols-6  gap-3"
                                                : `${
                                                      largeTabView
                                                          ? "xl1:grid-cols-4 2xl1:grid-cols-5 3xl1:grid-cols-7  gap-3"
                                                          : "xl1:grid-cols-5 2xl1:grid-cols-7 3xl1:grid-cols-8 4xl1:grid-cols-10  gap-3"
                                                  }`
                                        }`
                              }`
                    }`}
                >
                    {nftClicked.map((nft, index) => {
                        console.log("nftClicked arr", nftClicked[index]);
                        console.log("arr index", index);
                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-y-[15px] bg-app-black-button p-4 relative rounded-md"
                            >
                                {nft.nftChecked ? (
                                    <>
                                        <div className="flex bg-app-black-select p-4 cursor-pointer">
                                            <Image src={NFTArcher} className="max-w-full" alt="" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-base font-medium">Crypto Bot</h3>
                                            <button
                                                className="bg-app-black-duration flex items-center  py-[5px] px-[10px] space-x-1 rounded-md "
                                                onClick={handleOpenInfoBox}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_303_10456)">
                                                        <path
                                                            d="M6.9974 12.8307C10.2191 12.8307 12.8307 10.2191 12.8307 6.9974C12.8307 3.77573 10.2191 1.16406 6.9974 1.16406C3.77573 1.16406 1.16406 3.77573 1.16406 6.9974C1.16406 10.2191 3.77573 12.8307 6.9974 12.8307Z"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M7 9.33333V7"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M7 4.66406H7.00667"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_303_10456">
                                                            <rect width="14" height="14" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <p className="text-sm font-medium uppercase">info</p>
                                            </button>
                                        </div>
                                        <div className="flex absolute top-0 left-0 right-0 bottom-0 m-auto  rounded justify-center items-center">
                                            {/* <div className="success_circle border-[1px] border-dashed bg-[#ffffff9c] border-app-green p-6 rounded-full">
                                                <div className="bg-app-green p-8 rounded-full">
                                                    <AiOutlineCheck size={70} />
                                                </div>
                                            </div> */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="205"
                                                height="232"
                                                viewBox="0 0 205 232"
                                                className="rounded"
                                                fill="none"
                                            >
                                                <rect opacity="0.61" width="205" height="232" rx="5" fill="white" />
                                                <circle
                                                    cx="102"
                                                    cy="95"
                                                    r="64.5"
                                                    stroke="#2EBD85"
                                                    stroke-dasharray="2 2"
                                                />
                                                <circle cx="102" cy="95" r="50" fill="#2EBD85" />
                                                <path
                                                    d="M121.186 78.0339L107.087 92.0222L95.5303 103.583L83.9737 92.0222C83.3147 91.3669 82.4225 91.0003 81.4933 91.003C80.5641 91.0057 79.6741 91.3775 79.0189 92.0367C78.3638 92.6959 77.9973 93.5886 78 94.5182C78.0027 95.4477 78.3744 96.3381 79.0334 96.9934L93.0168 110.982C93.3406 111.312 93.7271 111.575 94.1538 111.753C94.5805 111.932 95.0388 112.024 95.5014 112.022C95.9553 112.022 96.4043 111.93 96.8215 111.751C97.2386 111.572 97.6152 111.311 97.9282 110.982L125.953 82.976C126.608 82.3168 126.975 81.4243 126.972 80.4947C126.969 79.5652 126.598 78.6748 125.939 78.0194C125.28 77.3641 124.388 76.9973 123.458 77C122.529 77.0027 121.639 77.3747 120.984 78.0339"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            className="group flex bg-app-black-select p-4 cursor-pointer hover:bg-app-white-white_31"
                                            onClick={() => handleOpen(index)}
                                        >
                                            <Image
                                                src={NFTArcher}
                                                className="max-w-full group-hover:opacity-[0.8]"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-base font-medium">Crypto Bot</h3>
                                            <button
                                                className="bg-app-black-duration flex items-center hover:bg-app-primary  py-[5px] px-[10px] space-x-1 rounded-md "
                                                onClick={handleOpenInfoBox}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_303_10456)">
                                                        <path
                                                            d="M6.9974 12.8307C10.2191 12.8307 12.8307 10.2191 12.8307 6.9974C12.8307 3.77573 10.2191 1.16406 6.9974 1.16406C3.77573 1.16406 1.16406 3.77573 1.16406 6.9974C1.16406 10.2191 3.77573 12.8307 6.9974 12.8307Z"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M7 9.33333V7"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M7 4.66406H7.00667"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_303_10456">
                                                            <rect width="14" height="14" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <p className="text-sm font-medium uppercase">info</p>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {
                <Modal
                    className="nft-sets-modal"
                    centered
                    open={showModal}
                    footer={null}
                    onCancel={handleClose}
                    width={522}
                    closeIcon={
                        <div className="group flex bg-app-black-select hover:bg-app-black-duration p-2 rounded-sm">
                            <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                className=" group-hover:stroke-white stroke-[#717A8B]"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 1.5L4.5 4.5M7.5 7.5L4.5 4.5M4.5 4.5L1.5 7.5L7.5 1.5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    }
                >
                    <div className="flex">
                        <Form form={form} layout="vertical" onFinish={handleFormFinish} className="nft_set_form w-full">
                            <div className="flex flex-col pl-3.5 pr-7 py-5">
                                <div className="flex gap-x-8">
                                    <div className="flex bg-slate-800 py-4 px-3 rounded">
                                        <div className="bg-gray-700 p-4">
                                            <Image src={NFTArcher} className="w-full h-full object-cover" alt="nft" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-5 h-full">
                                        <Select
                                            defaultValue="Selling Method"
                                            onChange={handleChange}
                                            value={selectedOption}
                                            className="global_select inline_orderdate nft_set_select"
                                            popupClassName="global_select_popup inline_orderdate_popup"
                                            options={[
                                                { value: "fixedprice", label: "Fixed Price" },
                                                { value: "auction", label: "Auction" },
                                            ]}
                                        />
                                        <Form.Item label="Fixed Price" name="fixed_price" className="mb-0 rounded-xl">
                                            <Input className="h-14" />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center mt-7">
                                    <p className="text-base font-medium mb-4">Listing</p>
                                    <div className="flex justify-between gap-x-10 relative">
                                        <div className="group flex flex-col">
                                            <button
                                                className={
                                                    (buttonActive.type === "regular" && buttonActive.active
                                                        ? "bg-app-primary hover:before:border-0"
                                                        : "") +
                                                    "  bg-app-black border-[1px] border-solid border-transparent relative  hover:border-app-primary before:absolute before:-top-1 before:left-0 before:mx-auto before:border-transparent before:border-solid before:w-full before:border-t-4 hover:before:border-app-primary text-base font-medium py-4 px-7 rounded-md"
                                                }
                                                onMouseEnter={() =>
                                                    setListingMessage(
                                                        "Our Staking is listed as a Regular with a Standard Exposure"
                                                    )
                                                }
                                                onMouseLeave={() => setListingMessage(null)}
                                                onClick={() => handleButtonActive("regular", true)}
                                            >
                                                Regular
                                            </button>
                                        </div>
                                        <button
                                            className={
                                                (buttonActive.type === "super" && buttonActive.active
                                                    ? "bg-app-primary hover:before:border-0"
                                                    : "") +
                                                " bg-app-black border-[1px] border-solid border-transparent relative  hover:border-app-primary before:absolute before:-top-1 before:left-0 before:mx-auto before:border-transparent before:border-solid before:w-full before:border-t-4 hover:before:border-app-primary text-base font-medium py-4 px-7 rounded-md"
                                            }
                                            onMouseEnter={() =>
                                                setListingMessage(
                                                    "Staking pools listed as Super will have an increased Exposure. The fee will be fixed as 0.2% of the total staking amount"
                                                )
                                            }
                                            onMouseLeave={() => setListingMessage(null)}
                                            onClick={() => handleButtonActive("super", true)}
                                        >
                                            Super
                                        </button>
                                        <button
                                            className={
                                                (buttonActive.type === "ultra" && buttonActive.active
                                                    ? "bg-app-primary hover:before:border-0"
                                                    : "") +
                                                " bg-app-black border-[1px] border-solid border-transparent relative  hover:border-app-primary before:absolute before:-top-1 before:left-0 before:mx-auto before:border-transparent before:border-solid before:w-full before:border-t-4 hover:before:border-app-primary text-base font-medium py-4 px-7 rounded-md"
                                            }
                                            onMouseEnter={() =>
                                                setListingMessage(`Staking pools listed as Ultra will have the highest exposure
                                            and will be part of PIXPEL´s Advertisement.
                                            The fee will be fixed as 2.0% of the total staking amount.
                                            There will be a fee of 0.05% per staking transaction.`)
                                            }
                                            onMouseLeave={() => setListingMessage(null)}
                                            onClick={() => handleButtonActive("ultra", true)}
                                        >
                                            Ultra
                                        </button>
                                    </div>
                                    <div
                                        className={
                                            (listingMessage === null
                                                ? "bg-app-black opacity-0"
                                                : "bg-app-black-button opacity-100") +
                                            " flex min-h-min p-2 mx-3 mt-0.5 rounded-bl-md rounded-br-md"
                                        }
                                    >
                                        <p className="flex basis-[content] justify-center items-center text-sm font-medium mb-0 h-20">
                                            {listingMessage}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8 ">
                                <Button
                                    type="primary"
                                    disabled={enableSave}
                                    className={
                                        "bg-app-green hover:!bg-app-green-hover disabled:bg-app-black disabled:border-app-black border-app-green hover:border-app-green-hover rounded-sm px-20 h-16 text-lg font-medium"
                                    }
                                    onClick={handleSave}
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default Unit;
