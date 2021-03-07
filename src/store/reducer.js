import {ActionType} from './action';
import {Cities, AuthorizationStatus} from '../constants/constants';
import {adaptOffers} from '../utils/adapter';

const initialState = {
  offers: [],
  activeCity: Cities.PARIS,
  isFetched: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffers(payload),
        isFetched: true
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: payload
      };

    default:
      return state;
  }
};

export {reducer};
