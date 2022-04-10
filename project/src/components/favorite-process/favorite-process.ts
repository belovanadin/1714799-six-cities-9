import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const';
import {FavoriteOfferType} from '../../types/favorite-offer';

const INITIAL_FAVORITES: FavoriteOfferType[] = [];

const initialState = {
  favorites: INITIAL_FAVORITES,
  favoritesLoaded: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    fetchFavorites: (state, action) => {
      state.favorites = action.payload;
      state.favoritesLoaded = true;
    },
    setFavoriteLoading: (state) => {
      state.favoritesLoaded = false;
    },
  },
});

export const {fetchFavorites, setFavoriteLoading} = favoritesProcess.actions;
