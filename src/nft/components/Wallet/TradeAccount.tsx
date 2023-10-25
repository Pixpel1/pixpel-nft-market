import React from "react";
import TradeAccountOverview from "./TradeAccount/TradeAccountOverview";
import CoinTable from "./StartAccount/CoinTable";

const TradeAccount = () => {
    return (
        <div className="flex flex-col gap-3">
            <TradeAccountOverview />
            <CoinTable idx={0} />
        </div>
    );
};

export default TradeAccount;
