import React, {useState} from 'react';
import ProductCard from '../product-card/product-card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const OffersList = (props) => {
  const imgWidth = 260;
  const imgHeight = 200;
  const blockClassName = `cities__place-card`;
  const [activeCardId, setActiveId] = useState(null);

  const onMouseOverHandler = (evt) => {
    if (activeCardId) {
      return;
    }
    let activeCard = evt.target.closest(`[data-id]`);
    if (!activeCard) {
      return;
    }
    setActiveId(activeCard.dataset.id);
  };
  const onMouseOutHandler = (evt) => {
    if (!activeCardId) {
      return;
    }
    let relatedTarget = evt.relatedTarget;
    while (relatedTarget) {
      if (relatedTarget && relatedTarget.dataset && relatedTarget.dataset.id === activeCardId) {
        return;
      }
      relatedTarget = relatedTarget.parentNode;
    }
    setActiveId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content" onMouseOut={onMouseOutHandler}
      onMouseOver={onMouseOverHandler}>
      {props.cityOffers.map((offer) => <ProductCard
        {...offer}
        key={offer.id}
        blockClassName={blockClassName}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
      )}
    </div>
  );
};

OffersList.propTypes = {cityOffers: PropTypes.array};

const mapStateToProps = (state) => ({
  cityOffers: state.cityOffers
});

export {OffersList};
export default connect(mapStateToProps, null)(OffersList);
