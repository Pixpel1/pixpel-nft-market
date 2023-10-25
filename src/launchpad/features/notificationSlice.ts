import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface notification {
    id: string | number;
    readStatus: boolean;
    message: string;
    type: string;
    icon: string | StaticImageData;
    iconLib: string | StaticImageData;
}
const initialState: notification[] = [];

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (state: notification[], action: { payload: notification }) => {
            const { id, message, icon, iconLib, type, readStatus } = action.payload;
            state.push({ id, message, icon, iconLib, type, readStatus });
        },
        setReadStatus: (state: notification[], action: { payload: notification }) => {
            const { id } = action.payload;
            state = state.filter((notification) => (notification.id === id ? (notification.readStatus = true) : null));
        },
        clearNotification: (state: notification[]) => {
            return {
                ...state,
                payload: null,
            };
        },
    },
});

export const { setNotification, setReadStatus, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
