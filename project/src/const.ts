export const WIDTH_MARKER = 40;
export const HEIGHT_MARKER = 40;
export const ANCHOR_MARKER = 20;

export const URL_MARKER_DEFAULT = '../public/img/pin.svg';
export const URL_MARKER_CURRENT = '../public/img/pin-active.svg';

export const RATING_VALUES = [5, 4, 3, 2, 1];

export enum RatingName {
  'Terribly',
  'Badly',
  'Not bad',
  'Good',
  'Perfect',
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Offer = '/offer',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export const citiesList = [
  {
    name: 'Paris',
    location: {
      latitude: 48.857747,
      longitude: 2.294513,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

export const defaultCity = citiesList[0];

export enum MainCardClasses {
  ListClass = 'cities__places-list tabs__content',
  CardClass = 'cities__place-card',
  ImageWrapper = 'cities__image-wrapper',
}

export const MAIN_MAP_HEIGHT = {height: '780px'};
export const PROPERTY_MAP_HEIGHT = {height: '579px'};

export const SortType = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  Rating: 'Top rated first',
};

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
}

export enum HttpCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const MONTHS_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Octover',
  'November',
  'December',
];
export const PERCENT_PER_STAR = 20;
export const MAX_REVIEWS_COUNT = 10;

export enum CardTypes {
  Main = 'cities',
  Favorites = 'favorites',
  Nearby = 'near-places',
}

export enum NameSpace {
  data = 'DATA',
  offers = 'OFFERS',
  user = 'USER',
  favorites = 'FAVORITES',
}
