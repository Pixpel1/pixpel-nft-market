import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Profile = () => {
    const navigate = useRouter();
    return (
        <div className="flex flex-col -ml-96 mt-14">
            <div className="flex justify-center text-2xl mb-10 font-semibold">Verification</div>
            <div className="flex max-sm:flex-col max-xl1:flex-wrap max-xl1:justify-center justify-between gap-5">
                <div className="flex flex-col bg-app-black rounded-lg px-5 py-8 w-1/3 h-max">
                    <div className="flex justify-center mb-14">
                        <p className="px-[20px] py-[7px] w-max bg-app-black-duration rounded-lg font-bold text-xl underline">
                            REGULAR
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 mb-24">
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            NFT Market Place
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            100% Insurance
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Business Wallet
                        </p>
                    </div>
                </div>
                <div className="flex flex-col bg-app-black rounded-lg px-5 py-8 w-1/3 h-max">
                    <div className="flex justify-center mb-14">
                        <Link href="/developer/verification">
                            <p className="px-[24px] py-[7px] w-max bg-app-blue rounded-lg font-bold text-xl underline">
                                MEDIUM
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 mb-14">
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Game Market Place
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            NFT Market Place
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Insurance
                        </p>
                    </div>
                    <div className="flex justify-center ">
                        <button
                            onClick={() => navigate.push("/developer/verification")}
                            className="px-[34px] py-[7px] w-max bg-app-blue rounded-lg font-semibold text-lg"
                        >
                            APPLY
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-app-black rounded-lg px-5 py-8 w-1/3 h-max">
                    <div className="flex justify-center mb-14">
                        <Link href="/developer/verification">
                            <p className="px-[40px] py-[7px] w-max bg-app-green rounded-lg font-bold text-xl underline">
                                SAFE
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 mb-14">
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Game Market Place
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            NFT Market Place
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Insurance
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Staking
                        </p>
                        <p className="bg-app-black-button text-[18px] font-medium py-5 px-2 w-full rounded-lg flex justify-center">
                            Token Room
                        </p>
                    </div>
                    <div className="flex justify-center ">
                        <button
                            onClick={() =>
                                navigate.push("/developer/verification?page=safe", "/developer/verification")
                            }
                            className="px-[34px] py-[6px] text-[18px] w-max bg-app-green rounded-lg font-semibold"
                        >
                            APPLY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
