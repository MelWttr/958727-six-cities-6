export const ActionType = {
  CHANGE_CITY: `offer/changeCity`,
  LOAD_OFFERS: `offer/loadOffers`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
};

export const ActionCreator = {
  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: currentCity,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
};
