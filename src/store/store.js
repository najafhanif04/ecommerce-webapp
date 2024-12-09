import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./addToCart/cartSlice"

export default configureStore({
  reducer: {
    cart: cartSlice,
  }
})