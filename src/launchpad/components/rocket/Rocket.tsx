import React, { Dispatch, SetStateAction } from "react";
import MiniCard from "@launchpad/components/projectCard/MiniCard";

interface Rocket {
    showRocket: boolean;
    setShowRocket: Dispatch<SetStateAction<boolean>>;
    classNames: string;
}
const Rocket = ({ classNames }: Rocket) => {
    return (
        <div className="rocket">
            <div className={"bg-app-black-button 2xl1:px-6 px-4 py-4 mr-2 rounded-lg  " + classNames}>
                <div className="rocket__body">
                    <div className="rocket__inner">
                        <div className="rocket__list space-y-3">
                            <MiniCard />
                            <MiniCard />
                            <MiniCard />
                            <MiniCard />
                            <MiniCard />
                            <MiniCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Rocket;
