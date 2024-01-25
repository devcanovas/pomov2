import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../redux/settingsSlice"

export const store = configureStore({
    reducer: {
        settings: settingsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    }
)