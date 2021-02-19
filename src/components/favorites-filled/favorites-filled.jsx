import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card/product-card';

const FavoritesFilled = ({favoriteOffers}) => {
  const imgWidth = 150;
  const imgHeight = 110;
  const imageWrapperClass = `favorites__image-wrapper`;
  const infoWrapperClass = `favorites__card-info`;
  const BlockClassName = `favorites__card`;
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
                        blockClassName={BlockClassName}
                        imgWidth={imgWidth}
                        imgHeight={imgHeight}
                        imageWrapperClass={imageWrapperClass}
                        infoWrapperClass={infoWrapperClass}
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
