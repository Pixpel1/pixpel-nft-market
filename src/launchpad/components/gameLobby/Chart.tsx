import React from "react";
import graph from "@launchpad/assets/images/graph.png";
import Image from "next/image";

const Chart = () => {
    return (
        <div className="flex flex-col  2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 gap-2  mt-12">
            <div className="relative flex flex-col  bg-app-black-button 2xl:px-16 xl:px-12 lg:px-9 md:px-6 px-3 2xl:py-16 xl:py-12 lg:py-9 md:py-6 py-3 rounded-2xl 2xl:justify-center overflow-x-auto">
                <div className="flex flex-col mx-auto mb-10">
                    <h3 className="text-4xl font-semibold">PIXP - USDT</h3>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-value -mt-2 sticky top-2 left-2 bottom-2 shrink-0">
                        <div className="text-base">10000</div>
                        <div className="text-base">9 950</div>
                        <div className="text-base">9 900</div>
                        <div className="text-base">9 850</div>
                        <div className="text-base">9 800</div>
                        <div className="text-base">9 750</div>
                        <div className="text-base">9 700</div>
                        <div className="text-base">9 650</div>
                        <div className="text-base">9 600</div>
                        <div className="text-base">9 550</div>
                        <div className="text-base">9 500</div>
                        <div className="text-base">9 450</div>
                        <div className="text-base">9 400</div>
                        <div className="text-base">9 350</div>
                        <div className="text-base">9 300</div>
                        <div className="text-base">9 250</div>
                        <div className="text-base">9 200</div>
                        <div className="text-base">9 150</div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image
                            src={graph}
                            alt="Graph"
                            className="none-flex"
                            style={{ width: "1460px", height: "468px" }}
                        />
                        <div className="flex gap-time shrink-0">
                            <div>3:00 AM</div>
                            <div>4:00 AM</div>
                            <div>5:00 AM</div>
                            <div>6:00 AM</div>
                            <div>7:00 AM</div>
                            <div>8:00 AM</div>
                            <div>9:00 AM</div>
                            <div>10:00 AM</div>
                            <div>11:00 AM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
