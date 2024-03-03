import { combineReducers } from "@reduxjs/toolkit";
import { ordersApi } from "./orders/orders";
import { drugsApi } from "./drugs/drugs";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart/cart";
import { favoritesReducer } from "./favorites/favorites";

// const persistConfig = {
//   key: "cart",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

export const reducer = combineReducers({
  [drugsApi.reducerPath]: drugsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});
