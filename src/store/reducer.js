import {ActionType} from './action';
import constants from '../constants/constants';
import offers from '../mocks/offers';
import {getCityOffers} from '../utils/utils';

const {CITIES} = constants;

const initialState = {
  offers,
  cityOffers: getCityOffers(CITIES.PARIS),
  activeCity: CITIES.PARIS,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: payload
      };
    case ActionType.CREATE_OFFERS:
      return {
        ...state,
        cityOffers: getCityOffers(state.activeCity),
      };
    default:
      return state;
  }
};

export {reducer};
