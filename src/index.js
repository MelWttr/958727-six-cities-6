import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const settings = {
  cardItems: offers,
  offersQuantity: 312,
};

ReactDom.render(
    <App
      cardItems={settings.cardItems} offersQuantity={settings.offersQuantity}
    />,
    document.querySelector(`#root`)
);
