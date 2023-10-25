import { StaticImageData } from "next/image";
import nft1 from "@public/assets/images/NFT/nft-1.png";
import nft2 from "@public/assets/images/NFT/nft-2.png";
import nft3 from "@public/assets/images/NFT/nft-3.png";
import game1 from "@public/assets/images/market/cryptoadventures.png";
import game2 from "@public/assets/images/market/cryptobots.png";
import game3 from "@public/assets/images/market/dungeons.png";

interface purchaseList {
    id: number;
    price: string;
    usd: string;
    floor: string;
    expiration: string;
    from: string;
}
interface NFTCardList {
    id: number;
    img: StaticImageData | string;
    title: string;
}

interface GameCardList {
    id: number;
    img: StaticImageData | string;
    gameName: string;
}

interface classList_ {
    id: number;
    title: string;
}

interface classList {
    title: string;
    list: classList_[];
}

interface nftDetails_ {
    id: number;
    title: string;
    value: string;
}

interface nftDetails {
    id: number;
    type: string;
    title: string;
    value: string;
    items: nftDetails_[];
}

export interface nftSingleData {
    img: string;
}
export const purchaseList: purchaseList[] = [
    {
        id: 1,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
    {
        id: 2,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
    {
        id: 3,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
    {
        id: 4,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
    {
        id: 5,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
    {
        id: 6,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
    {
        id: 7,
        price: "12 214 125 PIXP",
        usd: "$1 252 424",
        floor: "25% Below",
        expiration: "10 days",
        from: "Ivashek big name",
    },
];

export const NFTCardList: NFTCardList[] = [
    {
        id: 1,
        img: nft1,
        title: "Crypto Bot",
    },
    {
        id: 2,
        img: nft2,
        title: "Crypto Archer",
    },
    {
        id: 3,
        img: nft3,
        title: "Crypto Bot",
    },
    {
        id: 4,
        img: nft2,
        title: "War Bot",
    },
    {
        id: 5,
        img: nft1,
        title: "Crypto Archer",
    },
    {
        id: 6,
        img: nft2,
        title: "Crypto Bot",
    },
    {
        id: 7,
        img: nft3,
        title: "War Bot",
    },
    {
        id: 8,
        img: nft2,
        title: "Crypto Bot",
    },
    {
        id: 9,
        img: nft1,
        title: "Crypto Archer",
    },
    {
        id: 10,
        img: nft3,
        title: "Crypto Bot",
    },
    {
        id: 11,
        img: nft2,
        title: "War Bot",
    },
    {
        id: 12,
        img: nft1,
        title: "Crypto Bot",
    },
    {
        id: 13,
        img: nft1,
        title: "Crypto Archer",
    },
    {
        id: 14,
        img: nft3,
        title: "Crypto Bot",
    },
    {
        id: 15,
        img: nft1,
        title: "War Bot",
    },
    {
        id: 16,
        img: nft3,
        title: "Crypto Archer",
    },
    {
        id: 17,
        img: nft2,
        title: "Crypto Bot",
    },
    {
        id: 18,
        img: nft2,
        title: "Crypto Archer",
    },
    {
        id: 19,
        img: nft1,
        title: "War Bot",
    },
    {
        id: 20,
        img: nft3,
        title: "Crypto Bot",
    },
    {
        id: 21,
        img: nft2,
        title: "War Bot",
    },
    {
        id: 22,
        img: nft1,
        title: "Crypto Archer",
    },
    {
        id: 23,
        img: nft1,
        title: "Crypto Bot",
    },
    {
        id: 24,
        img: nft3,
        title: "War Bot",
    },
    {
        id: 25,
        img: nft1,
        title: "Crypto Bot",
    },
    {
        id: 26,
        img: nft3,
        title: "Crypto Archer",
    },
    {
        id: 27,
        img: nft2,
        title: "War Bot",
    },
    {
        id: 28,
        img: nft1,
        title: "Crypto Bot",
    },
];

export const GameCardList: GameCardList[] = [
    {
        id: 1,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 2,
        img: game2,
        gameName: "Crypto Bots",
    },
    {
        id: 3,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 4,
        img: game2,
        gameName: "Dungeons & Bots",
    },
    {
        id: 5,
        img: game1,
        gameName: "Crypto Bots",
    },
    {
        id: 6,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 7,
        img: game3,
        gameName: "Crypto Bots",
    },
    {
        id: 8,
        img: game2,
        gameName: "Dungeons & Bots",
    },
    {
        id: 9,
        img: game1,
        gameName: "Crypto Bots",
    },
    {
        id: 10,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 11,
        img: game2,
        gameName: "Dungeons & Bots",
    },
    {
        id: 12,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 13,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 14,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 15,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 16,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 17,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 18,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 19,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 20,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 21,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 22,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 23,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 24,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 25,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 26,
        img: game3,
        gameName: "Crypto Adventure",
    },
    {
        id: 27,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 28,
        img: game1,
        gameName: "Crypto Adventure",
    },
];

export const gameList: GameCardList[] = [
    {
        id: 1,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 2,
        img: game2,
        gameName: "Crypto Bots",
    },
    {
        id: 3,
        img: game3,
        gameName: "Dungeons & Bots",
    },
    {
        id: 4,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 5,
        img: game3,
        gameName: "Crypto Bots",
    },
    {
        id: 6,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 7,
        img: game3,
        gameName: "Dungeons & Bots",
    },
    {
        id: 8,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 9,
        img: game1,
        gameName: "Crypto Bots",
    },
    {
        id: 10,
        img: game3,
        gameName: "Dungeons & Bots",
    },
    {
        id: 11,
        img: game1,
        gameName: "Crypto Adventure",
    },
    {
        id: 12,
        img: game3,
        gameName: "Dungeons & Bots",
    },
    {
        id: 13,
        img: game2,
        gameName: "Crypto Adventure",
    },
    {
        id: 14,
        img: game1,
        gameName: "Crypto Bots",
    },
    {
        id: 15,
        img: game3,
        gameName: "Dungeons & Bots",
    },
];

export const classList: classList = {
    title: "Class",
    list: [
        {
            id: 1,
            title: "Legend",
        },
        {
            id: 2,
            title: "Rare",
        },
        {
            id: 3,
            title: "Super Rare",
        },
        {
            id: 4,
            title: "Common Rare",
        },
        {
            id: 5,
            title: "Common",
        },
    ],
};

export const categoryList: classList = {
    title: "Category",
    list: [
        {
            id: 1,
            title: "Game category",
        },
        {
            id: 2,
            title: "Fun category",
        },
        {
            id: 3,
            title: "Luxary category",
        },
        {
            id: 4,
            title: "Legends",
        },
    ],
};

export const teamsList: classList = {
    title: "Teams",
    list: [
        {
            id: 1,
            title: "Highway Team",
        },
        {
            id: 2,
            title: "Ivashek Team",
        },
        {
            id: 3,
            title: "Juan Team",
        },
        {
            id: 4,
            title: "Colojor Team",
        },
        {
            id: 5,
            title: "Maskir Team",
        },
    ],
};

export const insuranceList: classList = {
    title: "Insurance",
    list: [
        {
            id: 1,
            title: "With Insurance",
        },
        {
            id: 2,
            title: "Without Insurance",
        },
    ],
};

export const sortList: classList = {
    title: "Sort",
    list: [
        {
            id: 1,
            title: "Popular",
        },
        {
            id: 2,
            title: "Reviews",
        },
        {
            id: 3,
            title: "From High Price to Low",
        },
        {
            id: 4,
            title: "From Low Price to High",
        },
    ],
};

export const nftDetails: nftDetails[] = [
    {
        id: 1,
        type: "Level",
        title: "Level:",
        value: "30",
        items: [
            {
                id: 1,
                title: "Strength:",
                value: "20",
            },
            {
                id: 2,
                title: "Dexterity:",
                value: "50",
            },
            {
                id: 3,
                title: "Constitution:",
                value: "20",
            },
            {
                id: 4,
                title: "Intelligence:",
                value: "80",
            },
            {
                id: 5,
                title: "Wisdom:",
                value: "100",
            },
            {
                id: 6,
                title: "Charisma:",
                value: "50",
            },
        ],
    },
    {
        id: 2,
        type: "class",
        title: "CLASS:",
        value: "ARCHER",
        items: [
            {
                id: 1,
                title: "Attack:",
                value: "90",
            },
            {
                id: 2,
                title: "Defense:",
                value: "60",
            },
            {
                id: 3,
                title: "Dodge:",
                value: "190",
            },
            {
                id: 4,
                title: "Deflection:",
                value: "50",
            },
            {
                id: 5,
                title: "Luck:",
                value: "80",
            },
            {
                id: 6,
                title: "Size:",
                value: "100",
            },
        ],
    },
    {
        id: 3,
        type: "Race",
        title: "Race:",
        value: "Human",
        items: [
            {
                id: 1,
                title: "Resistance:",
                value: "30",
            },
            {
                id: 2,
                title: "Resistance:",
                value: "50",
            },
            {
                id: 3,
                title: "Resistance:",
                value: "50",
            },
            {
                id: 4,
                title: "Resistance:",
                value: "80",
            },
            {
                id: 5,
                title: "Resistance:",
                value: "50",
            },
            {
                id: 6,
                title: "Resistance:",
                value: "50",
            },
        ],
    },
    {
        id: 3,
        type: "Category",
        title: "CATEGORY:",
        value: "RARE",
        items: [
            {
                id: 1,
                title: "Experience:",
                value: "5000",
            },
            {
                id: 2,
                title: "HP:",
                value: "20000",
            },
            {
                id: 3,
                title: "Stamina:",
                value: "500",
            },
            {
                id: 4,
                title: "Armor:",
                value: "100",
            },
            {
                id: 5,
                title: "Shield:",
                value: "0",
            },
            {
                id: 6,
                title: "Speed:",
                value: "80",
            },
        ],
    },
];
