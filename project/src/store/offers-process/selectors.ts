import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { City } from '../../types/city';

export const getCurrentCity = (state: State): City => state[NameSpace.Offers].currentCity;
export const getOffers = (state: State): number => state[NameSpace.Offers].offerId;
export const getSortType = (state: State): string => state[NameSpace.Offers].sortType;
