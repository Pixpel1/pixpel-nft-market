import React from "react";
import SwapForm from "./SwapForm";
import GraphCard from "@nft/pages-components/SwapMaster/GraphCard";
// import SecurityVerification from "./SecurityVerification";

function Swap() {
    return (
        <div className="flex flex-col justify-center w-full gap-8 2xl:flex-row md:w-auto">
            <GraphCard />
            <SwapForm />
            {/* <SecurityVerification /> */}
        </div>
    );
}

export default Swap;
