import React from "react";

interface Calculation {
    title: string;
    cost: string | number;
}

const Calculation = ({ title, cost }: Calculation) => {
    return (
        <div className="bg-app-black-button rounded-md flex justify-between items-center md:px-7 px-2 py-5">
            <div className="font-medium w-max">{title}</div>
            <div className="text-app-blue w-max font-medium">{cost}</div>
        </div>
    );
};

export default Calculation;
