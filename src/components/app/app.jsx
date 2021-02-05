import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cardItems, offersQuantity} = props;

  return (
    <MainPage cardItems={cardItems} offersQuantity={offersQuantity} />
  );
};

App.propTypes = {
  cardItems: PropTypes.array,
  offersQuantity: PropTypes.number
};

export default App;
