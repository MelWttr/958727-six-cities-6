import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router} from 'react-router-dom';
import FavoritesFilled from '../favorites-filled/favorites-filled';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';
import {getCityOffers} from '../../utils/utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../utils/history';
import {AppRoutes} from '../../constants/constants';

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
          <Main/>
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <SignIn/>
        </Route>
        <PrivateRoute exact path={AppRoutes.FAVORITES} render={() => <FavoritesFilled/>} />
        <Route exact path="/offer/:id?">
          <Room/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </Router>
  );
};

/* eslint-disable */

App.propTypes = {
  cityOffers:      PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cityOffers: getCityOffers(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
