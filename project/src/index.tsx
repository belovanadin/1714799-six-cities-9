import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  COUNT_OFFER: 323,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      countOffer = {Setting.COUNT_OFFER}
    />
  </React.StrictMode>,
  document.getElementById('root'));
