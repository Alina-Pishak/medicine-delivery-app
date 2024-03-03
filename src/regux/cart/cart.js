import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.cart.findIndex((drug) => drug.id === payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1, {
          ...payload,
          quantity: state.cart[index].quantity + 1,
        });
        return;
      }
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((cart) => cart.id !== payload);
    },
    updateQuantity: (state, { payload }) => {
      const index = state.cart.findIndex((drug) => drug.id === payload.id);
      state.cart.splice(index, 1, {
        ...state.cart[index],
        quantity: payload.quantity,
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const cartReducer = slice.reducer;
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  slice.actions;
