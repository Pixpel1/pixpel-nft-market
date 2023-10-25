import React from "react";
import AddRocket from "@launchpad/assets/developer/icons/create_rocket_plus.png";
import AddRockethover from "@launchpad/assets/developer/icons/create_rocket_plus_hover.png";
import Image from "next/image";
import { Button } from "antd";

const dummyDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet enim orci. Sed placerat
                        varius lorem ultrices tincidunt. Ut eget cursus enim. Ut faucibus, orci et fringilla finibus,
                        lectus augue tempor felis, ut fermentum nulla nunc ut ex. Fusce tortor magna, convallis quis
                        diam eu, tempor faucibus ligula. Praesent nec elit tellus. Nam congue auctor ullamcorper. Donec
                        in felis auctor nisi varius hendrerit in a nunc. Donec dolor leo, fermentum quis elit sed,
                        vehicula accumsan nisi. Curabitur eget sem at est rutrum cursus. Suspendisse dictum tempor
                        tincidunt. Suspendisse at felis velit. Nulla sodales semper justo vel tristique. Sed iaculis
                        faucibus nibh, sit amet auctor est.`;

function BioSection({
    edit,
    left,
    banner,
    openModal,
    title,
    desc,
    onChange,
}: {
    edit?: boolean;
    left?: boolean;
    banner?: string;
    openModal: (id: number, type: string) => void;
    title?: string;
    desc?: string;
    onChange: (val: string) => void;
}) {
    return (
        <div
            className={
                "min-h-[946px] h-full pt-16 pb-20 px-6 lg:px-32 gap-8 items-center flex justify-between " +
                (left ? "xl:flex-row-reverse flex-col-reverse" : "xl:flex-row flex-col bg-app-black-button/40")
            }
        >
            <div className="flex flex-col justify-center gap-12">
                <div className="bg-app-black-button w-full lg:max-h-[452px] min-w-[300px] lg:min-w-[723px] px-6 py-11 h-full flex justify-center gap-10 flex-col">
                    {edit ? (
                        <input
                            onChange={(e) => onChange(e.target.value)}
                            value={title}
                            className="text-xl lg:text-4xl placeholder:text-white bg-transparent outline-none font-bold"
                            placeholder="ADD TITLE"
                        />
                    ) : (
                        <p className="text-xl lg:text-4xl font-bold">{title || "ADD TITLE"}</p>
                    )}
                    <p className="text-base lg:text-lg font-medium max-w-[700px] overflow-y-scroll max-h-[275px] scroll text-app-black-duration">
                        {desc || dummyDesc}
                    </p>
                </div>
                {edit && (
                    <Button
                        onClick={() => openModal(1, left ? "bottom" : "top")}
                        className="bg-app-blue hover:bg-app-blue-hover border-none w-fit px-[100px] py-6 flex justify-center items-center"
                    >
                        Change Text
                    </Button>
                )}
            </div>
            <div
                className="w-full !bg-cover max-w-[700px] min-h-[800px] h-full flex justify-center items-center"
                style={{
                    background: banner ? `url(${banner}) no-repeat` : "#37404C",
                }}
            >
                {edit && (
                    <div className="group flex justify-center cursor-pointer items-center gap-3.5 flex-col">
                        <Image
                            src={AddRocket}
                            className="group-hover:hidden block"
                            onClick={() => openModal(0, left ? "banner3" : "banner2")}
                            alt="add_rocket"
                        />
                        <Image
                            src={AddRockethover}
                            className="group-hover:block hidden"
                            onClick={() => openModal(0, left ? "banner3" : "banner2")}
                            alt="add_rocket"
                        />
                        <p className="uppercase text-2xl group-hover:text-app-blue font-semibold">
                            {banner ? "Change Image" : "Add Image"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BioSection;
