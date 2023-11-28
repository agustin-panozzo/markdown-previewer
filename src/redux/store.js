import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./slice";

const store = configureStore({
    reducer: {
        editor: textReducer
    }
})

export default store;