import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperTypes from "swiper/types";
// import { Rerousel } from "rerousel";

interface data {
    img: StaticImageData | string;
    title?: string;
    id?: string;
    type?: string;
    btn?: string;
    endtime?: string;
    icon1: StaticImageData | string;
    icon2: StaticImageData | string;
    icon3: StaticImageData | string;
    icon4: StaticImageData | string;
}
const NFTSlider = () => {
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
        } else if (swiper.activeIndex === 1) {
            setDisable([true, true]);
        } else if (swiper.activeIndex === 2) {
            setDisable([true, false]);
        }
    };

    return (
        <>
            <Swiper
                ref={swiperRef}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={65}
                loop={false}
                onActiveIndexChange={checkBtns}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 35,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 35,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 35,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },
                }}
                modules={[EffectCoverflow]}
                className=""
            >
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide> */}
                <div className="flex gap-x-[35px] bg-transparent rounded-[35px] w-fit">
                    {data.map((item, idx) => (
                        <div key={idx} className="rounded-[32px] w-fit">
                            <SwiperSlide style={{ width: "fit-content" }}>
                                <div>
                                    <div className="relative rounded-[20px]">
                                        <Image
                                            src={item.img}
                                            alt=""
                                            width={420}
                                            height={381}
                                            className="w-full h-full"
                                        />
                                        <div className="flex justify-between w-[90%] mx-4 rounded-[10px] absolute bottom-[31px] bg-[#37404CF0] px-[20px] py-[19px]">
                                            <p className="text-[18px] text-[#FFFFFF]">Ends in</p>
                                            <p className="text-[18px] text-[#FFFFFF]">13h : 32m : 44s</p>
                                        </div>
                                    </div>
                                    <div className="pt-[44px] pb-[40px] px-[23px] bg-[linear-gradient(359deg,#7B61FF_0%,#29323C_100%)] rounded-bl-[32px] rounded-br-[32px] ">
                                        <div className="flex gap-x-[5px]">
                                            <p className="text-[28px] text-[#FFFFFF] w-fit">{item.title}</p>
                                            <p className="text-[28px] text-[#FFFFFF] w-fit">{item.id}</p>
                                        </div>
                                        <div className="flex gap-x-4 justify-between">
                                            <div>
                                                <p className="text-[17px] text-[#FFFFFF]">{item.type}</p>
                                                <div className="flex relative mt-[17px]">
                                                    {/* <Image src={item.icon1} alt='' width={30} height={30} className='relative z-10' />
                                                    <Image src={item.icon2} alt='' width={30} height={30} className='relative z-20 -ml-[14px]' />
                                                    <Image src={item.icon3} alt='' width={30} height={30} className='relative z-30 -ml-[14px]' />
                                                    <Image src={item.icon4} alt='' width={30} height={30} className='relative z-40 -ml-[14px]' /> */}
                                                    <Image
                                                        src={"/assets/images/nftslider/persons.svg"}
                                                        alt=""
                                                        width={110}
                                                        height={49}
                                                        className=""
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    className="text-[14px] mt-[18px] rounded-[10px] px-[35px] py-[19px] w-fit
                            [background:linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] hover:[background:#1FF19F]"
                                                >
                                                    {item.btn}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </div>
            </Swiper>
            <div className="flex justify-center mt-3 items-center gap-3">
                {disable[0] && (
                    <button
                        className="p-2 bg-white group hover:bg-app-blue rounded-full border-dothover"
                        onClick={handlePrev}
                    >
                        <AiOutlineLeft fill="white" className="hidden group-hover:flex border-dothover" size={20} />
                        <AiOutlineLeft fill="black" className="group-hover:hidden flex border-dothover" size={20} />
                    </button>
                )}
                {disable[1] && (
                    <button
                        className="p-2 bg-white  group  hover:bg-app-blue rounded-full border-dothover"
                        onClick={handleNext}
                    >
                        <AiOutlineRight fill="white" className="hidden group-hover:flex border-dothover" size={20} />
                        <AiOutlineRight fill="black" className="group-hover:hidden flex border-dothover" size={20} />
                    </button>
                )}
            </div>
        </>
    );
};

export default NFTSlider;

const data: data[] = [
    {
        img: "/assets/images/nftslider/nftslider1.png",
        title: "Mars Rover",
        id: "#20",
        type: "Waiting List",
        btn: "Start Bid",
        endtime: "13h : 32m",
        icon1: "/assets/images/home/Players/connectwallet.svg",
        icon2: "/assets/images/home/Players/nftmarketplace.svg",
        icon3: "/assets/images/home/Players/collectnft.svg",
        icon4: "/assets/images/home/Players/connectwallet.svg",
    },
    {
        img: "/assets/images/nftslider/nftslider2.png",
        title: "Futuristic Robots",
        id: "#48",
        type: "Waiting List",
        btn: "Start Bid",
        endtime: "13h : 32m : 44s",
        icon1: "/assets/images/home/Players/connectwallet.svg",
        icon2: "/assets/images/home/Players/nftmarketplace.svg",
        icon3: "/assets/images/home/Players/collectnft.svg",
        icon4: "/assets/images/home/Players/connectwallet.svg",
    },
    {
        img: "/assets/images/nftslider/nftslider3.png",
        title: "Cosmonaut Galaxy",
        id: "#15",
        type: "Waiting List",
        btn: "Start Bid",
        endtime: "13h : 32m",
        icon1: "/assets/images/home/Players/connectwallet.svg",
        icon2: "/assets/images/home/Players/nftmarketplace.svg",
        icon3: "/assets/images/home/Players/collectnft.svg",
        icon4: "/assets/images/home/Players/connectwallet.svg",
    },
];
