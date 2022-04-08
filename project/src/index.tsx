import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchOfferAction, checkAuthAction } from './store/api-action';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
