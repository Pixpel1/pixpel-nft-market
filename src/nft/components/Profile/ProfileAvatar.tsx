import React from "react";
import Avatar from "@public/assets/images/devpic.jpg";
import Image from "next/image";
import Logout from "../Button/Logout";
import { useRouter } from "next/router";

const ProfileAvatar = () => {
    const router = useRouter();
    return (
        <div className="flex bg-app-black rounded-lg h-auto w-full xl:px-10 px-4 sm:items-center sm:justify-between py-6 sm:flex-row flex-col gap-5">
            <div className="flex gap-4 items-center">
                <Image src={Avatar} width={80} height={80} className="flex rounded-full" alt="avatar" />
                <div className="flex flex-col">
                    <p className="font-medium md:text-lg text-xl">Juan Vivas</p>
                    <p className="font-normal sm:text-base text-sm text-app-black-duration">
                        Last log-in 2022-04-18 14:12
                    </p>
                </div>
            </div>
            <div onClick={() => router.push("/")}>
                <Logout />
            </div>
        </div>
    );
};

export default ProfileAvatar;
