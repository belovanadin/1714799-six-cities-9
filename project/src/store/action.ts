import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offer';

const changeCityAction = createAction<string>('main/changeCity');

const setOffersListAction = createAction<OfferType[]>('main/setOffersList');

export {changeCityAction, setOffersListAction};
