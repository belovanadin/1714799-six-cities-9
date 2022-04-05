import { OfferType } from '../src/types/offer';
import { City } from './types/city';
import { SortType } from './const';

const PERC_STAR = 20;

export default function getPercRating(rating: number) {
  return Math.round(rating)*PERC_STAR;
}

const getCurrentOffers = (currentCity: string, offersList: OfferType[]) => offersList.filter(({city}) => city.name === currentCity);
export {getCurrentOffers};

export const filterCity = (offers: OfferType[], city: City) => offers.filter((offer) => offer.city.name === city.name);

export const sortingType = Object.values(SortType);

export const sortOffers = (offers: OfferType[], sortType: string) => {
  const sortedOffers = offers.slice();
  switch (sortType) {
    case SortType.Popular:
      return sortedOffers;
    case SortType.PriceUp:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case SortType.PriceDown:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case SortType.Rating:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    default:
      return sortedOffers;
  }
};
