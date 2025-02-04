import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productesSlide"
import recipesReducer from "./receiptsSlice"
import cartReducer from "./cartSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        recipes: recipesReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;