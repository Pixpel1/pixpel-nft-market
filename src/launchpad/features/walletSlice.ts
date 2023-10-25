/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wallet: null,
};

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setWallet: (state, action) => {
            const wallet = action.payload;
            return (state = {
                ...state,
                wallet,
            });
        },
    },
});

export const getWalletAccount = (state: { wallet: any }) => state.wallet;

export const { setWallet } = walletSlice.actions;
export default walletSlice.reducer;
