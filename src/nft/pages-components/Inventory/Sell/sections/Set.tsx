import React, { useState } from "react";
import { Form, Checkbox, Tooltip, Modal, Input, DatePicker, Select, Button } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import Image from "next/image";
import NFTCrypto from "@public/assets/images/NFT/nft_bids.png";
import NFTArcher from "@public/assets/images/NFT/nft_archer.png";
import InfoBox from "../../InfoBox/InfoBox";
import CalenderIcon from "@public/icons/calender_vector.png";

// import Modal from "@nft/components/Modal/Modal";

type Props = {
    largeTabView: boolean;
    nftInfoBox: boolean;
    setLargeView: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenNftInfoBox: React.Dispatch<React.SetStateAction<boolean>>;
    setBackToSell: () => void;
};
dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
const { TextArea } = Input;
const Set = ({ largeTabView, nftInfoBox, setOpenNftInfoBox, setLargeView, setBackToSell }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [form] = Form.useForm();
    const handleClose = (): void => {
        setBackToSell();
        console.log("handleClose");
        setShowModal(false);
    };
    const handleOpen = (): void => {
        setShowModal(true);
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const disabledDate = (current: Dayjs) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf("day");
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
                                      ? `xl1:grid-cols-2 2xl1:grid-cols-5 3xl1:grid-cols-5 gap-3`
                                      : `${
                                            nftInfoBox
                                                ? "xl1:grid-cols-4 2xl1:grid-cols-5 3xl1:grid-cols-6 gap-3"
                                                : `${
                                                      largeTabView
                                                          ? "xl1:grid-cols-4 2xl1:grid-cols-5 3xl1:grid-cols-7 gap-3"
                                                          : "xl1:grid-cols-5 2xl1:grid-cols-7 3xl1:grid-cols-8 4xl1:grid-cols-10 gap-3"
                                                  }`
                                        }`
                              }`
                    }`}
                >
                    {new Array(49).fill(null).map((_, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-y-[15px] relative bg-app-black-button p-4  rounded-md"
                            >
                                <div
                                    className={"customCheckbox absolute right-[15px] top-3 menuCheckboxes inline-flex"}
                                >
                                    <Form.Item valuePropName="checked" noStyle>
                                        <Checkbox className="text-white leading-normal"></Checkbox>
                                    </Form.Item>
                                </div>
                                <div className="flex bg-app-black-select p-4 hover:bg-app-black-duration">
                                    <Image src={NFTCrypto} className="max-w-full w-full" alt="" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base font-medium">Crypto Bot</h3>
                                    <button
                                        className="bg-app-black-duration flex items-center  hover:bg-app-primary py-[5px] px-[10px] space-x-1 rounded-md "
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
                            </div>
                        );
                    })}
                </div>
            </div>
            {
                <Modal
                    title="Create Set"
                    className="nft-sets-modal"
                    centered
                    open={showModal}
                    closeIcon={false}
                    footer={null}
                    width={1000}
                >
                    <div className="flex justify-end">
                        <p className="text-xl font-semibold mb-3">ID#123456</p>
                    </div>
                    <div className="flex bg-app-black-black_op_04 px-7 py-7 rounded-md">
                        <Form form={form} layout="vertical" onFinish={handleFormFinish} className="nft_set_form w-full">
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 flex relative w-full h-full">
                                    <div className="flex absolute top-0 left-0 bg-app-black-select p-3 rounded-md">
                                        <Image src={NFTCrypto} className="max-w-full" alt="" />
                                    </div>
                                    <div className="flex cursor-pointer absolute top-0 left-0 mt-1 ml-6 p-3 bg-app-black-select rounded-md">
                                        <Image src={NFTArcher} className="max-w-full" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-2 flex  gap-y-8 flex-col">
                                    <div className="flex w-full gap-x-16">
                                        <Form.Item
                                            label="Starting Price:"
                                            name="starting_price"
                                            className="mb-0 rounded-xl w-full"
                                        >
                                            <Input placeholder="Starting Price" className="h-14" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Minimum Selling Price:"
                                            name="minimum_selling_price"
                                            className="mb-0 rounded-xl w-full"
                                        >
                                            <Input placeholder="Minimum Selling Price" className="h-14" />
                                        </Form.Item>
                                    </div>
                                    <div className="flex gap-x-16">
                                        <Form.Item
                                            label="Publication Starts:"
                                            name="publication_start"
                                            className="mb-0 rounded-xl w-full custom-date-container"
                                        >
                                            <DatePicker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                showTime={{
                                                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                                                }}
                                                disabledDate={disabledDate}
                                                popupClassName="datepicker-popup"
                                                suffixIcon={<Image src={CalenderIcon} alt="calender" />}
                                                className="w-full bg-app-black-button border-0 shadow-none h-14 custom-datepicker hover:border-none"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Publication Ends:"
                                            name="publication_ends"
                                            className="mb-0 rounded-xl w-full custom-date-container"
                                        >
                                            <DatePicker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                showTime={{
                                                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                                                }}
                                                disabledDate={disabledDate}
                                                suffixIcon={<Image src={CalenderIcon} alt="calender" />}
                                                popupClassName="datepicker-popup"
                                                className="w-full bg-app-black-button border-0 shadow-none h-14 custom-datepicker hover:border-none"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full my-8">
                                <Form.Item name="description" className="mb-0 rounded-xl w-full">
                                    <TextArea rows={6} placeholder="Text Box" />
                                </Form.Item>
                            </div>
                            <div className="flex justify-between">
                                <Select
                                    defaultValue="Selling Method"
                                    onChange={handleChange}
                                    className="global_select inline_orderdate nft_set_select"
                                    popupClassName="global_select_popup inline_orderdate_popup"
                                    options={[
                                        { value: "fixedprice", label: "Fixed Price" },
                                        { value: "auction", label: "Auction" },
                                    ]}
                                />
                                <Select
                                    defaultValue="Listing Method"
                                    onChange={handleChange}
                                    className="global_select inline_orderdate nft_set_select"
                                    popupClassName="global_select_popup inline_orderdate_popup"
                                    options={[
                                        { value: "regular", label: "Regular" },
                                        { value: "super", label: "Super" },
                                        { value: "ultra", label: "Ultra" },
                                    ]}
                                />
                            </div>
                            <div className="flex justify-center mt-8">
                                <Button
                                    className="bg-app-green hover:bg-app-green-hover border-app-green hover:border-app-green-hover rounded-sm px-12 h-16 text-lg font-medium"
                                    onClick={handleClose}
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

export default Set;
