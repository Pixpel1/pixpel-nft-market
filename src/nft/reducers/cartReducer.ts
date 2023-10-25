import { StaticImageData } from "next/image";
import { ADD_CART, REMOVE_CART } from "../actions/type";

interface action {
    type: string;
    payload: { id: string; img: StaticImageData | string };
}

const Cart = (state = [], action: action) => {
    switch (action.type) {
        case ADD_CART:
            return [...state, action.payload];

        case REMOVE_CART:
            return state.filter(({ id }) => id !== action.payload);

        default:
            return state;
    }
};

export default Cart;
