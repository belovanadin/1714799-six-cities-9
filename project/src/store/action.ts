import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offer';
import { City } from '../types/city';
import { ReviewType } from '../types/review';

export const changeCityAction = createAction<City>('main/changeCity');

export const setOffersListAction = createAction<OfferType[]>('main/setOffersList');

export const setNewReview = createAction<ReviewType[]>('main/review');

