import React, { MutableRefObject } from "react";
import KycIcon from "@launchpad/assets/icons/kyc.png";
import auditIcon from "@launchpad/assets/icons/audit.png";
import warrantyIcon from "@launchpad/assets/icons/warranty.png";
import { useRouter } from "next/router";
import Image from "next/image";

interface HeaderWithScroll {
    LaunchpadRef: MutableRefObject<HTMLDivElement>;
    title: string;
    stakingRef: MutableRefObject<HTMLDivElement>;
    InfoRef: MutableRefObject<HTMLDivElement>;
}
const HeaderWithScroll = ({ title, LaunchpadRef, InfoRef, stakingRef }: HeaderWithScroll) => {
    const navigate = useRouter();
    return (
        <>
            <div className="flex justify-between items-start pt-11">
                <div
                    className="flex py-2 h-12 px-4 items-center bg-app-black-button hover:bg-app-blue rounded-md cursor-pointer"
                    onClick={() => navigate.back()}
                >
                    <svg className="md:h-5 h-4 md:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                    </svg>
                </div>
                <div className="2xl:text-[40px] xl:text-3xl lg:text-2xl md:text-xl text-center text-lg mb-5 font-medium uppercase">
                    {title ? title : "Market place"}
                </div>
                <div />
            </div>

            <div className="flex flex-col lg:flex-row gap-3 justify-between mx-auto mb-7 mt-5 sm:mt-0">
                <div className="flex flex-row gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
                    <button
                        className="bg-app-black px-8 py-4 2xl:text-lg font-medium rounded-md hover:bg-app-blue cursor-pointer uppercase"
                        onClick={() =>
                            LaunchpadRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Launchpad
                    </button>
                    <button
                        className="bg-app-black px-8 py-4 2xl:text-lg font-medium rounded-md hover:bg-app-blue cursor-pointer uppercase"
                        onClick={() =>
                            stakingRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Staking
                    </button>
                    <button
                        className="bg-app-black px-8 py-4 2xl:text-lg font-medium rounded-md hover:bg-app-blue cursor-pointer uppercase"
                        onClick={() =>
                            InfoRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Info
                    </button>
                </div>
            </div>
            <div className="flex mx-auto mb-4">
                <div className="flex flex-row gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
                    <div className="flex flex-shrink-0 basis-[content] items-center space-x-2">
                        <Image
                            src={KycIcon}
                            className="max-w-full w-[18px] h-[18px] object-cover object-center"
                            alt="kyc"
                        />
                        <p>KYC</p>
                    </div>
                    <div className="flex flex-shrink-0 basis-[content] items-center space-x-2">
                        <Image
                            src={auditIcon}
                            className="max-w-full w-[18px] h-[18px] object-cover object-center"
                            alt="kyc"
                        />
                        <p>Audit</p>
                    </div>
                    <div className="flex flex-shrink-0 basis-[content] items-center space-x-2">
                        <Image
                            src={warrantyIcon}
                            className="max-w-full w-[18px] h-[18px] object-cover object-center"
                            alt="kyc"
                        />
                        <p>Warranty</p>
                    </div>
                </div>
            </div>
        </>
    );
};

HeaderWithScroll.defaultProps = {
    title: "Market Place",
};

export default HeaderWithScroll;
