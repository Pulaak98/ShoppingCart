import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0
};

const CartSystem = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const find = state.cart.findIndex(product => product.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                const tempState = { ...action.payload, quantity: 1 };
                state.cart.push(tempState);
            }
        },
        RemoveCart: (state, action) => {
            const find = state.cart.findIndex(product => product.id === action.payload.id);
            if (action.payload.quantity > 1) {
                state.cart[find].quantity -= 1;
            } else {
                state.cart = state.cart.filter(x => x.id !== action.payload.id);
            }

        }


    }
});

export const { AddCart, RemoveCart } = CartSystem.actions;
export default CartSystem.reducer;