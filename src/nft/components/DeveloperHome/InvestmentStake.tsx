import Image from "next/image";
import React from "react";

export default function InvestmentStake() {
    return (
        <div className="bg-[linear-gradient(24deg,#2EBD85_0%,#0095C8_100%)] flex flex-col items-center py-[75px]">
            <div className="flex gap-x-[68px]">
                <div>
                    <Image src={"/assets/images/developerhome/mltiplebtc.png"} alt="" width={160} height={297} />
                </div>
                <div className="flex flex-col items-center pt-[20px]">
                    <p className="text-[60px] font-semibold leading-normal max-w-[883px] text-center relative max-lg:text-[36px]">
                        Create your investment stake in the best place
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute right-[49px] top-[88px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={59}
                            height={59}
                            className="absolute right-[-13px] top-[29px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute left-[27px] bottom-[65px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={84}
                            height={84}
                            className="absolute left-[-44px] bottom-[-4px]"
                        />
                    </p>
                    <p className="text-[20px] text-[#FFFFFF] text-center flex justify-center mt-[35px] max-w-[588px] max-lg:text-[14px]">
                        Lorem Ipsum eoiasdñfoa ksdhfaiefñoaishfñlkanvñoashvñoanfvk
                    </p>
                    <button className="text-[18px] font-medium border border-solid border-white bg-[#1F2630] hover:bg-[#37404C] px-[100px] py-[25px] rounded-[10px] w-fit mt-[76px] max-lg:mt-4 max-lg:px-8 max-lg:py-4">
                        Create Staking
                    </button>
                </div>
                <div>
                    <Image src={"/assets/images/developerhome/mulbtc.png"} alt="" width={160} height={297} />
                </div>
            </div>
        </div>
    );
}
