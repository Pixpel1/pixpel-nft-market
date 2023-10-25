import BNB from "@public/assets/images/UserHome/bnb.png";
import AVAX from "@public/assets/images/UserHome/avax.png";
import BTC from "@public/assets/images/UserHome/btc.png";
import ETH from "@public/assets/images/UserHome/eth.png";
import LUNA from "@public/assets/images/UserHome/luna.png";
import USDC from "@public/assets/images/UserHome/usdc.png";
import XRP from "@public/assets/images/UserHome/xrp.png";
import { StaticImageData } from "next/image";

interface tokenTrend {
    id: number;
    image: StaticImageData | string;
    symbol: string;
    name: string;
    Price: string;
    Change: number;
    martketcap: StaticImageData | string;
}

export const tokenTrend: tokenTrend[] = [
    {
        id: 1,
        image: BNB,
        symbol: "BNB",
        name: "BNB",
        Price: "$45 832,04000",
        Change: -1.73,
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        id: 2,
        image: BTC,
        symbol: "BTC",
        name: "Bitcoin",
        Price: "$3 453,74000",
        Change: -0.84,
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        id: 3,
        image: USDC,
        symbol: "USDC",
        name: "USD Coin",
        Price: "$1,00000",
        Change: -0.009,
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        id: 4,
        image: ETH,
        symbol: "ETH",
        name: "Ethereum",
        Price: "$442,70000",
        Change: +2.41,
        martketcap: "/assets/images/home/Players/greengraph.svg",
    },
    {
        id: 5,
        image: XRP,
        symbol: "XRP",
        name: "Ripple",
        Price: "$0,99990",
        Change: +1.99,
        martketcap: "/assets/images/home/Players/greengraph.svg",
    },
    {
        id: 6,
        image: LUNA,
        symbol: "LUNA",
        name: "Terra",
        Price: "$134,56000",
        Change: -98.39,
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        id: 7,
        image: AVAX,
        symbol: "AVAX",
        name: "Avalanche",
        Price: "$1,20000",
        Change: +1200.02,
        martketcap: "/assets/images/home/Players/greengraph.svg",
    },
];
