import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem("cart", state.products);
        }
    }
})

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;