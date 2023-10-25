import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NFT_3 from "@public/assets/images/NFT/nft-3.png";
import { Modal } from "antd";

const Finished = () => {
    const navigate = useRouter();
    const [nftCardOpen, setNftCardOpen] = useState<boolean>(false);
    const handleNftCardOpen = () => {
        setNftCardOpen(true);
    };
    const handleNftCardClose = () => {
        setNftCardOpen(false);
    };
    return (
        <div className="flex flex-col bg-app-black">
            {new Array(3).fill(null).map((v, i) => {
                return (
                    <>
                        <div className="flex py-6 px-8">
                            <div
                                key={i}
                                className={
                                    (i !== 2 ? "border-b" : "") +
                                    " flex flex-col md:flex-row gap-x-7 border-app-black-duration bg-app-black w-full"
                                }
                            >
                                <div className="flex p-4 bg-app-gray w-56 h-56 shrink-0 rounded">
                                    <Image src={NFT_3} alt="NFT_Archer" className="w-52 h-auto rounded" />
                                </div>
                                <div className="flex flex-col md:w-full ">
                                    <div className="flex gap-x-36 border-b pb-2 border-b-app-gray items-center justify-evenly">
                                        <p className="font-medium text-xl w-[150px]">5000 PIXP</p>
                                        <button
                                            className="px-16 w-[166px] rounded font-medium text-lg py-4 hover:bg-app-green-hover bg-app-green"
                                            onClick={() => navigate.push("/checkout")}
                                        >
                                            BUY
                                        </button>
                                        <div className="flex items-center gap-x-3 md:ml-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                            >
                                                <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
                                            </svg>
                                            <p className="text-xl font-medium">Winning</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-14 items-center border-b py-2 border-b-app-gray">
                                        <div className="flex flex-col w-60  ">
                                            <p className="font-semibold text-sm text-white/50 mb-1 ">
                                                Input Offer Amount Number
                                            </p>
                                            <input
                                                className="bg-app-gray rounded py-3 px-2"
                                                placeholder="Offer Amount"
                                            />
                                        </div>
                                        <button
                                            className=" px-16 w-[166px] py-4 rounded font-medium text-lg hover:bg-app-blue-hover bg-app-blue-details"
                                            onClick={handleNftCardOpen}
                                        >
                                            BID
                                        </button>
                                    </div>
                                    <p className="font-medium text-lg pt-2 border-b pb-2 border-b-app-gray">
                                        Remaining Time: 4 months, 3 weeks, 2 days, 1 hour
                                    </p>
                                    <p className="font-medium text-lg pt-2 pb-4">End Date: 23/03/2023</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
            <Modal
                open={nftCardOpen}
                className="[&>.ant-modal-content]:bg-main max-w-md"
                footer={null}
                closeIcon={false}
            >
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h4 className="text-xl font-semibold">2500 PIXP</h4>
                        <div className="flex items-center bg-app-black-button  cursor-pointer space-x-3 p-[6px] rounded-md hover:bg-app-black-duration">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                                <path
                                    d="M6.66073 5.43691C5.40881 7.14696 2.85577 7.14696 1.60385 5.4369C0.0883452 3.3668 1.56673 0.452269 4.13229 0.452269C6.69785 0.452269 8.17624 3.3668 6.66073 5.43691Z"
                                    fill="white"
                                />
                            </svg>
                            <p className="text-xl">Winning</p>
                        </div>
                    </div>
                    <div className="flex  mt-[10px]">
                        <Image src={NFT_3} alt="NFT_Archer" className="w-full h-auto rounded" />
                    </div>
                    <div className="flex justify-between mt-[10px]">
                        <div className="flex flex-col">
                            <p className="text-xl font-medium">Remaining Time:</p>
                            <p className="text-xl font-medium text-app-primary">2 Days 24 : 10 : 04</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <input type="text" className="bg-app-black-button p-1 rounded-md w-[183px]" />
                            <button
                                className="bg-app-primary ml-auto w-[105px] hover:bg-app-blue-hover uppercase text-base font-medium px-4 py-2 rounded-md"
                                onClick={handleNftCardClose}
                            >
                                Bid
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Finished;
