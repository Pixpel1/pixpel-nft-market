import { WITHDRAW_CLOSE_MODAL, WITHDRAW_SHOW_MODAL } from "../actions/type";

interface action {
    type: string;
}

const withdrawReducer = (state = false, action: action) => {
    switch (action.type) {
        case WITHDRAW_SHOW_MODAL:
            return true;

        case WITHDRAW_CLOSE_MODAL:
            return false;

        default:
            return state;
    }
};

export default withdrawReducer;
