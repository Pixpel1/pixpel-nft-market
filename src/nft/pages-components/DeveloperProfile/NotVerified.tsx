import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import DropDownButton from "../../components/DropDown/DropDownButton";

interface yesno {
    id: number;
    title: string;
}
const yesno: yesno[] = [
    {
        id: 1,
        title: "Yes",
    },
    {
        id: 2,
        title: "No",
    },
];

const NotVerified = () => {
    const navigate = useRouter();
    const handleClickArrow = () => {
        navigate.back();
    };
    return (
        <div className="flex pt-11 flex-col px-56 pb-56">
            <div className="flex flex-row items-center justify-between w-full mb-5">
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
                <div className="text-2xl  2xs:text-3xl 1xs:text-[40px] font-semibold">Profile</div>
                <div className="w-12 h-12"></div>
            </div>
            <div className="flex gap-10 bg-app-black px-32 py-14 mb-20 mt-[40px]">
                <div className="flex flex-col gap-1 items-center">
                    <div className="border-app-black border-8 w-44 h-44 flex-none rounded-full flex justify-center items-center text-2xl font-medium">
                        LOGO
                    </div>
                    <div className="text-gray-500 text-xl">Not Verified</div>
                </div>

                <div className="flex gap-24 justify-between w-full">
                    <div className="flex flex-col gap-3 w-1/2">
                        <div className="flex flex-col gap-1">
                            Name:
                            <div className="bg-app-black-button h-16 rounded-lg"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            Email:
                            <div className="bg-app-black-button h-16 rounded-lg"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-1/2">
                        <div className="flex flex-col gap-1">
                            Phone Number:
                            <div className="bg-app-black-button h-16 rounded-lg"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            Address:
                            <div className="bg-app-black-button h-16 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-3xl font-medium mb-8">Verification Form</div>
            <div className="flex justify-between gap-16 w-full">
                <div className="flex flex-col gap-8 w-1/2">
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Date of Launch:</div>
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Country:</div>
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Share Holders:</div>
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Share Holders:</div>
                </div>
                <div className="flex flex-col gap-8 w-1/2">
                    <div className=" h-21 items-center pl-12 bg-app-black rounded-lg text-lg justify-between flex gap-5">
                        Will be Launched in PixPel:
                        <div className="w-1/6">
                            <DropDownButton
                                initialContent=""
                                contentList={yesno}
                                backgroundColor="bg-app-black"
                                fontSize={""}
                                textColor={""}
                            />
                        </div>
                    </div>
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Legal Name:</div>
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Per Percentage:</div>
                    <div className="py-7 px-12 bg-app-black rounded-lg text-lg">Percentage:</div>
                </div>
            </div>
            <div className="mt-[31px]">
                <button className="flex bg-[#2EBD85] rounded-[10px] px-[30px] py-[15px] items-center gap-x-[5px] text-[#FFFFFF] text-[18px]">
                    <AiOutlinePlus /> More
                </button>
            </div>
            <div className="mt-[49px] flex justify-center">
                <button
                    onClick={() => navigate.push("/developer/profile")}
                    className="flex bg-[#0095C8] rounded-[5px] px-[80px] py-[20px] items-center gap-x-[5px] text-[#FFFFFF] text-[18px]"
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default NotVerified;
