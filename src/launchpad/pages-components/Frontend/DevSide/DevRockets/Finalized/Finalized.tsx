/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@launchpad/context/AppContext";
import Rocket from "@launchpad/components/DevSide/DevRockets/DevRocket";
import { getDevRockets } from "@launchpad/helpers/requests/getDevRockets";
import React, { useEffect, useState } from "react";

const Finalized = () => {
    const [devRockets, setDevRockets] = useState<any[]>([]);

    const { account } = useAppContext();

    const getFinilizedDevRockets = async () => {
        const rockets = await getDevRockets(account);
        const filteredRockets = rockets.filter(
            (i) => i.invest_amount === i.hard_cap || new Date(i.end_time).getTime() < new Date().getTime()
        );
        console.log(filteredRockets);
        setDevRockets(filteredRockets);
    };

    useEffect(() => {
        getFinilizedDevRockets();
        // eslint-disable-next-line
    }, [account]);
    return (
        <div className="flex flex-wrap gap-8 2xl:gap-24 bg-app-black px-6 py-8">
            {devRockets.length > 0 &&
                devRockets.map((rocket, index) => {
                    const indexValue = Number(index) + 1;
                    return (
                        <>
                            <Rocket
                                rocket={rocket}
                                finalized={
                                    rocket.invest_amount === rocket.hard_cap ||
                                    new Date(rocket.end_time).getTime() < new Date().getTime()
                                }
                                borderRight={indexValue % 3 !== 0 ? true : false}
                            />
                        </>
                    );
                })}
        </div>
    );
};

export default Finalized;
