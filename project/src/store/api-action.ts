import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store';
import { store } from '../store';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';
import { redirectToRoute } from './action';
import { requireAuthorization } from './user-process/user-process';
import {loadOffers, setNearbyOffers, loadReviews, loadCurrentOffer, setNewReview, fetchFavorites} from './offers-data/offers-data';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handles';
import { ReviewTypeData } from '../types/review';
//import { fetchFavorites } from '../components/favorite-process/favorite-process';
import { FavoriteFlagType } from '../types/favorite-offer';

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
    try{
      const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadCurrentOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/fetchNearbyOffers',
  async (id: number) => {
    try {
      const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      store.dispatch(setNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: number) => {
    try {
      const {data} = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSendReview = createAsyncThunk(
  'data/fetchSendReviews',
  async ({id, comment, rating}: ReviewTypeData) => {
    try {
      const {data} = await api.post<ReviewType[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      store.dispatch(setNewReview(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadFavoriteAction = createAsyncThunk(
  'data/favorite',
  async () => {
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
      store.dispatch(fetchFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);


export const toggleFavoriteAction = createAsyncThunk(
  'data/toggleFavorite',
  async ({ id, flag }: FavoriteFlagType) => {
    try {
      await api.post<OfferType[]>(`${APIRoute.Favorite}/${id}/${flag}`);
      store.dispatch(loadFavoriteAction());
    } catch (error) {
      errorHandle(error);
    }
  },
);
