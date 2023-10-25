import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface CheckboxDropDownProps {
    icon: StaticImageData | string;
    contentList: {
        title: string;
        name?: string;
        list: { icon?: StaticImageData | string; title: string }[];
    }[];
    clicked: boolean;
    singleCollection?: boolean;
}

const CheckboxDropDown = ({ icon, contentList, clicked, singleCollection }: CheckboxDropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div>
            <div
                className={`${showDropDown ? "rounded-t-md bg-app-primary " : "rounded-md "} ${
                    clicked ? "px-4 py-4 " : `${singleCollection ? "px-[19px] py-[17px] " : "px-6 py-4 "}`
                } group flex items-center gap-2 cursor-pointer bg-app-black hover:bg-app-primary`}
                onClick={() => setShowDropDown(!showDropDown)}
            >
                {/* <Image src={icon} alt="filter" className="w-full  max-w-full" /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`stroke-app-primary group-hover:stroke-[#fff] ${showDropDown ? "stroke-white" : ""}`}
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
            </div>
            <div className="relative">
                {showDropDown ? (
                    <div>
                        <div className="fixed inset-0 w-full h-full" onClick={() => setShowDropDown(!showDropDown)} />
                        <div className="inset-0">
                            <div className="absolute max-w-sm sm:max-w-lg shrink top-3 bg-app-black flex flex-col rounded-b-md gap-6  p-7 w-max  rounded-md z-10">
                                {contentList?.map((content, idx) => {
                                    const subContent = content.list;
                                    return (
                                        <div key={idx} className="flex flex-col gap-2 gap-x-5 hover:text-app-blue">
                                            <h5 className="text-lg font-medium">{content.title} :</h5>
                                            <div className="flex flex-row gap-3 flex-wrap">
                                                {subContent?.map((item, index) => {
                                                    return (
                                                        <div key={index} className="flex shrink-0">
                                                            <button className="text-sm flex flex-row items-center gap-2 font-medium px-8 py-5 rounded-lg bg-app-black-button hover:bg-app-blue uppercase">
                                                                {item.icon ? (
                                                                    <Image src={item.icon} alt={item.title || ""} />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {item.title}
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* {contentList.map((content, idx) => {
                const subContent = content.list;
                return (
                  <div
                    key={idx}
                    className="flex justify-center gap-2 px-3 py-1"
                  >
                    <h5 className="text-lg font-medium">{content.title}:</h5>
                    {subContent.map((item, index) => {
                      return (
                        <div key={index} className="flex">
                          <button className="text-sm font-medium px-6 py-5 rounded-lg bg-app-black-button hover:bg-app-blue">
                            {item.title}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              })} */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CheckboxDropDown;
