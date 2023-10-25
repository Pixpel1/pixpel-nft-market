import React, { useState } from "react";
import help from "@public/assets/images/help.svg";
import cart from "@public/assets/images/cart.svg";
import { ADD_CART } from "@nft/actions/type";
import NftCardModal from "@nft/components/CardModal/NftCardModal";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import { useAppDispatch } from "@nft/hooks";

interface CollectionCardType {
    data: { img: StaticImageData | string; id: string | number; title: string };
    nftData:
        | {
              title: string;
              value: string;
              items: { title: string; value: string }[];
          }[]
        | null;
    linkDetails: string;
}

const NFTCard = ({ data, nftData }: CollectionCardType) => {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col gap-1 px-5 py-2 bg-app-black rounded-md">
                <div className="flex justify-between items-center mb-2">
                    <div className="text-app-blue font-semibold">2 PXIP</div>
                    <div
                        className="group flex items-center bg-app-black-button hover:bg-app-primary rounded px-[10px] py-[3px] gap-1 cursor-pointer"
                        onClick={() => setShowModal(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            className="stroke-app-black-duration group-hover:stroke-white"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_569_36293)">
                                <path
                                    d="M6.9974 12.8307C10.2191 12.8307 12.8307 10.2191 12.8307 6.9974C12.8307 3.77573 10.2191 1.16406 6.9974 1.16406C3.77573 1.16406 1.16406 3.77573 1.16406 6.9974C1.16406 10.2191 3.77573 12.8307 6.9974 12.8307Z"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 9.33333V7"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 4.66406H7.00667"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_569_36293">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="text-sm text-app-black-duration group-hover:text-white">INFO</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        onClick={() =>
                            router.push(
                                {
                                    pathname: "/nft-market/nftlanding",
                                    query: { singleData: JSON.stringify(data) },
                                },
                                "/nft-market/nftlanding"
                            )
                        }
                        className="cursor-pointer"
                    >
                        <Image
                            src={data.img}
                            alt="NFT"
                            className="sm:w-44 sm:h-28 max-w-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-base font-medium">{data.title}</div>
                    <div
                        className="group bg-app-black-button flex justify-center hover:bg-app-primary items-center rounded px-2 py-2 cursor-pointer"
                        onClick={() => dispatch({ type: ADD_CART, payload: data })}
                    >
                        {/* <Image src={cart} alt="cart" className="w-5 h-5" /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            className="stroke-app-primary group-hover:stroke-white"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_569_36299)">
                                <path
                                    d="M7.38021 16.5807C7.77141 16.5807 8.08854 16.2636 8.08854 15.8724C8.08854 15.4812 7.77141 15.1641 7.38021 15.1641C6.98901 15.1641 6.67188 15.4812 6.67188 15.8724C6.67188 16.2636 6.98901 16.5807 7.38021 16.5807Z"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.1615 16.5807C15.5527 16.5807 15.8698 16.2636 15.8698 15.8724C15.8698 15.4812 15.5527 15.1641 15.1615 15.1641C14.7703 15.1641 14.4531 15.4812 14.4531 15.8724C14.4531 16.2636 14.7703 16.5807 15.1615 16.5807Z"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M1.70312 1.71094H4.53646L6.43479 11.1955C6.49956 11.5216 6.67698 11.8146 6.93597 12.0231C7.19496 12.2316 7.51904 12.3423 7.85146 12.3359H14.7365C15.0689 12.3423 15.393 12.2316 15.6519 12.0231C15.9109 11.8146 16.0884 11.5216 16.1531 11.1955L17.2865 5.2526H5.24479"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_569_36299">
                                    <rect width="19" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            {<NftCardModal showModal={showModal} setShowModal={setShowModal} data={data} nftDetails={nftData} />}
        </>
    );
};
export default NFTCard;
