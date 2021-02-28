import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const City = ({label, activeCity, onCityChange}) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    const currentCityName = evt.target.innerText;
    onCityChange(currentCityName);
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeCity === label && `tabs__item--active`}`}
        onClick={handleClick}
      >
        <span>{label}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  label: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.createOffersList());
  },
});

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);
