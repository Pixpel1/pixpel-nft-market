import React from "react";
import { Progress, Statistic } from "antd";
import { ProgressCircle, LobbySection } from "./styled/home";
import ConcordiumIcon from "@launchpad/assets/icons/concordium_icon.png";
import WishListIcon from "@launchpad/assets/icons/wishlist_icon.png";
import PixpelCardLogo from "@launchpad/assets/logo/card_logo_single.png";
import Image from "next/image";
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const MiniCard = () => {
    const circleDynamicValue = 50;
    return (
        <div className="border-2 border-app-blue p-3 rounded-md bg-app-black-button">
            <div className="flex justify-between items-center">
                <button className="bg-app-green-live  px-2 py-1 -ml-1 rounded-sm flex text-app-black items-center text-base font-medium">
                    <p className="w-2 h-2 inline-block bg-app-green-hover rounded-full mr-2"></p>
                    Live
                </button>
                <a href="#">
                    <Image src={ConcordiumIcon} alt="concordium" />
                </a>
            </div>
            <div className="flex flex-col items-center  mb-2 -mt-1">
                <h2 className="text-lg font-semibold -mb-1 uppercase">Pixpel</h2>
                <p className="text-sm font-medium uppercase border-t border-app-gray">1 ETH = 5,000 CCD</p>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-[12px] font-medium uppercase relative bottom-9">
                    {`0`} <br />
                    CCD
                </p>
                <LobbySection className="gameLobby flex flex-col justify-center items-center">
                    <Image src={PixpelCardLogo} alt="gameLobby" className="projectLogo w-16" />
                    <ProgressCircle className="progress-circle relative miniLogo">
                        <Progress
                            style={{
                                position: "absolute",
                                top: "-35px",
                                bottom: 36,
                                left: 4,
                                transform: "rotateY(180deg)",
                            }}
                            size={68}
                            gapPosition="right"
                            strokeLinecap="butt"
                            type="dashboard"
                            percent={circleDynamicValue}
                            trailColor="#717A8B"
                            strokeColor="#2EBD85"
                            strokeWidth={10}
                            gapDegree={0}
                            format={() => `${circleDynamicValue}%`}
                        />
                    </ProgressCircle>
                </LobbySection>
                <p className="text-[12px] font-medium uppercase relative bottom-9">
                    {`1`} MM <br /> CCD
                </p>
            </div>
            <div className="flex relative -top-28 -left-3">
                <div className="flex flex-col">
                    <button className="bg-app-green w-9 text-app-black py-1 rounded-tr-full rounded-br-full text-[13px] font-semibold">
                        KYC
                    </button>
                    <button className="bg-app-red w-10 text-app-black pr-1 py-1 rounded-tr-full rounded-br-full text-[13px] font-semibold">
                        Safu
                    </button>
                    <button className="bg-app-blue w-11 text-app-black pr-2 py-1 rounded-tr-full rounded-br-full text-[13px] font-semibold">
                        Audit
                    </button>
                    <button className="bg-app-yellow w-18 text-app-black pr-3 py-1 rounded-tr-full rounded-br-full text-[13px] font-semibold">
                        Warranty
                    </button>
                </div>
            </div>
            <div className="flex justify-end space-x-10 items-center -mt-32">
                <div className="flex font-medium justify-center">
                    <Countdown
                        value={deadline}
                        className="font-medum"
                        format="D:HH:mm:ss"
                        valueStyle={{
                            fontSize: "13px",
                        }}
                    />
                </div>
                <button className="group bg-app-black-duration px-3 py-3 hover:bg-app-blue rounded-lg">
                    <Image src={WishListIcon} alt="wishlist" />
                </button>
            </div>
        </div>
    );
};

export default MiniCard;
