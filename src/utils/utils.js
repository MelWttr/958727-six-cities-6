export const getCityOffers = (state) => state.offers.filter((offer) => offer.city.name === state.activeCity);

export const getFavoriteOffers = (state) => getCityOffers(state).filter((offer) => offer.is_favorite);
