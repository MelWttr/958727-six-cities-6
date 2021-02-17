import PropTypes from 'prop-types';

/* eslint-disable */

export default {
  id:                 PropTypes.number.isRequired,
  rating:             PropTypes.number.isRequired,
  title:              PropTypes.string.isRequired,
  isPremium:          PropTypes.bool.isRequired,
  price:              PropTypes.number.isRequired,
  isFavorite:         PropTypes.bool.isRequired,
  type:               PropTypes.string.isRequired,
  previewImage:       PropTypes.string.isRequired,
  imgWidth:           PropTypes.number.isRequired,
  imgHeight:          PropTypes.number.isRequired,
  infoWrapperClass:   PropTypes.string,
  imageWrapperClass:  PropTypes.string,
};
