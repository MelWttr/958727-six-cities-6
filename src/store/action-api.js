
import {ActionCreator} from './action';
import {Routes, AuthorizationStatus} from '../constants/constants';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(Routes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Routes.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
