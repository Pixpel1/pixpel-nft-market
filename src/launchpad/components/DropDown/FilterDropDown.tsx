import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

interface DropDownRounded {
    contentList: {
        title: string;
    }[];
    initialContent: string;
    fontSize: string;
    textColor: string;
    backgroundColor: string;
    filterIcon?: string | StaticImageData;
    filterIconSvg?: boolean;
    filterSort?: boolean;
    classNames?: string;
}
const FilterDropDown = ({
    initialContent,
    contentList,
    fontSize,
    textColor,
    backgroundColor,
    filterIcon,
    filterIconSvg,
    filterSort,
}: DropDownRounded) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedContent, setSelectedContent] = useState(initialContent);
    const [bgColor, setBgColor] = useState("bg-app-black");
    const [font, setFont] = useState("");
    backgroundColor = backgroundColor || "bg-app-black";
    useEffect(() => {
        setFont(fontSize);
    }, [fontSize]);

    useEffect(() => {
        setBgColor(backgroundColor);
    }, [backgroundColor]);

    const handleDropDown = () => {
        if (showDropDown) {
            setShowDropDown(false);
        } else {
            setShowDropDown(true);
        }
    };
    const selectHandleClick = (contentTitle: string) => {
        setSelectedContent(contentTitle);
        setShowDropDown(false);
    };

    return (
        <>
            {filterIconSvg ? (
                <div className="flex fle-col relative">
                    <button
                        className="group bg-app-black-button py-3 px-5 hover:bg-app-primary rounded-md"
                        onClick={handleDropDown}
                    >
                        <div className={"flex rounded-xl gap-3 items-center justify-center"}>
                            {filterSort ? (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-app-primary fill-app-primary group-hover:stroke-[#fff] group-hover:fill-[#fff]"
                                        width="24"
                                        height="31"
                                        viewBox="0 0 24 31"
                                        fill="none"
                                    >
                                        <line
                                            x1="3.17969"
                                            y1="1.45313"
                                            x2="3.17969"
                                            y2="29.9986"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                        <line
                                            x1="11.9062"
                                            y1="1.45313"
                                            x2="11.9062"
                                            y2="29.9986"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                        <line
                                            x1="20.6328"
                                            y1="1.45313"
                                            x2="20.6328"
                                            y2="29.9986"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                        <circle cx="3.27273" cy="21.179" r="3.27273" />
                                        <circle cx="11.9993" cy="10.2727" r="3.27273" />
                                        <circle cx="20.7259" cy="18.9993" r="3.27273" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-app-primary group-hover:stroke-[#fff]"
                                        width="29"
                                        height="26"
                                        viewBox="0 0 29 26"
                                        fill="none"
                                    >
                                        <path
                                            d="M28 1H1L11.8 13.6133V22.3333L17.2 25V13.6133L28 1Z"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </>
                            )}
                        </div>
                    </button>
                    {showDropDown === true ? (
                        <div className="absolute left-0 top-14  z-10 rounded-bl-md rounded-br-md">
                            <div className={bgColor + " flex flex-col rounded-b-md w-39"}>
                                {contentList.map((content, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className={`relative flex justify-start px-[11px] py-2  border-b border-app-black-duration last-of-type:border-b-0 cursor-pointer`}
                                            onClick={() => {
                                                selectHandleClick(content.title);
                                            }}
                                        >
                                            <div className={"text-lg font-medium hover:text-app-blue w-full"}>
                                                {content.title}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : (
                <>
                    <div
                        className={
                            "cursor-pointer " + bgColor + (showDropDown ? " rounded-lg rounded-b-none" : " rounded-md")
                        }
                        onClick={handleDropDown}
                    >
                        <div
                            className={
                                (!selectedContent ? "px-4" : "px-8") +
                                " flex rounded-xl gap-3 items-center justify-center py-3"
                            }
                        >
                            {selectedContent ? (
                                <>
                                    <div className={font + " font-medium " + textColor}>{selectedContent}</div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center">
                                        {!filterIcon ? (
                                            <>
                                                <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                    <path
                                                        d="M1 1.75L5.5 6.25L10 1.75"
                                                        stroke="#717A8B"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ) : filterIconSvg ? (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-app-primary group-hover:stroke-[#fff]"
                                                    width="29"
                                                    height="26"
                                                    viewBox="0 0 29 26"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M28 1H1L11.8 13.6133V22.3333L17.2 25V13.6133L28 1Z"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ) : (
                                            <div>
                                                <Image
                                                    src={filterIcon}
                                                    alt="filter"
                                                    className="w-7 h-6 object-cover object-center"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="relative">
                            {showDropDown === true ? (
                                <div className="absolute inset-0 z-10">
                                    <div className="fixed inset-0 w-full h-full" onClick={handleDropDown}></div>
                                    <div className={bgColor + " flex flex-col rounded-b-md w-32"}>
                                        {contentList.map((content, idx) => {
                                            return (
                                                <div
                                                    key={idx}
                                                    className="relative flex justify-start px-6 py-2  border-b-2 border-app-gray last-of-type:border-b-0 first-of-type:border-t-2"
                                                    onClick={() => {
                                                        selectHandleClick(content.title);
                                                    }}
                                                >
                                                    <div className={"text-base font-medium hover:text-app-blue"}>
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
                </>
            )}
        </>
    );
};

export default FilterDropDown;
