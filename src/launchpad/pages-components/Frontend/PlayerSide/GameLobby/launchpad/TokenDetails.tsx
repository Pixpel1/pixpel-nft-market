import Image from "next/image";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import InvestorChart from "@launchpad/assets/images/investor_chart.png";

const TokenDetails = () => {
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-col mb-16">
                <h3 className="text-[40px] font-bold">Token Details</h3>
                <div className="flex items-center">
                    <h3 className="text-[40px] font-bold">$2.3435</h3>
                    <div className="flex items-center justify-center bg-app-green hover:bg-app-green-hover px-2 py-1 rounded-md mx-2">
                        <p className="text-lg font-semibold">5.7%</p>
                        <FaArrowUp />
                    </div>
                    <p className="text-h5 1xs:text-h3 font-medium flex">Rank #1234</p>
                </div>
            </div>
            <div className="grid grid-cols-6 place-content-center 2xl:grid-cols-7 gap-3 gap-y-7 2xl:gap-5">
                <div className="col-span-3 2xl:col-span-2">
                    <Image src={InvestorChart} alt="InvestorChart" />
                </div>
                <div className="max-2xl:flex justify-center items-center my-auto col-span-3 2xl:col-span-1">
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-angel border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Angel Investors</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-team border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Team</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-advisor border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Advisors</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-funding border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Funding Rounds</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-ico border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">ICO</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-yield border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Yield Supply</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-liquidity border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Liquidity Supply</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-marketing border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Marketing</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-staking border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Staking</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-rewards border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">Rewards</p>
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-investor-newpr border border-white rounded-full mr-1"></span>
                            <p className="text-lg font-medium">New Projects</p>
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 2md:col-span-3 2xl:col-span-2">
                    <div className="flex flex-col gap-4">
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>SoftCap:</p>
                            <p className="text-lg font-semibold">$31 213 241.942</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Minimum Buy:</p>
                            <p className="text-lg font-semibold">$213 241.942</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Start Date:</p>
                            <p className="text-lg font-semibold">$123 253.214</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>First Fund Release For Project (%):</p>
                            <p className="text-lg font-semibold">100%</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Fund Release Each Cycle (percent):</p>
                            <p className="text-lg font-semibold">100%</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Liquidity:</p>
                            <p className="text-lg font-semibold">100%</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 2md:col-span-3 2xl:col-span-2">
                    <div className="flex flex-col gap-4">
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>HardCap:</p>
                            <p className="text-lg font-semibold">$21 241.942</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Maximum Buy:</p>
                            <p className="text-lg font-semibold">$21 241.942</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>End Date</p>
                            <p className="text-lg font-semibold">$150</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Fund Vesting Period Each Cycle (days)</p>
                            <p className="text-lg font-semibold">100 Days</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Lock Up Time</p>
                            <p className="text-lg font-semibold">100 Days</p>
                        </div>
                        <div className="bg-app-black-button rounded-xl flex justify-between px-6 sm:px-8 py-5">
                            <p>Circulation supply:</p>
                            <p className="text-lg font-semibold">$123 253.214</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenDetails;
