import React from "react";
import profileImage from "@public/assets/images/devpic.jpg";
import OK from "@public/assets/images/OK-gray.svg";
import Image from "next/image";
import Logout from "../Button/Logout";
import { useRouter } from "next/router";

const DeveloperProfileOverview = () => {
    const router = useRouter();
    return (
        <div className="flex max-sm:flex-col bg-app-black rounded-lg px-8 py-5 w-full mt-[20px]">
            <Image src={profileImage} alt="Profile" className="w-28 h-28 rounded-full mr-6" />
            <div className="flex max-sm:flex-col mt-10 w-full gap-20">
                <div className="flex flex-col gap-3 w-4/5 max-xl1:w-full">
                    <p className="flex gap-2 font-medium text-lg">
                        Verified Regular
                        <Image src={OK} alt="alt" />
                    </p>
                    <div className="flex max-xl1:flex-col gap-12 w-full">
                        <p className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Name:
                            <input className="bg-app-black-button rounded-lg px-2 py-4"></input>
                        </p>
                        <p className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Phone Number:
                            <input className="bg-app-black-button rounded-lg px-2 py-4"></input>
                        </p>
                    </div>
                    <div className="flex max-xl1:flex-col gap-12">
                        <p className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Email:
                            <input className="bg-app-black-button rounded-lg px-2 py-4"></input>
                        </p>
                        <p className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Address:
                            <input className="bg-app-black-button rounded-lg px-2 py-4"></input>
                        </p>
                    </div>
                    <p className="text-gray-500 text-[16px]">Last log-in 2022-04-18 14:12</p>
                </div>
                <div onClick={() => router.push("/")}>
                    <Logout />
                </div>
            </div>
        </div>
    );
};

export default DeveloperProfileOverview;
