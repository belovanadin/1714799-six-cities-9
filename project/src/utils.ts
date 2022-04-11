import { OfferType } from './types/offer';
import { City } from './types/city';
import { citiesList, SortType, MAX_REVIEWS_COUNT } from './const';
import { ReviewType } from './types/review';

const PERCENT = 100;
const MAX_RATING = 5;

export default function getPercRating(rating: number) {
  return Math.round(rating / MAX_RATING * PERCENT);
}

const getCurrentOffers = (currentCity: string, offersList: OfferType[]) => offersList.filter(({city}) => city.name === currentCity);
export {getCurrentOffers};

export const filterCity = (offers: OfferType[], city: City) => offers.filter((offer) => offer.city.name === city.name);

export const typeOfSort = Object.values(SortType);

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

export const lengthOfReviews = (array: ReviewType[]) => {
  if (array.length > 10) {
    return array.slice(0, MAX_REVIEWS_COUNT);
  }
  return array;
};

export const sortReviewsDate = (array: ReviewType[]) => {
  if (array.length < 2) {
    return array;
  }
  const newArray = array.slice();
  return newArray.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
};

export const randomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomCity = () => {
  const indexOfArray = citiesList.length - 1;
  const index = randomInteger(0, indexOfArray);
  return citiesList[index];
};
