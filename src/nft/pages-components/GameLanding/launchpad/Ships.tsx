import React from "react";
import ShipCard from "@launchpad/components/gameLobby/shipCard/ShipCard";
import { launchpadCards } from "@launchpad/important/datalist";

const Ships = () => {
    return (
        <>
            <h3 className="text-3xl  lg:text-4xl mt-10 mb-9 font-bold uppercase mr-auto">Ships</h3>
            <div className="grid">
                <div className="flex flex-wrap gap-4">
                    {launchpadCards.map((card, i) => {
                        return <ShipCard key={i} {...card} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Ships;
