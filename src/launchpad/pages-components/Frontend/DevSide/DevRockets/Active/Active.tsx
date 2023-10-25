/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import NewRocket from "@launchpad/components/DevSide/DevRockets/NewRocket";
import Rocket from "@launchpad/components/DevSide/DevRockets/DevRocket";
import { useAppContext } from "@launchpad/context/AppContext";
import { getDevRockets } from "@launchpad/helpers/requests/getDevRockets";

const Active = () => {
    const [devRockets, setDevRockets] = useState<any[]>([]);

    const { account } = useAppContext();

    const getActiveDevRockets = async () => {
        const rockets = await getDevRockets(account);
        const filteredRockets = rockets.filter((i) =>
            i.invest_amount !== i.hard_cap ? new Date(i.end_time).getTime() > new Date().getTime() : false
        );
        console.log(filteredRockets);
        setDevRockets(filteredRockets);
    };

    useEffect(() => {
        getActiveDevRockets();
        // eslint-disable-next-line
    }, [account]);

    return (
        <div className="flex flex-wrap  gap-8 2xl:gap-24 bg-app-black px-6 py-8">
            {devRockets.length > 0 &&
                devRockets.map((rocket, index) => {
                    const indexValue = Number(index) + 1;
                    return (
                        <>
                            <Rocket
                                rocket={rocket}
                                borderRight={indexValue % 3 !== 0 ? true : false}
                                finalized={false}
                            />
                        </>
                    );
                })}
            <NewRocket borderRight={false} />
        </div>
    );
};

export default Active;
