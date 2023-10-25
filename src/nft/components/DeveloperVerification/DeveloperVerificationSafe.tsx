import { FaAngleDown } from "react-icons/fa";

const DeveloperVerificationSafe = () => {
    return (
        <>
            <div className="px-[150px] max-sm:px-6 max-lg:px-8">
                <div className="flex flex-col gap-y-[31px]">
                    <div className="flex max-lg:flex-col gap-y-3 gap-x-[64px] w-full">
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[50px] py-[30px] gap-x-2 justify-between w-full">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Incorporated</p>
                            <FaAngleDown size={25} />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[50px] py-[30px] gap-x-2 w-full">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Country:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                    </div>
                    <div className="flex max-lg:flex-col gap-y-3 gap-x-[64px] w-full">
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[50px] py-[30px] gap-x-2 justify-between w-full">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Share Holders:</p>
                            <div className="flex items-center gap-x-[54px]">
                                <p className="text-app-blue text-[20px]">5</p>
                                <FaAngleDown size={25} />
                            </div>
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[50px] py-[30px] gap-x-2 w-full">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Company Name:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[18px] mt-[60px]">
                    <p className="text-[30px] max-sm:text-[20px] font-semibold text-[#FFFFFF] ">Name & Participation</p>
                    <div className="flex flex-col w-full gap-y-[18px]">
                        <div className="flex justify-between gap-x-[64px] max-sm:flex-col">
                            <div className="w-full">
                                <p className="text-[24px] max-sm:text-[18px] text-[#FFFFFF] ">Name:</p>
                                <input className="bg-app-black-button w-full px-[50px] py-[30px] rounded-[10px]" />
                            </div>
                            <div className="w-full">
                                <p className="text-[24px] max-sm:text-[18px] text-[#FFFFFF] ">Participation:</p>
                                <input className="bg-app-black-button w-full px-[50px] py-[30px] rounded-[10px]" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-[64px] max-sm:flex-col">
                            <div className="w-full">
                                <p className="text-[24px] max-sm:text-[18px] text-[#FFFFFF] ">Name:</p>
                                <input className="bg-app-black-button w-full px-[50px] py-[30px] rounded-[10px]" />
                            </div>
                            <div className="w-full">
                                <p className="text-[24px] max-sm:text-[18px] text-[#FFFFFF] ">Participation:</p>
                                <input className="bg-app-black-button w-full px-[50px] py-[30px] rounded-[10px]" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-[64px] max-sm:flex-col">
                            <div className="w-full">
                                <p className="text-[24px] max-sm:text-[18px] text-[#FFFFFF] ">Name:</p>
                                <input className="bg-app-black-button w-full px-[50px] py-[30px] rounded-[10px]" />
                            </div>
                            <div className="w-full">
                                <p className="text-[24px] max-sm:text-[18px] text-[#FFFFFF] ">Participation:</p>
                                <input className="bg-app-black-button w-full px-[50px] py-[30px] rounded-[10px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[74px] px-[77px] max-sm:px-6 max-lg:px-8 max-sm:mt-[50px]">
                <div className="flex max-sm:flex-col justify-between items-center">
                    <p className="text-[30px] max-sm:text-[20px] font-semibold text-[#FFFFFF] ">Game Token Wallet</p>
                    <div className="flex justify-between items-center gap-x-[50px] bg-app-black-button rounded-[5px] px-[20px] py-[16px]">
                        <p>Wallets:</p>
                        <div className="flex items-center gap-x-[28px]">
                            <p className="text-app-blue">5</p>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[18px] mt-[53px]">
                    <div className="grid gap-x-[53px] gap-y-4 w-full justify-between max-md:grid-cols-1 md:grid-cols-2 3xl1:grid-cols-4">
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px] whitespace-nowrap">Wallet ID:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px]">Minted:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px]">Burned:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px]">Spent:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                    </div>
                    <div className="grid gap-x-[53px] gap-y-4 w-full justify-between max-md:grid-cols-1 md:grid-cols-2 3xl1:grid-cols-4">
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px] ">
                            <p className="text-[24px] max-sm:text-[18px] font-medium whitespace-nowrap">Wallet ID:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px] ">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Minted:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px] ">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Burned:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px] ">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Spent:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                    </div>
                    <div className="grid gap-x-[53px] gap-y-4 w-full justify-between max-md:grid-cols-1 md:grid-cols-2 3xl1:grid-cols-4">
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px] font-medium whitespace-nowrap">Wallet ID:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Minted:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Burned:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                        <div className="flex items-center rounded-[10px] bg-app-black-button px-[34px] py-[30px] gap-x-2 min-w-[375px]">
                            <p className="text-[24px] max-sm:text-[18px] font-medium">Spent:</p>
                            <input className="bg-transparent outline-none" />
                        </div>
                    </div>
                </div>
                <div className="mt-[77px] flex justify-center">
                    <button className="flex bg-[#0095C8] rounded-[5px] px-[80px] py-[20px] items-center gap-x-[5px] text-[#FFFFFF] text-[18px]">
                        SUBMIT
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeveloperVerificationSafe;
