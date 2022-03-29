export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Offer = '/offer',
  NotFound = '/*'
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export const WIDTH_MARKER = 40;
export const HEIGHT_MARKER = 40;
export const ANCHOR_MARKER = 20;

export const URL_MARKER_DEFAULT = '../public/img/pin.svg';
export const URL_MARKER_CURRENT = '../public/img/pin-active.svg';

export const citiesList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const defaultCity = 'Paris';

export enum MainCardClasses {
  ListClass = 'cities__places-list tabs__content',
  CardClass = 'cities__place-card',
  ImageWrapper = 'cities__image-wrapper',
}
