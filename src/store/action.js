export const ActionType = {
  CHANGE_CITY: `offer/changeCity`,
  LOAD_OFFERS: `offer/loadOffers`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  REDIRECT_TO_ROUTE: `middlewares/redirectToRoute`,
  SET_USER_DATA: `user/login`,
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
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  setUserData: (data) => ({
    type: ActionType.SET_USER_DATA,
    payload: data
  }),
};
