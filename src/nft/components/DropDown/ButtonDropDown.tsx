import React, { useState } from "react";

interface ButtonDropwDownProp {
    initialContent: string;
    contentList: { title: string }[];
    clicked: boolean;
}

const ButtonDropwDown = ({ initialContent, contentList }: ButtonDropwDownProp) => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div>
            <div
                className={
                    (showDropDown ? "rounded-b-none " : "") +
                    "flex flex-col bg-app-black items-center justify-center uppercase px-12 py-3 rounded-lg gap-1 cursor-pointer"
                }
                onClick={() => setShowDropDown(!showDropDown)}
            >
                <p className="text-app-blue text-md">500 PIXP</p>
                <div className="flex items-center gap-2">
                    <span className="text-base text-app-black-duration">{initialContent}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#717A8B">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="relative">
                {showDropDown ? (
                    <div className="absolute inset-x-0 mx-auto bg-app-black flex flex-col rounded-b-md gap-2 py-3 w-full z-10">
                        {contentList?.map((content, idx) => {
                            return (
                                <div key={idx} className="flex justify-center gap-2 px-3 py-1">
                                    <button className="text-sm font-medium px-6 py-5 rounded-lg bg-app-black-button hover:bg-app-blue">
                                        {content.title}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ButtonDropwDown;
