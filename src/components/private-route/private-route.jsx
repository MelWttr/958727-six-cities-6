import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoutes} from '../../constants/constants';


const PrivateRoute = ({authorizationStatus, exact, render, path}) => (
  <Route
    path={path}
    exact={exact}
    render={(routeProps) =>
      authorizationStatus === AuthorizationStatus.AUTH
        ? render(routeProps)
        : <Redirect to={AppRoutes.LOGIN} />
    }
  />
);

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
