interface MenuListType {
    id: number;
    Link: string;
    menu: string;
}

export const MenuList: MenuListType[] = [
    {
        id: 1,
        menu: "Market",
        Link: "/nft-market",
    },
    // {
    //     id: 2,
    //     menu: "Staking",
    //     Link: "/staking",
    // },
    {
        id: 1,
        menu: "Trade",
        Link: "/swap-master",
    },
    {
        id: 1,
        menu: "Buy Crypto",
        Link: "/buycrypto",
    },
];
