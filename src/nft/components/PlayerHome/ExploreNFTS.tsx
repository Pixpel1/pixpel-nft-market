import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

interface btn {
    img?: StaticImageData | string;
    img2?: StaticImageData | string;
    name?: string;
    icon?: boolean;
    link?: string;
    isBold?: boolean;
}

interface nftData {
    img: StaticImageData | string;
    name?: string;
    category?: string;
    order?: string;
    price?: string;
    percent?: string;
    view?: string;
}

function ExploreNFTS() {
    const [model, setModel] = useState(67);
    return (
        <>
            <div className="flex flex-col px-[50px] max-2xl1:px-[0px] max-sm:mt-4">
                <div className="flex justify-center">
                    <p className="flex text[#FFF] ftext-center text-[77px] font-semibold relative max-xs:text-[24px] max-lg:text-[36px]">
                        Explore Our NFT Games
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={15}
                            height={15}
                            className="absolute right-[-48px] top-[29px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={30}
                            height={30}
                            className="absolute right-[-40px] top-[38px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={15}
                            height={15}
                            className="absolute left-[-53px] bottom-[38px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-[-44px] bottom-[12px]"
                        />
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-[15px] gap-y-[15px] mt-[41px]">
                    {btn.map((item, idx) => (
                        <div key={idx}>
                            <div className=" bg-[linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] rounded-[5px] w-fit p-[1px]">
                                <div
                                    className="relative group flex items-center gap-x-[15px] bg-[#29313C] py-[18px] px-[50px] rounded-[5px] cursor-pointer hover:bg-[#0196C9] "
                                    onClick={() => setModel(model !== idx ? idx : 67)}
                                >
                                    {item.img && item.img2 && (
                                        <>
                                            <Image
                                                className="group-hover:hidden block"
                                                src={item.img}
                                                alt=""
                                                width={24}
                                                height={24}
                                            />
                                            <Image
                                                className="group-hover:block hidden"
                                                src={item.img2}
                                                alt=""
                                                width={24}
                                                height={24}
                                            />
                                        </>
                                    )}
                                    <p className={item.isBold ? "font-semibold" : ""}>{item.name}</p>
                                    {/* {item.icon && <RiArrowDropDownLine size={27} />}
                                    {model === idx && (
                                        <div className="flex flex-col bg-[#29313C] items-center w-full gap-y-2 z-10 absolute top-[66px] left-0">
                                            <p className="hover:text-[#0196C9] text-[14px] py-2">Class 1</p>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-x-[41px] gap-y-[41px] mt-[111px] max-sm:mt-4">
                    {nftdata.map((item, idx) => (
                        <div key={idx} className="relative">
                            <Image
                                alt=""
                                src={item.img}
                                width={479}
                                height={658}
                                className="rounded-[20px] max-w-[322px] md:max-w-[479px] max-h-[658px]"
                            />
                            <div className="flex flex-col absolute bottom-0 w-full justify-between group/item bg-[#29313CC7] hover:bg-[#717A8Bc4] px-[28px] py-[18px] rounded-tl-[37px] rounded-tr-[37px] rounded-bl-[20px] rounded-br-[20px]">
                                <div className="flex justify-between gap-x-20">
                                    <p className="text-[#FFFFFF] text-[24px] whitespace-nowrap max-sm:text-[16px] font-medium">
                                        {item.name}
                                    </p>
                                    <p className="text-[#FFFFFF] text-[29px] whitespace-nowrap max-sm:text-[16px] font-medium text-end">
                                        {item.price}
                                    </p>
                                </div>
                                <div className="flex justify-between gap-x-8">
                                    <p className="text-[#FFFFFF] text-[16px] max-sm:text-[14px] underline font-medium">
                                        {item.category}
                                    </p>
                                    <p className="text-[#FFFFFF] text-[16px] max-sm:text-[14px] underline font-medium text-end">
                                        {item.percent}
                                    </p>
                                </div>
                                <div className="flex justify-between gap-x-8">
                                    <button
                                        className="text-[14px] mt-[18px] rounded-[10px] px-[21px] py-[11px] w-fit max-sm:text-[12px]
                            [background:linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] hover:[background:#1FF19F]"
                                    >
                                        {item.order}
                                    </button>
                                    <div className="bg-[linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] mt-[18px] p-[1px] w-fit self-end rounded-[10px]">
                                        <button className="text-[14px] hover:text-[#000000] hover:bg-[#FFFFFF] px-[21px] py-[11px] bg-[#29313C] rounded-[10px] max-sm:text-[12px]">
                                            {item.view}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExploreNFTS;

const btn: btn[] = [
    {
        img: "/assets/images/game.png",
        img2: "/assets/images/home/Players/gamewhite.svg",
        name: "GAMES",
        icon: false,
        isBold: true,
    },
    {
        // img: '',
        name: "Class",
        icon: true,
        // link:
        //     "Class 1": string, "Class 2":string, "Class 3":string
        // ,
    },
    {
        // img: '',
        name: "Category",
        icon: true,
        // link: {
        //     "Category 1", "Category 2", "Category 3"
        // },
    },
    {
        // img: '',
        name: "Newest",
        icon: true,
        // link: "Newest 1", "Newest 2", "Newest 3",
    },
];

const nftdata: nftData[] = [
    {
        img: "/assets/images/explore/explore1.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore2.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore3.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore4.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore5.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore6.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
];
