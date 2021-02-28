import offers from '../mocks/offers';

export const getCityOffers = (city) => offers.filter((offer) => offer.city.name === city);
