import { defaultCity, SortType, AutorizationStatus } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, setOffersListAction, setNewReview, setSortPlaces, loadOffers, requireAutorization, setError, loadReviews, loadCurrentOffer, loadFavoriteOffers } from './action';
import { filterCity } from '../utils';
import { City } from '../types/city';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

type InitialStateType = {
  currentCity: City;
  filteredOffers: OfferType[];
  offers: OfferType[];
  reviews: ReviewType[];
  sortType: string;
  isDataLoaded: boolean;
  authorizationStatus: AutorizationStatus;
  error: string;
  currentOffer: OfferType | null;
  isOfferLoaded: boolean;
  isNearbyOffersLoaded: boolean;
  favoriteOffers: OfferType[];
}

const initialState: InitialStateType = {
  currentCity: defaultCity,
  filteredOffers: [],
  offers: [],
  reviews: [],
  sortType: SortType.Popular,
  isDataLoaded: false,
  authorizationStatus: AutorizationStatus.Auth,
  error: '',
  currentOffer: null,
  isOfferLoaded: false,
  isNearbyOffersLoaded: false,
  favoriteOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
      state.filteredOffers = filterCity(state.offers, action.payload);
    })
    .addCase(setOffersListAction, (state, action) => {
      state.offers = action.payload;
      state.isNearbyOffersLoaded = true;
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoaded = true;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export {reducer};
