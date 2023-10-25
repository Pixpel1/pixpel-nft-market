import React from "react";
import AddRocket from "@launchpad/assets/developer/icons/create_rocket_plus.png";
import AddRockethover from "@launchpad/assets/developer/icons/create_rocket_plus_hover.png";
import Image from "next/image";

function ImageSection({
    edit,
    banner,
    openModal,
}: {
    edit?: boolean;
    banner?: string;
    openModal: (id: number, type: string) => void;
}) {
    return (
        <div
            className="w-full relative !bg-cover min-h-[650px] flex justify-center items-center h-full flex-col"
            style={{
                background: banner ? `url(${banner}) no-repeat` : "#37404C",
            }}
        >
            {edit && (
                <div className="group cursor-pointer flex justify-center items-center flex-col gap-3.5">
                    <Image
                        src={AddRocket}
                        className="group-hover:hidden block"
                        onClick={() => openModal(0, "banner")}
                        alt="add_rocket"
                    />
                    <Image
                        src={AddRockethover}
                        className="hidden group-hover:block"
                        onClick={() => openModal(0, "banner")}
                        alt="add_rocket"
                    />
                    <p className="uppercase group-hover:text-app-blue text-2xl font-semibold">
                        {banner ? "Change Image" : "Add Image"}
                    </p>
                </div>
            )}
        </div>
    );
}

export default ImageSection;
