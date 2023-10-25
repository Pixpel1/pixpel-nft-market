import { StaticImageData } from "next/image";
import BNB from "@public/assets/images/UserHome/bnb.png";
import AVAX from "@public/assets/images/UserHome/avax.png";
import BTC from "@public/assets/images/UserHome/btc.png";
import ETH from "@public/assets/images/UserHome/eth.png";
import LUNA from "@public/assets/images/UserHome/luna.png";
import USDC from "@public/assets/images/UserHome/usdc.png";
import XRP from "@public/assets/images/UserHome/xrp.png";

interface stakingList {
    id: number;
    img: string | StaticImageData;
    name: string;
    game: string;
    invest: number;
    duration: number;
    minimum: string;
}

export const stakingList: stakingList[] = [
    {
        id: 1,
        img: BNB,
        name: "BNB",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 2,
        img: AVAX,
        name: "AVAX",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 3,
        img: BTC,
        name: "BTC",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 4,
        img: ETH,
        name: "ETH",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 5,
        img: LUNA,
        name: "LUNA",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 6,
        img: XRP,
        name: "XRP",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 7,
        img: AVAX,
        name: "AVAX",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 8,
        img: BNB,
        name: "BNB",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 9,
        img: ETH,
        name: "ETH",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 10,
        img: USDC,
        name: "USDC",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
    {
        id: 11,
        img: BTC,
        name: "BTC",
        game: "Crypto Box",
        invest: 7.8,
        duration: 90,
        minimum: "2 PIXP",
    },
];
