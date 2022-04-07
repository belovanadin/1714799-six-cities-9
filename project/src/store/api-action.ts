import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store';
import { store } from '../store';
import { OfferType } from '../types/offer';
import { loadOffers } from './action';
import { APIRoute } from '../const';

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async() => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  },
);
