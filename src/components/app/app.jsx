import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import FavoritesFilled from '../favorites-filled/favorites-filled';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';

const App = ({cardItems, offersQuantity}) => {
  const favoriteOffers = cardItems.filter((item) => {
    return item.isFavorite;
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main cardItems={cardItems} offersQuantity={offersQuantity} />
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
  cardItems:      PropTypes.array.isRequired,
  offersQuantity: PropTypes.number.isRequired,
};

export default App;
