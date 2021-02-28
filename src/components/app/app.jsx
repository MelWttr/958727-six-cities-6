import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import FavoritesFilled from '../favorites-filled/favorites-filled';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';

const App = ({cityOffers}) => {
  const favoriteOffers = cityOffers.filter((item) => {
    return item.isFavorite;
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesFilled
            favoriteOffers={favoriteOffers}
          />
        </Route>
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
  cityOffers: state.cityOffers,
});

export {App};
export default connect(mapStateToProps, null)(App);
