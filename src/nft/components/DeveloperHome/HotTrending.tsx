import Image from "next/image";
import React from "react";
import TrendingSlider from "./TrendingSlider";

function HotTrending() {
    return (
        <div className="px-[200px] pt-[50px] pb-[90px] max-lg:py-[40px] max-lg:px-8">
            <div className="flex gap-x-4">
                <p className="text-[60px] text-[#FFFFFF] font-semibold max-sm:text-[36px]">Hot trending this week</p>
                <Image src={"/assets/images/developerhome/hot.svg"} alt="" width={48} height={48} />
            </div>
            <p className="text-[20px] max-sm:text-[16px] text-[#FFFFFF] max-w-[696px]">
                Various types of trending games will be reset every week.<br></br>
                Don´t miss the best games every week and add to cart immediately
            </p>
            <div>
                <TrendingSlider />
            </div>
        </div>
    );
}

export default HotTrending;
