import { useState } from "react";
import featuredImage1 from "@public/assets/images/NFT/nft-2.png";
import featuredImage from "@public/assets/images/NFT/nft-3.png";
import CheckoutSuccessCard from "../../components/CardModal/CheckoutSuccessCard";
import CheckoutPay from "../../components/CheckoutPay/CheckoutPay";
import DropDownRounded from "../../components/DropDown/DropDownRounded";
import HeaderWithPills from "../../components/Market/HeaderWithPills/HeaderWithPills";
import { categoryList, qtyCheckout, warrantyList } from "../../important/dataList";
import Image from "next/image";

const Checkout = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cartClicked, setCartClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="2xl:px-28 pt-11 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5 relative">
                <HeaderWithPills title={"Checkout Item"} tabs={false} />
                <div className="flex flex-col warranty mt-5">
                    <h3 className="2xl:text-3xl xl:text-2xl text-xl font-semibold mb-7 uppercase text-white">
                        Warranty
                    </h3>
                    <div className="flex w-full gap-x-12 gap-y-6 xl:gap-32 border-b-2 flex-wrap border-app-gray pb-10 px-2 1xs:px-6 ">
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Select:</p>
                            <DropDownRounded
                                initialContent={warrantyList.title}
                                contentList={warrantyList.list}
                                fontSize="text-base"
                                textColor={""}
                                backgroundColor={""}
                                clicked={false}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Time:</p>
                            <DropDownRounded
                                initialContent={categoryList.title}
                                clicked={cartClicked}
                                contentList={categoryList.list}
                                fontSize={""}
                                textColor={""}
                                backgroundColor={""}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Percentage:</p>
                            <DropDownRounded
                                initialContent={categoryList.title}
                                clicked={cartClicked}
                                contentList={categoryList.list}
                                fontSize={""}
                                textColor={""}
                                backgroundColor={""}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Fee:</p>
                            <DropDownRounded
                                initialContent={categoryList.title}
                                clicked={cartClicked}
                                contentList={categoryList.list}
                                fontSize={""}
                                textColor={""}
                                backgroundColor={""}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col payment pt-10 mb-10">
                    <h3 className="2xl:text-3xl xl:text-2xl text-xl font-semibold mb-7 uppercase text-white">
                        PAYMENT METHOD
                    </h3>
                    <div className="flex w-full gap-x-12 gap-y-6 xl:gap-32 border-b-2 flex-wrap border-app-gray pb-10 px-6">
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Select:</p>
                            <DropDownRounded
                                initialContent={warrantyList.title}
                                contentList={warrantyList.list}
                                fontSize="text-base"
                                textColor={""}
                                backgroundColor={""}
                                clicked={false}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Time:</p>
                            <DropDownRounded
                                initialContent={categoryList.title}
                                clicked={cartClicked}
                                contentList={categoryList.list}
                                fontSize={""}
                                textColor={""}
                                backgroundColor={""}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Percentage:</p>
                            <DropDownRounded
                                initialContent={categoryList.title}
                                clicked={cartClicked}
                                contentList={categoryList.list}
                                fontSize={""}
                                textColor={""}
                                backgroundColor={""}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="2xl:text-xl font-medium">Fee:</p>
                            <DropDownRounded
                                initialContent={categoryList.title}
                                clicked={cartClicked}
                                contentList={categoryList.list}
                                fontSize={""}
                                textColor={""}
                                backgroundColor={""}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col payment mb-10 px-6">
                    <h3 className="2xl:text-3xl xl:text-2xl text-xl font-semibold uppercase text-white">items</h3>
                    <div className="flex flex-col md:flex-row border-b-2 border-app-gray pb-6 my-4 gap-7">
                        <div className="flex shrink-0">
                            <Image
                                src={featuredImage}
                                alt=""
                                className=" border-x-[14px] border-app-gray border-y-[16px]"
                            />
                        </div>
                        <div className="flex w-full">
                            <ul className="w-full">
                                <li className="pb-2">
                                    <h4 className="uppercase 2xl:text-2xl text-xl font-bold mt-4 md:mt-0">
                                        ARCHER LIGHT BOW LEGENDARY
                                    </h4>
                                    <hr className="border-app-black border-solid border-t-0 border-b-2 pb-2" />
                                </li>
                                <li>
                                    <div className="grid grid-cols-1  lg:grid-cols-2 items-center py-2">
                                        <h5 className="capitalize text-h5 font-medium">Price: 200 PIXP</h5>
                                        <span className="text-xl font-medium">Blockchain: Concordium</span>
                                    </div>
                                    <hr className="border-app-black border-solid border-t-0 border-b-2 pb-2" />
                                </li>
                                <li>
                                    <div className="py-4">
                                        <h5 className="capitalize text-h5 font-medium">Convert: 300 USDT</h5>
                                    </div>
                                    <hr className="border-app-black border-solid border-t-0 border-b-2" />
                                </li>
                                <li>
                                    <div className="py-4 md:py-6">
                                        <div className="flex gap-4 items-center">
                                            <p className="text-xl font-medium">QTY:</p>
                                            <DropDownRounded
                                                initialContent={qtyCheckout.title}
                                                contentList={qtyCheckout.list}
                                                fontSize="text-base"
                                                textColor={""}
                                                backgroundColor={""}
                                                clicked={false}
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b-2 gap-7 border-app-gray pb-6 my-4">
                        <div className="flex shrink-0">
                            <Image
                                src={featuredImage1}
                                alt=""
                                className=" border-x-[14px] border-app-gray border-y-[16px]"
                            />
                        </div>
                        <div className="flex w-full">
                            <ul className="w-full">
                                <li className="pb-2">
                                    <h4 className="uppercase 2xl:text-2xl text-xl font-bold mt-4 md:mt-0">
                                        ARCHER LIGHT BOW LEGENDARY
                                    </h4>
                                    <hr className="border-app-black border-solid border-t-0 border-b-2 pb-2" />
                                </li>
                                <li>
                                    <div className="grid grid-cols-1  lg:grid-cols-2 items-center py-2">
                                        <h5 className="capitalize text-h5 font-medium">Price: 200 PIXP</h5>
                                        <span className="text-xl font-medium">Blockchain: Concordium</span>
                                    </div>
                                    <hr className="border-app-black border-solid border-t-0 border-b-2 pb-2" />
                                </li>
                                <li>
                                    <div className="py-4">
                                        <h5 className="capitalize text-h5 font-medium">Convert: 300 USDT</h5>
                                    </div>
                                    <hr className="border-app-black border-solid border-t-0 border-b-2" />
                                </li>
                                <li>
                                    <div className="py-4 md:py-6">
                                        <div className="flex gap-4 items-center">
                                            <p className="text-xl font-medium">QTY:</p>
                                            <DropDownRounded
                                                initialContent={qtyCheckout.title}
                                                contentList={qtyCheckout.list}
                                                fontSize="text-base"
                                                textColor={""}
                                                backgroundColor={""}
                                                clicked={false}
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                        <h4 className="2xl:text-3xl xl:text-2xl text-xl font-semibold mb-6 md:mb-0 md:mr-10">
                            TOTAL: 5000 PIXP = 6000 USDT
                        </h4>
                        <button
                            className="uppercase px-16 py-4 text-black font-medium rounded-lg text-lg bg-app-yellow hover:bg-app-yellow-hover"
                            onClick={() => setShowModal(!showModal)}
                        >
                            Pay
                        </button>
                    </div>
                </div>

                <div className="w-4/5 sm:w-3/5 md:w-2/5 xl1:w-1/5 absolute right-0 top-20">
                    <CheckoutPay showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
            <div
                className={
                    showModal
                        ? "absolute top-0 bottom-0 right-0 left-0 w-full h-full  m-auto min-h-fit backdrop-blur-sm"
                        : "hidden"
                }
            >
                <div className="flex justify-center relative top-16">
                    <CheckoutSuccessCard showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
        </>
    );
};

export default Checkout;
