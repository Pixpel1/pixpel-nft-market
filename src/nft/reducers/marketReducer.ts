import { MARKET_SUCCESS_HANDLE } from "../actions/type";

interface action {
    type: string;
}

const marketReducer = (state = false, action: action) => {
    switch (action.type) {
        case MARKET_SUCCESS_HANDLE:
            return !state;

        default:
            return state;
    }
};

export default marketReducer;
