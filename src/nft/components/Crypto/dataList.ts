import BNB from "@public/assets/images/UserHome/bnb.png";
import BTC from "@public/assets/images/UserHome/btc.png";
import USDC from "@public/assets/images/UserHome/usdc.png";
import ETH from "@public/assets/images/UserHome/eth.png";
import XRP from "@public/assets/images/UserHome/xrp.png";
import { StaticImageData } from "next/image";

interface coinListType {
    id: number;
    title: string;
    url?: string | StaticImageData;
}

interface buySellType {
    id: number;
    User: string;
    Price: string;
    Limit: {
        Available: string;
        Limit: string;
    };
    Terms: string;
    Action: string;
}

export const coinList: coinListType[] = [
    {
        id: 1,
        title: "BTC",
    },
    {
        id: 2,
        title: "USDT",
    },
    {
        id: 3,
        title: "CCD",
    },
    {
        id: 4,
        title: "BUSD",
    },
    {
        id: 5,
        title: "ETH",
    },
    {
        id: 6,
        title: "BNB",
    },
    {
        id: 7,
        title: "SLP",
    },
];

export const PaymentList: coinListType[] = [
    {
        id: 1,
        title: "MonoBank",
    },
    {
        id: 2,
        title: "SwissBank",
    },
    {
        id: 3,
        title: "SwissBank",
    },
    {
        id: 4,
        title: "SwissBank",
    },
];

export const FiatList: coinListType[] = [
    {
        id: 1,
        url: BNB,
        title: "BNB",
    },
    {
        id: 2,
        url: BTC,
        title: "BTC",
    },
    {
        id: 3,
        url: ETH,
        title: "ETH",
    },
    {
        id: 4,
        url: USDC,
        title: "USDC",
    },
    {
        id: 5,
        url: XRP,
        title: "XRP",
    },
];

export const buyList: buySellType[] = [
    {
        id: 1,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Buy BTC",
    },
    {
        id: 2,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Buy BTC",
    },
    {
        id: 3,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Buy BTC",
    },
    {
        id: 4,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Buy BTC",
    },
    {
        id: 5,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Buy BTC",
    },
    {
        id: 6,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Buy BTC",
    },
];

export const sellList: buySellType[] = [
    {
        id: 1,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Sell BTC",
    },
    {
        id: 2,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Sell BTC",
    },
    {
        id: 3,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Sell BTC",
    },
    {
        id: 4,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Sell BTC",
    },
    {
        id: 5,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Sell BTC",
    },
    {
        id: 6,
        User: "Cerstkon",
        Price: "30,000 MXN",
        Limit: {
            Available: "2 BTC",
            Limit: "30,000 MXN",
        },
        Terms: "HSBC, STP, BBVA, Banorte",
        Action: "Sell BTC",
    },
];
