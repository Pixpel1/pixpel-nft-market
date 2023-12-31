import React, { useState, useEffect } from "react";

interface CheckboxDropDownProps {
    initialContent: string;
    contentList: { title: string; name?: string }[];
    fontSize: string;
    textColor: string;
    backgroundColor: string;
}

const DropDownButton = ({
    initialContent,
    contentList,
    fontSize,
    textColor,
    backgroundColor,
}: CheckboxDropDownProps) => {
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
                className={"cursor-pointer " + bgColor + (showDropDown ? " rounded-t" : " rounded")}
                onClick={handleDropDown}
            >
                <div className="flex px-6 rounded-xl gap-3 items-center justify-between py-4">
                    <div className={font + " font-medium " + textColor}>{selectedContent}</div>
                    <div className="flex">
                        <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    {showDropDown === true ? (
                        <div className="absolute inset-0 z-10">
                            <div className="fixed inset-0 w-full h-full" onClick={handleDropDown}></div>
                            <div className={bgColor + " flex flex-col rounded-b-xl"}>
                                {contentList.map((content, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="relative flex justify-start px-8 py-5"
                                            onClick={() => {
                                                selectHandleClick(content.title || "");
                                            }}
                                        >
                                            <div className={"text-base font-medium hover:text-app-blue " + textColor}>
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

export default DropDownButton;
