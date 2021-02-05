import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const {isMarked = false, cardLink = `#`, price, isInBookmarks, starsWidth, placeName, type, imgSrc} = props;
  const IMG_WIDTH = 260;
  const IMG_HEIGHT = 200;
  const ICON_WIDTH = 18;
  const ICON_HEIGHT = 19;
  let cardMark;
  if (isMarked) {
    cardMark = <div className="place-card__mark"><span>Premium</span></div>;
  }

  return (
    <article className="cities__place-card place-card">
      {cardMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={cardLink}>
          <img className="place-card__image" src={`img/${imgSrc}`} width={IMG_WIDTH} height={IMG_HEIGHT} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isInBookmarks ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={ICON_WIDTH} height={ICON_HEIGHT}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isInBookmarks ? `To bookmarks` : `In bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsWidth}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={cardLink}>{placeName}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  isMarked: PropTypes.bool,
  cardLink: PropTypes.string,
  price: PropTypes.number.isRequired,
  isInBookmarks: PropTypes.bool,
  starsWidth: PropTypes.number,
  type: PropTypes.string.isRequired,
  placeName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProductCard;
