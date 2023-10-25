import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface CheckboxDropDownProps {
    initialContent: string;
    contentList: {
        title: string;
        name?: string;
        icon?: string | StaticImageData;
    }[];
    fontSize: string;
    textColor: string;
    backgroundColor: string;
}

const DropDownRoundedIcon = ({
    initialContent,
    contentList,
    fontSize,
    textColor,
    backgroundColor,
}: CheckboxDropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedContent, setSelectedContent] = useState<{
        contentTitle: string;
        contentIcon?: string | StaticImageData;
    }>({
        contentTitle: initialContent,
        contentIcon: "",
    });
    const [bgColor, setBgColor] = useState("bg-app-black");
    const [font, setFont] = useState("");
    backgroundColor = backgroundColor || "bg-app-black";
    useEffect(() => {
        setFont(fontSize);
    }, [fontSize]);

    useEffect(() => {
        setBgColor(backgroundColor || "");
    }, [backgroundColor]);

    const handleDropDown = () => {
        if (showDropDown) {
            setShowDropDown(false);
        } else {
            setShowDropDown(true);
        }
    };
    const selectHandleClick = (contents: { title: string; icon?: string | StaticImageData }) => {
        if (contents.icon) {
            setSelectedContent((prev) => ({
                ...prev,
                contentTitle: contents.title,
                contentIcon: contents.icon,
            }));
        }
        // setSelectedContent(contentTitle);
        setShowDropDown(false);
    };

    return (
        <>
            <div
                className={"cursor-pointer " + bgColor + (showDropDown ? " rounded-xl rounded-b-none" : " rounded-xl")}
                onClick={handleDropDown}
            >
                <div className="flex px-6 rounded-xl gap-3 items-center justify-between py-2">
                    <div className={font + " font-medium " + textColor + "flex justify-around items-center"}>
                        {selectedContent.contentIcon ? (
                            <>
                                <Image src={`${selectedContent.contentIcon}`} alt="" className="inline-flex mr-3" />
                            </>
                        ) : (
                            ""
                        )}
                        {selectedContent.contentTitle}
                    </div>
                    <div className="flex">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                            <path
                                d="M1 1.75L5.5 6.25L10 1.75"
                                stroke="#717A8B"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
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
                                            className="relative flex justify-items-stretch px-6 py-2 hover:bg-app-blue  border-b-2 border-app-gray last-of-type:border-b-0 first-of-type:border-t-2"
                                            onClick={() =>
                                                selectHandleClick(content as CheckboxDropDownProps["contentList"][0])
                                            }
                                        >
                                            {content.icon && <Image className="h-6 mr-3" src={content.icon} alt="" />}
                                            <div className={"text-base font-medium hover:text-app-blue" + textColor}>
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

DropDownRoundedIcon.defaultProps = {
    initialContent: {
        contentTitle: "",
        contentIcon: "",
    },
};
export default DropDownRoundedIcon;
