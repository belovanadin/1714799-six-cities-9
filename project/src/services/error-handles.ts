import request from 'axios';
import { ErrorType } from '../types/error';
import { HttpCode, AppRoute } from '../const';
import { toast } from 'react-toastify';
import { store } from '../store';
import { redirectToRoute } from '../store/action';

export const errorHandle = (error: ErrorType): void => {
  if(!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
  }
};
