import React, { useState } from "react";
import HelpCenterButton from "../../components/Button/HelpCenterButton";
import MailImage from "@public/assets/images/Mail.svg";
import HelpAvatar from "../../components/Avatar/HelpAvatar";
import Mail from "../../components/Message/Mail";
import Image from "next/image";
import { useRouter } from "next/router";

const HelpCenter = () => {
    const [showMessageBox, setShowMessageBox] = useState(false);
    const navigate = useRouter();
    const handleClickArrow = () => {
        navigate.back();
    };
    return (
        <>
            <div className="flex pt-11 flex-col xl:px-32 lg:px-28 md:px-20 sm:px-12 px-4 pb-20">
                <div className="flex justify-between mb-10 sm:flex-row gap-6 flex-col">
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center justify-center w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
                            onClick={handleClickArrow}
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="11" y2="18" />
                                <line x1="5" y1="12" x2="11" y2="6" />
                            </svg>
                        </div>
                        <p className="text-4xl font-semibold">Help Center</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-lg font-medium">Security Service:</p>
                        <div className="bg-app-black h-14 gap-2.5 px-4 items-center flex rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                    stroke="#717A8B"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.9984 20.9984L16.6484 16.6484"
                                    stroke="#717A8B"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <input placeholder="Search" className="bg-transparent outline-none " />
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:flex-row gap-4">
                    <HelpAvatar title="Reset Password" />
                    <HelpAvatar title="Change Phone" />
                    <HelpAvatar title="Change Email" />
                    <HelpAvatar title="Reset authenticator" />
                    <HelpAvatar title="Crypto deposit issues" />
                </div>
                <div className="my-10 text-3xl">FAQ</div>
                <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <HelpCenterButton title="NEWBIE" />
                    <HelpCenterButton title="TUTORIAL" />
                    <HelpCenterButton title="SECURITY" />
                    <HelpCenterButton title="INSURANCE" />
                    <HelpCenterButton title="DEVELOPER" />
                    <HelpCenterButton title="PLAYER" />
                    <HelpCenterButton title="API" />
                    <HelpCenterButton title="NFT" />
                </div>
                <div className="flex flex-col my-5">
                    <div className="relative flex justify-end">
                        <Mail visibility={showMessageBox} />
                        <div
                            className={
                                "flex h-20 w-20 rounded-br-xl rounded-bl-xl bg-app-black justify-center items-center hover:bg-app-blue cursor-pointer" +
                                (showMessageBox ? "" : " rounded-tr-xl rounded-tl-xl")
                            }
                            onClick={() => setShowMessageBox(!showMessageBox)}
                        >
                            <Image src={MailImage} alt="avatar"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HelpCenter;
