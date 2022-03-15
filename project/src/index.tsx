import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favoriteOffers } from './mocks/favoriteOffers';
import { reviews } from './mocks/reviews';

const Setting = {
  COUNT_OFFER: 323,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      countOffer = {Setting.COUNT_OFFER}
      offers={offers}
      reviews = {reviews}
      favoriteOffers = {favoriteOffers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
