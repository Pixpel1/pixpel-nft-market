// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import type SwiperTypes from "swiper/types";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface nftData {
    img: StaticImageData | string;
    name?: string;
    category?: string;
    order?: string;
    price?: string;
    percent?: string;
    imglogo: StaticImageData | string;
}

const TrendingSlider = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const [disable, setDisable] = useState([false, true]);

    function handlePrev() {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    }
    function handleNext() {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    }

    const checkBtns = (swiper: SwiperTypes.Swiper) => {
        if (swiper.activeIndex === 0) {
            setDisable([false, true]);
        } else if (swiper.activeIndex > 0 && swiper.activeIndex < 11) {
            setDisable([true, true]);
        } else if (swiper.activeIndex === 11) {
            setDisable([true, false]);
        }
    };

    return (
        <>
            <div className="flex justify-center -mt-3 items-center gap-3">
                {disable[0] && (
                    <button
                        className="p-2 bg-black/30 border-white border-solid  border  hover:bg-app-blue rounded-full"
                        onClick={handlePrev}
                    >
                        <AiOutlineLeft fill="white" size={20} />
                    </button>
                )}
                {disable[1] && (
                    <button
                        className="p-2 bg-black/30  border-white border-solid border  hover:bg-app-blue rounded-full"
                        onClick={handleNext}
                    >
                        <AiOutlineRight fill="white" size={20} />
                    </button>
                )}
            </div>
            <Swiper
                slidesPerView={4}
                onActiveIndexChange={checkBtns}
                spaceBetween={20}
                loop={true}
                ref={swiperRef}
                modules={[EffectCoverflow]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 35,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                <div className="flex gap-x-[30px] mt-[85px]">
                    {nftdata.map((item, idx) => (
                        <div key={idx} className="relative w-fit">
                            <SwiperSlide>
                                <div className="min-w-[358px] max-w-[360px] flex flex-col gap-x-[30px] mt-[85px]">
                                    <Image
                                        alt=""
                                        src={item.img}
                                        width={399}
                                        height={483}
                                        className="rounded-tr-[40px] rounded-tl-[40px] max-w-[360px] w-full h-full"
                                    />
                                    <div
                                        className="flex flex-col w-full justify-between px-[17px] py-[18px] 
                        bg-[linear-gradient(359deg,#7B61FF_0%,#29323C_100%)] rounded-br-[40px] rounded-bl-[40px]"
                                    >
                                        <div className="flex justify-between gap-x-8">
                                            <p className="text-[#FFFFFF] text-[18px] font-medium">{item.name}</p>
                                            <p className="text-[#FFFFFF] text-[18px] font-medium text-end flex gap-x-[8px] items-center">
                                                <Image
                                                    src={item.imglogo}
                                                    alt=""
                                                    width={18}
                                                    height={18}
                                                    className="w-fit h-fit"
                                                />
                                                {item.price}
                                            </p>
                                        </div>
                                        <div className="flex justify-between gap-x-8">
                                            <p className="text-[#FFFFFF] text-[16px] flex self-end underline">
                                                {item.category}
                                            </p>
                                            <div className="flex flex-col items-end">
                                                <p className="text-[10px] font-light flex ">Ending in</p>
                                                <p className="text-[#FFFFFF] text-[14px] text-end flex items-center gap-x-[6px]">
                                                    <Image
                                                        src={"/assets/images/developerhome/timer.svg"}
                                                        alt=""
                                                        width={17}
                                                        height={17}
                                                        className="w-fit h-fit"
                                                    />
                                                    {item.percent}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-x-8">
                                            <button
                                                className="text-[14px] font-medium mt-[18px] rounded-[10px] px-[21px] py-[11px] w-fit
                            [background:linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] hover:[background:#1FF19F]"
                                            >
                                                {item.order}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </div>
            </Swiper>
        </>
    );
};
export default TrendingSlider;

const nftdata: nftData[] = [
    {
        img: "/assets/images/developerhome/art1.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art2.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art3.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art4.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art1.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art2.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art3.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art4.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art1.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art2.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art3.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
    {
        img: "/assets/images/developerhome/art4.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "20 PIXP",
        percent: "8h 6m 24s",
        imglogo: "/assets/images/UserHome/bnb.png",
    },
];
