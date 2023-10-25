import notification from "@launchpad/assets/icons/notification.svg";
import NotificationDot from "@launchpad/assets/icons/notification_icon.png";
import { setReadStatus } from "@launchpad/features/notificationSlice";
import { useAppSelector } from "@launchpad/hooks";
import { useAppContext } from "@nft/contexts/AppContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosAlert } from "react-icons/io";
import { useDispatch } from "react-redux";

const Notification = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const notifications = useAppSelector((state) => state.notification);

    const navigate = useRouter();
    const context = useAppContext();
    const dispatch = useDispatch();
    if (notifications)
        return (
            <div className="cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
                {notifications.length > 0 ? (
                    <>
                        {notifications.map((item, i: number) => {
                            return item.readStatus ? (
                                <>
                                    <div key={i} className="flex items-center justify-between">
                                        <Image src={notification} alt="notification" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div key={i} className="flex flex-col relative -top-1">
                                        <div className="flex">
                                            <Image src={NotificationDot} alt="notificationDot" />
                                        </div>
                                        <div className="flex">
                                            <Image src={notification} alt="notification" />
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-between">
                            <Image src={notification} alt="notification" />
                        </div>
                    </>
                )}

                <div className="relative">
                    {showDropDown ? (
                        <div className="absolute -left-80 inset-7 z-50">
                            <div
                                className="fixed inset-0 w-full h-full"
                                onClick={() => setShowDropDown(!showDropDown)}
                            />
                            <div className="flex flex-col relative rounded-b-md bg-app-black py-3 px-4 notificationScroll">
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
                                {notifications.map((notification, i: number) => {
                                    return (
                                        <div
                                            key={i}
                                            className="relative flex items-start gap-2 px-3 py-4"
                                            onClick={() => {
                                                dispatch(setReadStatus(notification));
                                            }}
                                        >
                                            <div>{<IoIosAlert />}</div>
                                            <div className="flex flex-col gap-1">
                                                <div className="w-max text-sm uppercase">{notification.type}</div>
                                                <div className="text-gray-500 text-xs">{notification.message}</div>
                                            </div>
                                        </div>
                                    );
                                })}
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
