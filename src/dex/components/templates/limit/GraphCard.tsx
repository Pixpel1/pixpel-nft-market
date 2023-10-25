import React from "react";
const GraphCard = () => {
    return (
        <div className="flex flex-col text-lg 2xl:w-155 bg-app-black rounded-xl sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] ">
            <div className="flex items-center justify-center rounded-md w-36 bg-app-black-button h-14">
                <div>
                    <span title={"btc"}>btc</span>/<span title={"usdt"}>usdt</span>
                </div>
            </div>
            <div className="flex flex-col justify-between mt-4 sm:items-center sm:flex-row">
                <div className="flex flex-row items-center mb-5 sm:mb-0">
                    <div className="flex items-center justify-center h-16 px-2 mr-4 rounded-md w-60 bg-app-black-button">
                        <div className="text-base 1xl:text-2xl">123</div>
                    </div>
                    <div
                        className={`flex items-center justify-center w-24 h-12 px-2 ${
                            -9 >= 0 ? "bg-green-600" : "bg-red-500"
                        } rounded-md`}
                    >
                        <div className="text-sm 1xl:text-base">-59%</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center justify-center h-12 rounded-md w-36 bg-app-black-button">
                        <div className="text-gray-400">Past 24 Hours</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-72 mt-7 relative border-dashed border-b-2 border-app-black">
                {/* <Chart data={chartData} setHoveredPointIndex={setHoveredPointIndex} /> */}
                <div className="absolute right-0 bottom-0 rounded-2xl bg-app-black-button px-4 py-2 translate-y-1/2 text-sm">
                    40000
                </div>
            </div>
            <div className="flex flex-row justify-end gap-3 mt-8">
                {PERIODS.map((period) => (
                    <button key={period} className="h-12 px-5 py-3 rounded-lg w-max bg-app-black-button">
                        {period}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GraphCard;

const PERIODS = ["24H", "1W", "1M"];
