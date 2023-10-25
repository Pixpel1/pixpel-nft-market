import CalenderTick from "@launchpad/assets/icons/calendar_tick.png";
import AngelInvestorModal from "@launchpad/components/Modal/AngelInvestorModal";
import ClaimTokens from "@launchpad/components/Modal/ClaimTokens";
import { Tooltip } from "antd";
import Image from "next/image";
import { useState } from "react";

interface RocketCard {
    headColor: string;
    title: string;
    yearCardsData: {
        id: number;
        year: string | number;
        cards: {
            title: string;
            month: string;
            tokens: string;
        }[];
    }[];
    nextRelease: {
        ownedToken: number;
        isDisabled: boolean;
        next_release_amount: number;
        claimed_token: number;
        next_release_date: string | number;
        completed_cycle: number;
    };
}

const RocketCard = ({ headColor, title, yearCardsData, nextRelease }: RocketCard) => {
    const [showModal, setShowModal] = useState(false);
    const [showClaimTokens, setShowClaimTokens] = useState(false);

    return (
        <>
            <div className="flex 1xs:shrink-0 grow 1xs:basis-[content]">
                <div className="bg-app-black-button flex flex-col rounded-lg w-full z-10">
                    <div
                        className="card_head border-b border-white p-4 rounded-tl-lg rounded-tr-lg"
                        style={{ backgroundColor: `${headColor}` }}
                    >
                        <div className="flex pb-2 w-full text-center">
                            <h3 className="text-2xl 1xs:text-4xl font-semibold uppercase mx-auto opacity-100">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <div className="card_body px-4">
                        <div className="flex justify-end py-3">
                            <Tooltip placement="left" color="#0095c8" title={"Transaction History"}>
                                <div className="bg-app-black-select rounded-full hover:bg-app-blue p-2">
                                    <Image src={CalenderTick} alt="history" />
                                </div>
                            </Tooltip>
                        </div>
                        <div className="flex justify-between bg-app-black-select p-1 px-2 rounded-md mb-7">
                            <p className="text-[17px] font-semibold">Total Owned Tokens:</p>
                            <p className="text-[17px] font-semibold text-app-blue">{nextRelease.ownedToken} PIXP</p>
                        </div>
                        <div className="flex justify-between bg-app-black-select p-1 px-2 rounded-md mb-7">
                            <p className="text-[17px] font-semibold">Claimable Tokens:</p>
                            <p className="text-[17px] font-semibold text-app-blue">
                                {!nextRelease?.isDisabled ? nextRelease?.next_release_amount : 0} PIXP
                            </p>
                        </div>
                        <div className="flex justify-between bg-app-black-select p-1 px-2 rounded-md mb-7">
                            <p className="text-[17px] font-semibold">Claimed Tokens:</p>
                            <p className="text-[17px] font-semibold text-app-blue">
                                {nextRelease?.claimed_token} 0 PIXP
                            </p>
                        </div>
                        <div className="flex justify-between bg-app-black-select p-1 px-2 rounded-md mb-7">
                            <p className="text-[17px] font-semibold">Next Release:</p>
                            <p className="text-[17px] font-semibold text-app-blue">{nextRelease?.next_release_date}</p>
                        </div>
                        <div className="flex mx-auto space-x-4 mb-8 px-2">
                            <button
                                className="bg-app-green hover:bg-app-orange-hover text-base 1xs:text-lg font-semibold rounded-lg w-full px-6 py-3 uppercase"
                                onClick={() => setShowModal(true)}
                            >
                                Schedule
                            </button>
                            <button
                                className="bg-app-blue hover:bg-app-blue-hover  text-base 1xs:text-lg font-semibold rounded-lg w-full px-6 py-3 uppercase"
                                onClick={() => setShowClaimTokens(true)}
                                disabled={nextRelease?.isDisabled}
                            >
                                Claim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                <>
                    <AngelInvestorModal showModal={showModal} setShowModal={setShowModal} modalData={yearCardsData} />
                    <ClaimTokens
                        showModal={showClaimTokens}
                        setShowModal={setShowClaimTokens}
                        amount={nextRelease?.next_release_amount}
                        completed_cycle={nextRelease?.completed_cycle}
                    />
                </>
            }
        </>
    );
};

export default RocketCard;
