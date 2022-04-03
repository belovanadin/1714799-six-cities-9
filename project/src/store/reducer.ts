import {offers} from '../mocks/offers';
import {defaultCity} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, setOffersListAction, setNewReview} from './action';
import { reviews } from '../mocks/reviews';
import { filterCity } from '../utils';


const initialState = {
  currentCity: defaultCity,
  filteredOffers: filterCity(offers, defaultCity),
  offers: offers,
  reviews: reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffersListAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setNewReview, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
