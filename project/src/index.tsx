import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { favoriteOffers } from './mocks/favorite-offers';
import { reviews } from './mocks/reviews';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        reviews = {reviews}
        favoriteOffers = {favoriteOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
