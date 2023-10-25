import Image, { StaticImageData } from "next/image";
import React from "react";

interface ShipCard {
    title: string;
    icon: string | StaticImageData;
    list: {
        title: string;
        info: string;
    }[];
    footerHeading: string;
}

const ShipCard = (props: ShipCard) => {
    const { title, icon, list, footerHeading } = props;
    return (
        <div className="bg-app-black-button flex grow basis-[content] flex-col p-4 rounded-md w-full">
            <div className="flex border-b items-center border-app-black-duration mx-auto pb-2  mb-4">
                <Image src={icon} className="w-12 h-12" alt="YoutubeIcon" />
                <h3 className="text-[32px] font-semibold uppercase ml-3">{title}</h3>
            </div>
            {list.map((item, index) => {
                return (
                    <div key={index} className="flex justify-between bg-app-black-duration p-1 px-2 rounded-sm mb-7">
                        <p className="text-xl font-medium">{item.title}:</p>
                        <p className="text-xl font-medium">{item.info}</p>
                    </div>
                );
            })}
            <div className="flex mx-auto mb-8">
                <h2 className="text-app-blue text-xl xl:text-2xl 2xl:text-[32px] font-bold mt-16">{footerHeading}</h2>
            </div>
        </div>
    );
};

export default ShipCard;
