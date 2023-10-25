import React from "react";
interface Probability {
    percent: string | number;
    height: string | number;
    className: string;
}
const Probability = ({ percent, height, className }: Probability) => {
    return (
        <div className={"rounded bg-app-black w-full relative " + className} style={{ height: `${height}px` }}>
            <div className="absolute w-full h-full flex justify-center items-center">{percent}%</div>
            <div className="bg-app-blue rounded h-full" style={{ width: `${percent}%` }}></div>
        </div>
    );
};

export default Probability;
