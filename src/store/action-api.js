
import {ActionCreator} from './action';
import {AppRoutes, ApiRoutes, AuthorizationStatus} from '../constants/constants';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoutes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoutes.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoutes.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserData(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoutes.MAIN)))
    .catch(() => {})
);
