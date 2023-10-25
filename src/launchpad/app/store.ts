import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "@launchpad/features/notificationSlice";
import walletSlice from "@launchpad/features/walletSlice";

const store = configureStore({
    reducer: {
        notification: notificationReducer,
        wallet: walletSlice,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
