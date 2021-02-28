export const ActionType = {
  CHANGE_CITY: `offer/changeCity`,
  CREATE_OFFERS: `offer/createOffersList`
};

export const ActionCreator = {
  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: currentCity,
  }),
  createOffersList: () => ({
    type: ActionType.CREATE_OFFERS,
  }),
};
