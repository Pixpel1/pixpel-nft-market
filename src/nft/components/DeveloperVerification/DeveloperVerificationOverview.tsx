import { useRouter } from "next/router";
import { useState } from "react";
import DeveloperVerificationMedium from "./DeveloperVerificationMedium";
import DeveloperVerificationSafe from "./DeveloperVerificationSafe";

const DeveloperVerificationOverview = () => {
    const router = useRouter();
    const [profileButtonIndex, setProfileButtonIndex] = useState(router.query.page || "medium");

    const navigate = useRouter();
    const handleClickArrow = () => {
        navigate.back();
    };

    return (
        <>
            <div className="flex pt-11 flex-row items-center justify-between w-full mb-5 xl:px-14 lg:px-6 px-2">
                <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue self-start"
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
                <div>
                    <div className="text-2xl 2xs:text-3xl 1xs:text-[40px] font-semibold">Verification</div>
                    <div className="flex gap-x-[20px] mt-[20px]">
                        <button
                            className={`${
                                profileButtonIndex === "medium" ? "bg-[#0095C8]" : "bg-[#29313C]"
                            } px-[30px] py-[15px] items-center rounded-[5px] font-semibold text-[18px]`}
                            onClick={() => setProfileButtonIndex("medium")}
                        >
                            MEDIUM
                        </button>
                        <button
                            className={`${
                                profileButtonIndex === "safe" ? "bg-[#0095C8]" : "bg-[#29313C]"
                            } px-[30px] py-[15px] items-center rounded-[5px] font-semibold text-[18px]`}
                            onClick={() => setProfileButtonIndex("safe")}
                        >
                            SAFE
                        </button>
                    </div>
                </div>
                <div className="">
                    <p className="text-[24px] text-[#0095C8] font-semibold">BENEFITS</p>
                    <div className="bg-[#29313C] rounded-[10px] py-[23px] px-[35px] mt-[5px]">
                        <li className="">Game Market place</li>
                        <li>NFT Market place</li>
                        <li>70% Insurance</li>
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:px-14 md:px-6 px-2 w-full min-h-screen gap-8 pb-40">
                <div>
                    {profileButtonIndex === "medium" ? (
                        <DeveloperVerificationMedium />
                    ) : profileButtonIndex === "safe" ? (
                        <DeveloperVerificationSafe />
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default DeveloperVerificationOverview;
