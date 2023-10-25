import Chart from "@launchpad/components/gameLobby/Chart";
import Rockets from "./Rockets";
import TokenDetails from "./TokenDetails";
import { MutableRefObject } from "react";
import Ships from "./Ships";

const index = (props: { scrollToRef: MutableRefObject<HTMLDivElement> }) => {
    return (
        <div
            ref={props.scrollToRef}
            className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pt-24 pb-4 pr-5 bg-app-black-button/50"
        >
            <div className="flex mx-auto items-center mb-2">
                <h3 className="text-3xl  lg:text-[40px] font-bold uppercase mx-auto flex items-center">Launch Pad</h3>
                <div className="flex shrink grow-0 items-center bg-app-green  ml-2 px-2 py-1 rounded-md">
                    <p className="bg-black rounded-full w-2 h-2 mr-2"></p>
                    <p className="text-black text-base font-semibold">LiveSale Tokens</p>
                </div>
            </div>
            <Ships />
            <Rockets />
            <TokenDetails />
            <Chart />
        </div>
    );
};

export default index;
