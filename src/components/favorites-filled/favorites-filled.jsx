import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card/product-card';

const FavoritesFilled = ({favoriteOffers}) => {
  const IMG_WIDTH = 150;
  const IMG_HEIGHT = 110;
  const IMAGE_WRAPPER_CLASS = `favorites__image-wrapper`;
  const INFO_WRAPPER_CLASS = `favorites__card-info`;
  const BLOCK_CLASS_NAME = `favorites__card`;
  const cityOffers = favoriteOffers.reduce((cities, offer) => {
    if (!cities[offer.city.name]) {
      cities[offer.city.name] = [offer];
    } else {
      cities[offer.city.name].push(offer);
    }
    return cities;
  }, {});

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              Object.entries(cityOffers).map(([city, offersArray], i) =>
                (<li className="favorites__locations-items" key={city + i}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offersArray.map((cityOffer, index) =>
                      <ProductCard
                        {...cityOffer}
                        key={cityOffer.id + index}
                        blockClassName={BLOCK_CLASS_NAME}
                        imgWidth={IMG_WIDTH}
                        imgHeight={IMG_HEIGHT}
                        IMAGE_WRAPPER_CLASS={IMAGE_WRAPPER_CLASS}
                        INFO_WRAPPER_CLASS={INFO_WRAPPER_CLASS}
                      />
                    )}
                  </div>
                </li>)
              )
            }
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesFilled.propTypes = {favoriteOffers: PropTypes.array.isRequired};

export default FavoritesFilled;
