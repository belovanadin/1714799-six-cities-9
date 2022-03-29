import {OfferType} from '../src/types/offer';

const PERC_STAR = 20;

export default function getPercRating(rating: number) {
  return Math.round(rating)*PERC_STAR;
}

const getCurrentOffers = (currentCity: string, offersList: OfferType[]) => offersList.filter(({city}) => city.name === currentCity);
export {getCurrentOffers};
