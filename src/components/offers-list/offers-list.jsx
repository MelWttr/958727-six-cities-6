import React from 'react';
import ProductCard from '../product-card/product-card';
import PropTypes from 'prop-types';

const OffersList = (props) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => <ProductCard
        key={offer.id}
        isPremium={offer.isPremium}
        id={offer.id}
        price={offer.price}
        isFavorite={offer.isFavorite}
        rating={offer.rating}
        title={offer.title}
        type={offer.type}
        previewImage={offer.previewImage}
      />
      )}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array,
};

export default OffersList;
