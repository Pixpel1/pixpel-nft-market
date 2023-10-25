import { StaticImageData } from "next/image";
import BNB from "@public/assets/images/UserHome/bnb.png";
import AVA from "@public/assets/images/UserHome/avax.png";
import btc from "@public/assets/images/UserHome/btc.png";
import xrp from "@public/assets/images/UserHome/xrp.png";

interface tokenList {
    id: number;
    title: string;
    url?: StaticImageData | string;
}

export const fromTokenList: tokenList[] = [
    {
        id: 1,
        title: "xrp",
        url: BNB,
    },
    {
        id: 2,
        title: "AVA",
        url: AVA,
    },
    {
        id: 3,
        title: "btc",
        url: btc,
    },
    {
        id: 4,
        title: "xrp",
        url: xrp,
    },
];

export const durationList: tokenList[] = [
    {
        id: 1,
        title: "one week",
    },
    {
        id: 2,
        title: "one month",
    },
    {
        id: 3,
        title: "3 month",
    },
    {
        id: 4,
        title: "6 month",
    },
    {
        id: 5,
        title: "one year",
    },
];
