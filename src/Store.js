import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "./Redux/CartSystem";

const store = configureStore({
    reducer: {
        cart: CartSystem
    }
});

export default store;