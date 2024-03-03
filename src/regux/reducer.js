import { combineReducers } from "@reduxjs/toolkit";
import { ordersApi } from "./orders/orders";
import { drugsApi } from "./drugs/drugs";
import { cartReducer } from "./cart/cart";
import { favoritesReducer } from "./favorites/favorites";

export const reducer = combineReducers({
  [drugsApi.reducerPath]: drugsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});
