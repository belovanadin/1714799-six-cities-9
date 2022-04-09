import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer';
import { City } from '../types/city';
import { ReviewType } from '../types/review';
import { AppRoute, AutorizationStatus } from '../const';


export const changeCityAction = createAction<City>('main/changeCity');

export const setOffersListAction = createAction<OfferType[]>('main/setOffersList');

export const setNewReview = createAction<ReviewType[]>('main/review');

export const setSortPlaces = createAction<string>('main/setSortType');

export const loadOffers = createAction<OfferType[]>('data/loadOffers');

export const requireAutorization = createAction<AutorizationStatus>('user/requireAutorization');

export const loadCurrentOffer = createAction<OfferType | null>('data/loadCurrentOffer');

export const setError = createAction<string>('/setError');

export const redirectToRoute = createAction<AppRoute>('/redirectToRoute');

export const loadReviews = createAction<ReviewType[]>('data/loadReviews');

export const loadFavoriteOffers = createAction<OfferType[]>('data/loadFavoriteOffers');
