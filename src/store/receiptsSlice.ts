import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Recepie } from "../types/recepie.type";
import axios from "axios";

export const fetchRecipes = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    return response.data.recipes;
})

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: [] as Recepie[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (_, action) => {
            return action.payload
        })
    }
})

export default recipesSlice.reducer;