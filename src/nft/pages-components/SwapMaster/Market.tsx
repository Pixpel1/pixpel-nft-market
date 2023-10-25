import React from "react";
import MarketCard from "./MarketCard";
import MarketSuccessCard from "./MarketSuccessCard";
import { useAppSelector } from "@nft/hooks";

const Market = () => {
    const selector = useAppSelector((state) => state.market);

    return <>{selector ? <MarketSuccessCard /> : <MarketCard />}</>;
};

export default Market;
