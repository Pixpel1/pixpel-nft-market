import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

interface ContentType {
    id: number;
    title: string;
    name?: string;
    url?: StaticImageData | string;
}

interface CheckboxDropDownProps {
    initialContent: {
        url?: StaticImageData | string;
        title: string;
        id: number;
    };
    contentList: ContentType[];
    fontSize: string;
    textColor: string;
    backgroundColor: string;
    center?: boolean;
}

const ImageDropDownButton = (props: CheckboxDropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedContent, setSelectedContent] = useState(props.initialContent);
    const [bgColor, setBgColor] = useState("bg-app-black");

    useEffect(() => {
        setSelectedContent(props.initialContent);
    }, [props.initialContent]);

    useEffect(() => {
        setBgColor(props.backgroundColor);
    }, [props.backgroundColor]);

    const handleDropDown = () => {
        if (showDropDown) {
            setShowDropDown(false);
        } else {
            setShowDropDown(true);
        }
    };
    const selectHandleClick = (content: ContentType) => {
        setSelectedContent(content as ContentType);
        setShowDropDown(false);
    };

    return (
        <div
            className={bgColor + (showDropDown ? " rounded-t-md" : " rounded-md") + " items-center cursor-pointer"}
            onClick={handleDropDown}
        >
            <div
                className={
                    "flex items-center px-8 py-4 rounded-md " + (props.center ? "justify-center" : "justify-between")
                }
            >
                <div className="flex gap-2.5 h-3/5 items-center">
                    <Image
                        src={selectedContent?.url as StaticImageData}
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                    />
                    <div className="flex items-center gap-2">
                        <div className="text-base font-medium">{selectedContent?.title}</div>
                        <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="relative">
                {showDropDown === true ? (
                    <div className="absolute inset-0 z-10">
                        <div className="fixed inset-0 w-full h-full" onClick={handleDropDown}></div>
                        <div className={bgColor + " flex flex-col rounded-b-md"}>
                            {props.contentList.map((content, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="relative group flex flex-row items-center justify-start gap-2.5 px-8 py-5"
                                        onClick={() => {
                                            selectHandleClick(content);
                                        }}
                                    >
                                        <Image className="h-6 w-6" src={content.url as StaticImageData} alt="" />
                                        <div className="text-base font-medium group-hover:text-app-blue">
                                            {content.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ImageDropDownButton;
