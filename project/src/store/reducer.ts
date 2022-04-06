import { defaultCity, SortType, AutorizationStatus } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, setOffersListAction, setNewReview, setSortPlaces, loadOffers, requireAutorization } from './action';
import { filterCity } from '../utils';
import { City } from '../types/city';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

type InitialStateType = {
  currentCity: City,
  filteredOffers: OfferType[],
  offers: OfferType[],
  reviews: ReviewType[],
  sortType: string,
  isDataLoaded: boolean,
  authorizationStatus: AutorizationStatus,
}

const initialState: InitialStateType = {
  currentCity: defaultCity,
  filteredOffers: [],
  offers: [],
  reviews: [],
  sortType: SortType.Popular,
  isDataLoaded: false,
  authorizationStatus: AutorizationStatus.Auth,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
      state.filteredOffers = filterCity(state.offers, action.payload);
    })
    .addCase(setOffersListAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setNewReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSortPlaces, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAutorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
