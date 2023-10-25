/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState, DetailedHTMLProps, HTMLAttributes } from "react";
import { Line } from "react-chartjs-2";

interface MarketChartType {
    isGrowth: boolean;
    data: number[];
    sizeChart:
        | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
        | {
              maxHeight: number;
              maxWidth: number;
              marginLeft: string;
          };
}

const RGB_COLOR_GROWTH = "46, 189, 133",
    RGB_COLOR_FALL = "189, 46, 46";
const getDataChart = (ctx: CanvasRenderingContext2D, isGrowth = true, data: any) => {
    const setColor = (opacity = 1) =>
        isGrowth === true ? `rgba(${RGB_COLOR_GROWTH}, ${opacity})` : `rgba(${RGB_COLOR_FALL}, ${opacity})`;
    const gradient = ctx.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, setColor());
    gradient.addColorStop(1, setColor(0));

    return {
        labels: [
            "02:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00",
            "00:00",
        ],
        datasets: [
            {
                backgroundColor: gradient, // Put the gradient here as a fill color
                tension: 0.4,
                fill: true,
                borderColor: setColor(),
                borderWidth: 2,
                pointColor: "#fff",
                pointStrokeColor: setColor(),
                pointHighlightFill: "#fff",
                pointHighlightStroke: setColor(),
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                data: data,
            },
        ],
    };
};
const options = {
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
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
};
const MarketChart = (props: MarketChartType) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const chartRef = useRef(null);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const chart: any = chartRef.current;
        if (!chart) {
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, react-hooks/exhaustive-deps
        setChartData(getDataChart(chart.ctx, props.isGrowth, props.data) as any);
        //eslint-disable-next-line
    }, []);

    return (
        <div style={props.sizeChart}>
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
};
export default MarketChart;
