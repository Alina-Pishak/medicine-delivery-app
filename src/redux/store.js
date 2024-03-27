import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { drugsApi } from "./drugs/drugs";
import { ordersApi } from "./orders/orders";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "state",
  storage,
  blacklist: ["drugs"],
};

const rootReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(drugsApi.middleware)
      .concat(ordersApi.middleware),
});

export const persistor = persistStore(store);
