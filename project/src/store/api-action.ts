import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store';
import { store } from '../store';
import { OfferType } from '../types/offer';
import { loadOffers, loadCurrentOffer, requireAutorization, setError, redirectToRoute } from './action';
import { APIRoute, AppRoute, AutorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/data';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/data';
import { errorHandle } from '../services/error-handles';

export const clearErrorAction = createAsyncThunk(
  '/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async() => {
    try {
      const {data} = await api.get<OfferType[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadCurrentOfferAction = createAsyncThunk(
  'data/loadCurrentOffer',
  async(id: number) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    store.dispatch(loadCurrentOffer(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAutorization(AutorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAutorization(AutorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAutorization(AutorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAutorization(AutorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAutorization(AutorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
