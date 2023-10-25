import { StaticImageData } from "next/image";
import { ADD_CART, REMOVE_CART } from "./type";

export type CartItem = { id: string; img: StaticImageData | string } | null | undefined;

export const addCart = (info: CartItem) => {
    return {
        type: ADD_CART,
        payload: info,
    };
};

export const removeCart = (info: string) => {
    return {
        type: REMOVE_CART,
        payload: info,
    };
};
