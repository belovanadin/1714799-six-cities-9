import { OfferType } from '../src/types/offer';
import { City } from './types/city';

const PERC_STAR = 20;

export default function getPercRating(rating: number) {
  return Math.round(rating)*PERC_STAR;
}

const getCurrentOffers = (currentCity: string, offersList: OfferType[]) => offersList.filter(({city}) => city.name === currentCity);
export {getCurrentOffers};

export const filterCity = (offers: OfferType[], city: City) => offers.filter((offer) => offer.city.name === city.name);
