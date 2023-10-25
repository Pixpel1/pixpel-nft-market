import React from "react";
import { mysteryBoxList } from "@launchpad/important/datalist";
import NftCard from "@launchpad/components/Market/NftCard";
import { NftMarketStyled } from "./styled/NftMarketStyle";

const MysteryBox = () => {
    return (
        <div className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-24 pr-5">
            <h3 className="text-3xl  lg:text-4xl mt-10 mb-9 font-bold uppercase mr-auto">Mystery Box</h3>

            <NftMarketStyled className="flex flex-wrap">
                <div className="scrollWrapper gap-4">
                    {mysteryBoxList.map((game, idx) => {
                        return <NftCard key={idx} data={game} />;
                    })}
                </div>
            </NftMarketStyled>
        </div>
    );
};

export default MysteryBox;
