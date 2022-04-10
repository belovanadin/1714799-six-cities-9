import { createSlice } from '@reduxjs/toolkit';
import {NameSpace, defaultCity} from '../../const';
import { City } from '../../types/city';
import { SortType } from '../../const';

type InitialStateType = {
  currentCity: City;
  sortType: string;
  offerId: number;
}

const initialState: InitialStateType = {
  currentCity: defaultCity,
  sortType: SortType.Popular,
  offerId: 0,
};

export const offersProcess = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    setCity: (state, action) => {
      if (state.currentCity.name !== action.payload.name) {
        state.currentCity = action.payload;
      }
    },
    getOfferId: (state, action) => {
      state.offerId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {setCity, getOfferId, setSortType} = offersProcess.actions;
