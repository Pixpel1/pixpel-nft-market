import React, { useState } from "react";
import notification from "@public/assets/images/notification.svg";
import notificationBlue from "@public/assets/images/notification-blue.svg";
import { useAppContext } from "@nft/contexts/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { Tooltip } from "antd";

const Notification = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useRouter();
    const context = useAppContext();

    return (
        <div className="cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
            <div className="flex items-center justify-between">
                <Tooltip placement="bottom" title={"Notification"}>
                    <Image src={context.developerHeader === 5 ? notificationBlue : notification} alt="notification" />
                </Tooltip>
            </div>
            <div className="relative">
                {showDropDown ? (
                    <div className="absolute -left-80 inset-7 z-10">
                        <div className="fixed inset-0 w-full h-full" onClick={() => setShowDropDown(!showDropDown)} />
                        <div className="flex flex-col rounded-b-md min-w-[400px] bg-app-black py-3 px-4">
                            <div className="relative flex bg-app-black-button rounded justify-between items-center px-5 py-3">
                                <div className="flex items-center gap-2">
                                    <p className="text-lg font-semibold">108</p>
                                    <p className="text-app-black-duration text-sm font-medium w-max">
                                        pending notifications
                                    </p>
                                </div>
                                <p
                                    className="text-app-blue text-sm font-medium"
                                    onClick={() => {
                                        navigate.push("/notification");
                                        context.setDeveloperHeader?.(5);
                                    }}
                                >
                                    View all
                                </p>
                            </div>
                            <Row />
                            <Row />
                            <Row />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Notification;

const Row = () => {
    const navigate = useRouter();
    const context = useAppContext();
    return (
        <div className="relative flex items-start gap-2 px-3 py-4 last-of-type:border-0 border-b-2 border-app-black">
            <div
                onClick={() => {
                    navigate.push("/notification");
                    context.setDeveloperHeader?.(5);
                }}
            >
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#717A8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {" "}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            </div>
            <div className="flex flex-col gap-1">
                <p className="w-max text-base font-medium max-md:text-sm">Withdraw Successful</p>
                <p className="text-app-black-duration font-medium text-xs">
                    You have successfully withdraw 0.24495996 BNB at 2022-04-23 15:12:43(UTC). If this activity is now
                    your own, please contact us immediately
                </p>
            </div>
        </div>
    );
};
