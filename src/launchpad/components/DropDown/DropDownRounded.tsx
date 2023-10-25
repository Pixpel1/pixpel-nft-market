import React, { useState, useEffect } from "react";

interface DropDownRounded {
    contentList: {
        title: string;
    }[];
    initialContent: string;
    fontSize: string;
    textColor: string;
    backgroundColor: string;
}

const DropDownRounded = ({ initialContent, contentList, fontSize, textColor, backgroundColor }: DropDownRounded) => {
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
            <div
                className={"cursor-pointer " + bgColor + (showDropDown ? " rounded-lg rounded-b-none" : " rounded-md")}
                onClick={handleDropDown}
            >
                <div className="flex px-10 rounded-xl gap-3 items-center justify-between py-3">
                    <div className={font + " font-medium " + textColor}>{selectedContent}</div>
                    <div className="flex">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                            <path
                                d="M1 1.75L5.5 6.25L10 1.75"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    {showDropDown === true ? (
                        <div className="absolute inset-0 z-10">
                            <div className="fixed inset-0 w-full h-full" onClick={handleDropDown}></div>
                            <div className={bgColor + " flex flex-col rounded-b-md"}>
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
    );
};

export default DropDownRounded;
