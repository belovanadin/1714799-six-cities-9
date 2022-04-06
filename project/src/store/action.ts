import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer';
import { City } from '../types/city';
import { ReviewType } from '../types/review';
import { AutorizationStatus } from '../const';


export const changeCityAction = createAction<City>('main/changeCity');

export const setOffersListAction = createAction<OfferType[]>('main/setOffersList');

export const setNewReview = createAction<ReviewType[]>('main/review');

export const setSortPlaces = createAction<string>('main/setSortType');

export const loadOffers = createAction<OfferType[]>('data/loadOffers');

export const requireAutorization = createAction<AutorizationStatus>('user/requireAutorization');
