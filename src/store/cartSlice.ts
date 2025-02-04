import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types/cart.types";

const initialState: CartState = {
    items: [],
    isOpen: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantitiy++;
            } else {
                state.items.push({ ...action.payload, quantitiy: 1 });
            }
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
})

export const { addToCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
