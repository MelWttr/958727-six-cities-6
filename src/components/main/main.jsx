import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import CitiesTabs from '../cities-tabs/cities-tabs';
import Map from '../map/map';
import {Cities} from '../../constants/constants';
import {fetchOffers} from '../../store/action-api';
import {getCityOffers} from '../../utils/utils';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';

const Main = ({cityOffers, activeCity, isFetched, onLoadOffers}) => {
  const offersQuantity = cityOffers.length;

  useEffect(() => {
    if (!isFetched) {
      onLoadOffers();
    }
  }, [isFetched]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!offersQuantity ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs
          cities={Cities}
        />
        {isFetched ?
          <div className="cities">
            {offersQuantity ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${offersQuantity} places to stay in ${activeCity}`}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by&nbsp;</span>
                    <span className="places__sorting-type" tabIndex={0}>
                              Popular
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <OffersList offers={cityOffers}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map cityLocation={cityOffers[0].city.location} points={cityOffers}/>
                  </section>
                </div>
              </div>
              :
              <MainEmpty/>
            }
          </div>
          :
          <div className="container" style={{display: `flex`, justifyContent: `center`}}>
            <img src="../../../img/preloader.svg" alt="offers is loading" />
          </div>
        }

      </main>
    </div>
  );
};

/* eslint-disable */
Main.propTypes = {
  cityOffers:    PropTypes.array.isRequired,
  activeCity:    PropTypes.string.isRequired,
  isFetched:     PropTypes.bool.isRequired,
  onLoadOffers:  PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cityOffers: getCityOffers(state),
  activeCity: state.activeCity,
  isFetched:  state.isFetched,
});

const mapDispatchToprops = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchOffers());
  }
});



export {Main};
export default connect(mapStateToProps, mapDispatchToprops)(Main);

