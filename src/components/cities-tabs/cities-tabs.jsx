import React from "react";
import PropTypes from "prop-types";
import City from "../city/city.jsx";

const CitiesTabs = ({cities}) => {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(cities).map((city, index) => <City
            key={`${city}-${index}`}
            label={city}
          />
          )}
        </ul>
      </section>
    </div>
  );
};

/* eslint-disable */
CitiesTabs.propTypes = {
  cities: PropTypes.object.isRequired,
};

export default CitiesTabs;
