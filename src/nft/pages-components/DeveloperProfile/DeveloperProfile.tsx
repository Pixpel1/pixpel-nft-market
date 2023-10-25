import React, { ReactNode } from "react";
import { useState } from "react";
import ProfileButton from "../../components/Button/ProfileButton";
import ProfileSecurity from "../../components/Profile/ProfileSecurity";
import ProfileSettings from "../../components/Profile/ProfileSettings";
import DeveloperProfileOverview from "../../components/DeveloperProfile/DeveloperProfileOverview";
import Profile from "./Profile";
import { menuList } from "./datalist";
import { useRouter } from "next/router";

const DeveloperProfile = () => {
    const [profileButtonIndex, setProfileButtonIndex] = useState(0);
    const [showingComponent, setShowingComponent] = useState<ReactNode>(<Profile />);
    let temp: ReactNode;
    const handleClick = (idx: number) => () => {
        setProfileButtonIndex(idx);
        switch (idx) {
            case 0:
                temp = <Profile />;
                break;
            case 1:
                temp = <ProfileSettings />;
                break;
            case 2:
                temp = <ProfileSecurity />;
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
            <div className="flex pt-11 flex-row items-center justify-between w-full mb-5 xl:px-14 md:px-6 px-2">
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
                <div className="text-2xl  2xs:text-3xl 1xs:text-[40px] font-semibold mb-[15px]">Profile</div>
                <div className="w-12 h-12"></div>
            </div>
            <div className="flex lg:flex-row flex-col xl:px-14 lg:px-6 px-2 w-full min-h-screen gap-8 pb-40">
                <div className="flex flex-col lg:w-1/5 w-full bg-app-black rounded-xl h-max px-4 py-8 gap-2 xl:text-base mt-[20px]">
                    {menuList.map((menu, idx) => {
                        return (
                            <ProfileButton
                                img={menu.img as string}
                                key={idx}
                                title={menu.title}
                                selectedImg={menu.selectedImg}
                                selected={profileButtonIndex === idx}
                                handleClick={handleClick(idx)}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col w-4/5 max-lg:w-full">
                    <DeveloperProfileOverview />
                    {showingComponent}
                </div>
            </div>
        </>
    );
};
export default DeveloperProfile;
