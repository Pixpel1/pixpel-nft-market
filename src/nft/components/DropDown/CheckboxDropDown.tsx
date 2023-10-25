import React, { useState } from "react";
import { Checkbox, Form } from "antd";

interface CheckboxDropDownProps {
    initialContent: string;
    contentList: { title: string; name?: string }[];
    clicked?: boolean;
    classNames?: string;
}

const CheckboxDropDown = ({ initialContent, contentList, clicked, classNames }: CheckboxDropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false);
    console.log("content", contentList);

    return (
        <div>
            <div
                className={`flex items-center gap-2 py-4 cursor-pointer bg-app-black hover:bg-app-black-select ${
                    showDropDown ? "rounded-t-md" : "rounded-md"
                } ${classNames ? classNames : clicked ? "px-4" : "px-10"}`}
                onClick={() => setShowDropDown(!showDropDown)}
            >
                <div className="font-medium">{initialContent}</div>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div className="relative">
                {showDropDown ? (
                    <div>
                        <div className="fixed inset-0 w-full h-full" onClick={() => setShowDropDown(!showDropDown)} />
                        <div className="inset-0">
                            <div className="absolute bg-app-black rounded-2xl rounded-tl-none top-1 flex flex-col rounded-b-md gap-2 py-3 w-max z-10">
                                {contentList?.map((content, idx) => {
                                    return (
                                        <div key={idx} className="flex gap-2 px-3 py-1 hover:text-app-blue">
                                            <Form.Item valuePropName="checked" noStyle>
                                                <div className={"customCheckbox menuCheckboxes inline-flex"}>
                                                    <Checkbox
                                                        className="text-white leading-normal [&>span]:hover:text-app-blue"
                                                        name={content.name}
                                                    >
                                                        {content.title}
                                                    </Checkbox>
                                                </div>
                                            </Form.Item>
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
