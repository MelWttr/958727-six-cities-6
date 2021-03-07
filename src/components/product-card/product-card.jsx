import {CARD_ICON_WIDTH, CARD_ICON_HEIGHT} from '../../constants/constants';
import React from 'react';
import {Link} from 'react-router-dom';
import cardProps from '../../props/card-props';


const ProductCard = (props) => {
  const {
    isPremium,
    id,
    price,
    isFavorite,
    rating,
    title,
    type,
    previewImage,
    imageWrapperClass = ``,
    infoWrapperClass = ``,
    imgWidth,
    imgHeight
  } = props;

  const {blockClassName} = props;
  let cardMark;
  const makeStarsWidth = (starRate) => Math.floor(starRate) * 20;

  if (isPremium) {
    cardMark = <div className="place-card__mark"><span>Premium</span></div>;
  }

  return (
    <article className={`${blockClassName} place-card`} data-id={id}>
      {cardMark}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={imgWidth} height={imgHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`${infoWrapperClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={CARD_ICON_WIDTH} height={CARD_ICON_HEIGHT}>
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
          <Link to={`offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

ProductCard.propTypes = cardProps;

export default ProductCard;
