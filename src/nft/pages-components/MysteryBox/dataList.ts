import nft1 from "@public/assets/images/market/inventory.png";
import nft2 from "@public/assets/images/market/nft1.jpg";
import nft3 from "@public/assets/images/market/nft-1.jpg";
import nft4 from "@public/assets/images/market/ply.png";
import { StaticImageData } from "next/image";

interface WrappList {
    id: number;
    img: string | StaticImageData;
    percent: number;
}
interface CategoryList_ {
    id: number;
    title: string;
}
interface CategoryList {
    title: string;
    content: CategoryList_[];
}
export const WrappList: WrappList[] = [
    {
        id: 1,
        img: nft1,
        percent: 30,
    },
    {
        id: 2,
        img: nft2,
        percent: 20,
    },
    {
        id: 3,
        img: nft3,
        percent: 5,
    },
    {
        id: 4,
        img: nft4,
        percent: 90,
    },
];

export const CategoryList: CategoryList = {
    title: "Category",
    content: [
        {
            id: 1,
            title: "Warrior",
        },
        {
            id: 2,
            title: "Warrior",
        },
        {
            id: 3,
            title: "Warrior",
        },
        {
            id: 4,
            title: "Warrior",
        },
    ],
};
