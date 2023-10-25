import { StaticImageData } from "next/image";
import Profile from "@public/assets/images/devprofile/profile.svg";
import ProfileSelected from "@public/assets/images/devprofile/profile_selected.svg";
import settings from "@public/assets/images/devprofile/settings.svg";
import settingsSelected from "@public/assets/images/devprofile/settings_selected.svg";
import security from "@public/assets/images/devprofile/security.svg";
import securitySelected from "@public/assets/images/devprofile/security_selected.svg";
import membership from "@public/assets/images/devprofile/membership.svg";
import membershipSelected from "@public/assets/images/devprofile/membership_selected.svg";

interface menuList {
    id: number;
    title: string;
    img?: string | StaticImageData;
    selectedImg?: string | StaticImageData;
}

interface verificationList {
    phone: string;
    gmail: string;
}

interface activityList_ {
    skill: string;
    locate: string;
    level: string;
    time: string;
}

interface activityList {
    id: number;
    title: activityList_;
}

export const menuList: menuList[] = [
    {
        id: 1,
        title: "PROFILE",
        img: Profile,
        selectedImg: ProfileSelected,
    },
    {
        id: 2,
        title: "SETTINGS",
        img: settings,
        selectedImg: settingsSelected,
    },
    {
        id: 3,
        title: "SECURITY",
        img: security,
        selectedImg: securitySelected,
    },
    {
        id: 4,
        title: "MEMBERSHIP",
        img: membership,
        selectedImg: membershipSelected,
    },
];

export const verificationList: verificationList = {
    phone: "+380994069504",
    gmail: "Hellomail@gmail.com",
};

export const tokenList: menuList[] = [
    {
        id: 1,
        title: "SPOT",
        img: "",
    },
    {
        id: 2,
        title: "FlAT",
        img: "",
    },
    {
        id: 3,
        title: "TOKEN",
    },
    {
        id: 4,
        title: "NFT",
    },
    {
        id: 5,
        title: "STAKING",
    },
];

export const securityList: menuList[] = [
    {
        id: 1,
        title: "Verify ID",
    },
    {
        id: 2,
        title: "2 Method Security",
    },
    {
        id: 3,
        title: "Anti-Fishing",
    },
    {
        id: 4,
        title: "Transfer Whitelist",
    },
];

export const activityList: activityList[] = [
    {
        id: 1,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 2,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 3,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 4,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
];

export const devicesList = [
    {
        id: 1,
        title: {
            OS: "Safari V15.4 (Mac OS)",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 2,
        title: {
            OS: "Ivashek",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 3,
        title: {
            OS: "Safari V15.4 (Mac OS)",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 4,
        title: {
            OS: "Safari V15.4 (Mac OS)",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
];

export const textList = [
    {
        id: 1,
        title: {
            OS: "Account activity Aug 22",
            locate: "Your deposit is now availabe for trading",
            level: "+$420",
            time: "",
        },
    },
    {
        id: 2,
        title: {
            OS: "Price Alert Aug 22",
            locate: "Litecoin(LTC) is up +6.68% to $56.66 in the last 11 hours",
            level: "$56.66",
            time: "+6.68%",
        },
    },
    {
        id: 3,
        title: {
            OS: "Price Alert Aug 22",
            locate: "Litecoin(LTC) is down -5.40% to $52.69 in the last 8 hours.",
            level: "$52.69",
            time: "-5.40%",
        },
    },
];

export const tableList = [
    {
        id: 1,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 2,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 3,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 4,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 5,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
];
