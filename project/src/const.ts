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

export const URL_MARKER_DEFAULT = '../public/img/pin.svg';
export const URL_MARKER_CURRENT = '../public/img/pin-active.svg';
