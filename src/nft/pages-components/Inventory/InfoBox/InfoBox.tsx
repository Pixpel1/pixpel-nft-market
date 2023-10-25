import React from "react";
import Image from "next/image";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

import InventoryImage from "@public/assets/images/market/inventory.png";

const InfoBox = () => {
    const data = {
        datasets: [
            {
                data: [12, 8, 3],
                backgroundColor: ["#717A8B", "#37404C", "#48515F"],
                borderColor: ["#717A8B", "#37404C", "#48515F"],
                borderWidth: 1,
            },
        ],
    };
    const dataPieWin = {
        datasets: [
            {
                data: [12],
                backgroundColor: ["#48515F"],
                borderColor: ["#48515F"],
                borderWidth: 1,
            },
        ],
    };
    const dataPieLose = {
        datasets: [
            {
                data: [12],
                backgroundColor: ["#48515F"],
                borderColor: ["#48515F"],
                borderWidth: 1,
            },
        ],
    };
    const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        scales: {
            y: {
                display: false,
            },
        },
    };
    const labels: string[] = ["PVP", "PVG", "FARM", "LAND"];
    const dataBar = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [3, 4, 2, 3, 5, 6],
                backgroundColor: "#48515F",
            },
        ],
    };
    return (
        <div className="inventory__row">
            <div
                className="inventory__col widget -mt-3"
                style={{
                    height: "100%",
                    width: "100%",
                    maxWidth: 780,
                }}
            >
                <div className="widget__row" style={{ gap: 30 }}>
                    <div className="widget__col">
                        <Image src={InventoryImage} alt="" />
                        <div className="widget__tools mt-1 mb-0">
                            <button className="widget__btn widget__btn--dollar">$</button>
                        </div>
                    </div>
                    <div className="widget__col">
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                    </div>
                </div>
                <h2 className="widget__title" style={{ marginTop: 20, marginBottom: 10 }}>
                    Statistic
                </h2>
                <div className="widget__row widget__box">
                    <div className="widget__col">
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                    </div>
                    <div className="widget__col">
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                    </div>
                    <div className="widget__item widget__item--offset-top">
                        <div className="widget__item-name">ATTACK</div>
                        <div className="widget__item-value">120</div>
                    </div>
                </div>
                <h2 className="widget__title" style={{ marginTop: 33, marginBottom: 10 }}>
                    GARNINGS
                </h2>
                <div className="widget__row widget__box">
                    <div className="widget__col">
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                    </div>
                    <div className="widget__col">
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                    </div>
                    <div className="widget__item widget__item--offset-top">
                        <div className="widget__item-name">ATTACK</div>
                        <div className="widget__item-value">120</div>
                    </div>
                </div>
                <h2 className="widget__title" style={{ marginTop: 42, marginBottom: 10 }}>
                    Graph
                </h2>
                <div className="widget__row widget__box widget__col--pie">
                    <div className="widget__col">
                        <Pie data={data} style={{ width: 174, height: 174 }}></Pie>
                    </div>
                    <div className="widget__col">
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                        <div className="widget__item">
                            <div className="widget__item-name">ATTACK</div>
                            <div className="widget__item-value">120</div>
                        </div>
                    </div>
                </div>

                <Bar options={optionsBar} data={dataBar} style={{ height: 170 }}></Bar>
                <div className="widget__row flex widget__row--offset">
                    <div className="widget__col">
                        <div className="widget__title" style={{ marginBottom: 16 }}>
                            Win
                        </div>
                        <Pie data={dataPieLose} style={{ width: 170, height: 170 }}></Pie>
                    </div>
                    <div className="widget__col">
                        <div className="widget__title" style={{ marginBottom: 16 }}>
                            Lose
                        </div>

                        <Pie data={dataPieWin} style={{ width: 170, height: 170 }}></Pie>
                    </div>
                </div>
                <div className="widget__footer">
                    <div className="widget__footer-name">
                        ROI <span className="widget__footer-days">60 days</span>
                    </div>
                    <div className="widget__progress">
                        <div className="widget__progress-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
