import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "../services/animeApi";
import searchSlice from "../services/searchSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice,
        [animeApi.reducerPath]: animeApi.reducer
    }
})