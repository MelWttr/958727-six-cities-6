function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return {[newKey]: obj[key]};
  });
  return Object.assign({}, ...keyValues);
}

export const adaptOffer = (serverOfferData) => {
// eslint-disable-next-line
  const offerKeys = {is_favorite: `isFavorite`, is_premium: `isPremium`, max_adults: `maxAdults`, preview_image: `previewImage`};
  // eslint-disable-next-line
  const offerHostKeys = {avatar_url: `avatarUrl`, is_pro: `isPro`};
  const offers = renameKeys(serverOfferData, offerKeys);
  offers.host = renameKeys(offers.host, offerHostKeys);
  return offers;
};

export const adaptOffers = (serverOffersData) => {
  return serverOffersData.map((offerData) => {
    return adaptOffer(offerData);
  });
};
