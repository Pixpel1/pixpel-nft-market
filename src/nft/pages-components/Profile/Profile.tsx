import React, { ReactNode, useState } from "react";
import ProfileButton from "../../components/Button/ProfileButton";
import ProfileAvatar from "../../components/Profile/ProfileAvatar";
import ProfilePlayerStat from "../../components/Profile/ProfilePlayerStat";
import ProfileApiStat from "../../components/Profile/ProfileApi";
import ProfileSecurity from "../../components/Profile/ProfileSecurity";
import ProfileSettings from "../../components/Profile/ProfileSettings";
import { menuList } from "./datalist";
import { useRouter } from "next/router";

const Profile = () => {
    const [profileButtonIndex, setProfileButtonIndex] = useState(0);
    const [showingComponent, setShowingComponent] = useState<ReactNode>(<ProfilePlayerStat />);
    let temp: ReactNode;
    const handleClick = (idx: number) => () => {
        setProfileButtonIndex(idx);
        switch (idx) {
            case 0:
                temp = <ProfilePlayerStat />;
                break;
            case 1:
                temp = <ProfileSettings />;
                break;
            case 2:
                temp = <ProfileSecurity />;
                break;
            case 3:
                temp = <ProfileApiStat />;
                break;
            default:
                break;
        }
        setShowingComponent(temp);
    };
    const navigate = useRouter();
    const handleClickArrow = () => {
        navigate.back();
    };

    return (
        <>
            <div
                className="flex items-center justify-center cursor-pointer -mr-[20px] w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
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
            <div className="flex lg:flex-row flex-col xl:px-14 md:px-6 px-2 bg-app-black-modal pt-11 w-full min-h-screen gap-8 pb-[213px]">
                <div className="flex flex-col lg:w-1/5 w-full bg-app-black rounded-xl h-max px-4 py-8 gap-2 xl:text-base">
                    {menuList.map((menu, idx) => {
                        return (
                            <ProfileButton
                                key={idx}
                                title={menu.title}
                                selected={profileButtonIndex === idx}
                                handleClick={handleClick(idx)}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col w-4/5 max-lg:w-full">
                    <ProfileAvatar />
                    {showingComponent}
                </div>
            </div>
        </>
    );
};
export default Profile;
