import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

let mockCardData = [
  {
    isMarked: true,
    price: 120,
    isInBookmarks: false,
    starsWidth: 80,
    placeName: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    imgSrc: `apartment-01.jpg`,
  },
  {
    price: 80,
    isInBookmarks: true,
    starsWidth: 80,
    placeName: `Wood and stone place`,
    type: `Private room`,
    imgSrc: `room.jpg`,

  },
  {
    price: 132,
    isInBookmarks: false,
    starsWidth: 80,
    placeName: `Canal View Prinsengracht`,
    type: `Apartment`,
    imgSrc: `apartment-02.jpg`,
  },
  {
    isMarked: true,
    price: 180,
    isInBookmarks: false,
    starsWidth: 100,
    placeName: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    imgSrc: `apartment-03.jpg`,
  },
  {
    price: 80,
    isInBookmarks: true,
    starsWidth: 80,
    placeName: `Wood and stone place`,
    type: `Private room`,
    imgSrc: `room.jpg`,
  },
];

const settings = {
  cardItems: mockCardData,
  offersQuantity: 312,
};

ReactDom.render(
    <App
      cardItems={settings.cardItems} offersQuantity={settings.offersQuantity}
    />,
    document.querySelector(`#root`)
);
