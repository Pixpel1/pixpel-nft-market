interface Listing {
    id: number;
    Price: string;
    USD: string;
    Type: string;
    Date: string;
}

interface Offers {
    id: number;
    Price: string;
    USER: string;
    Type: string;
    Date: string;
}

export const Listing: Listing[] = [
    {
        id: 1,
        Price: "200 PIXP",
        USD: "200 USD",
        Type: "Fix Price",
        Date: "28-04-2024",
    },
    {
        id: 2,
        Price: "1 ETH",
        USD: "200 USD",
        Type: "Auction",
        Date: "12-12-2024",
    },
];

export const Offers: Offers[] = [
    {
        id: 1,
        Price: "0.5 ETH",
        USER: "PETER",
        Type: "Auction",
        Date: "28-04-2024",
    },
    {
        id: 2,
        Price: "200 PIXP",
        USER: "PETER",
        Type: "Fix Price",
        Date: "28-04-2024",
    },
];
