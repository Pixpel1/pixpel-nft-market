import ETH from "@public/assets/images/UserHome/eth.png";
import BTC from "@public/assets/images/UserHome/btc.png";
import BNB from "@public/assets/images/UserHome/bnb.png";
import XRP from "@public/assets/images/UserHome/xrp.png";
import { StaticImageData } from "next/image";

interface Category {
    id: number;
    title: string;
}

interface PaymentToken {
    id: number;
    url: StaticImageData | string;
    title: string;
}
export const Category: Category[] = [
    {
        id: 1,
        title: "RPG",
    },
    {
        id: 2,
        title: "RPG",
    },
    {
        id: 3,
        title: "RPG",
    },
    {
        id: 4,
        title: "RPG",
    },
];

export const subCategory: Category[] = [
    {
        id: 1,
        title: "Land",
    },
    {
        id: 2,
        title: "Sky",
    },
    {
        id: 3,
        title: "Lake",
    },
    {
        id: 4,
        title: "Sea",
    },
];

export const Blockchain: Category[] = [
    {
        id: 1,
        title: "Binance",
    },
    {
        id: 2,
        title: "Concordium",
    },
    {
        id: 3,
        title: "Polygon",
    },
    {
        id: 4,
        title: "Solana",
    },
];

export const PaymentToken: PaymentToken[] = [
    {
        id: 1,
        url: ETH,
        title: "ETH",
    },
    {
        id: 2,
        url: BNB,
        title: "BNB",
    },
    {
        id: 3,
        url: BTC,
        title: "BTC",
    },
    {
        id: 4,
        url: XRP,
        title: "XRP",
    },
];
