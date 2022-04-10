import { createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { OfferType } from '../../types/offer';
import { ReviewType } from '../../types/review';

type InitialStateType = {
  offers: OfferType[];
  reviews: ReviewType[];
  isDataLoaded: boolean;
  currentOffer: OfferType | null;
  isOfferLoaded: boolean;
  isCurrentOfferLoaded: boolean;
}

const initialState: InitialStateType = {
  offers: [],
  currentOffer: null,
  reviews: [],
  isOfferLoaded: false,
  isDataLoaded: false,
  isCurrentOfferLoaded: false,
};

export const offersData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isOfferLoaded = true;
    },
    setNearbyOffers: (state, action) => {
      state.offers = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    },
    loadCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
      state.isCurrentOfferLoaded = true;
    },
    setNewReview: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadOffers, setNearbyOffers, loadReviews, loadCurrentOffer, setNewReview} = offersData.actions;
