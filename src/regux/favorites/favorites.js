import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favoriteId) => favoriteId !== payload
      );
    },
  },
});

export const favoritesReducer = slice.reducer;
export const { addToFavorites, removeFromFavorites } = slice.actions;
