import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import FavouritesFilled from '../favourites-filled/favourites-filled';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';

const App = (props) => {
  const {cardItems, offersQuantity} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main cardItems={cardItems} offersQuantity={offersQuantity} />
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favourites">
          <FavouritesFilled/>
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

App.propTypes = {
  cardItems: PropTypes.array,
  offersQuantity: PropTypes.number
};

export default App;
