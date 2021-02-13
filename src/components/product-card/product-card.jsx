import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const {isPremium, id, price, isFavorite, rating, title, type, previewImage} = props;
  const IMG_WIDTH = 260;
  const IMG_HEIGHT = 200;
  const ICON_WIDTH = 18;
  const ICON_HEIGHT = 19;
  let cardMark;
  const makeStarsWidth = (starRate) => Math.floor(starRate) * 20;

  if (isPremium) {
    cardMark = <div className="place-card__mark"><span>Premium</span></div>;
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={props.}>
      {cardMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={`offer/:${id}`}>
          <img className="place-card__image" src={`img/${previewImage}`} width={IMG_WIDTH} height={IMG_HEIGHT} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={ICON_WIDTH} height={ICON_HEIGHT}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? `To bookmarks` : `In bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${makeStarsWidth(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`offer/:${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  isPremium: PropTypes.bool,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  starsWidth: PropTypes.number,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default ProductCard;
