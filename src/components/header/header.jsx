import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoutes, AuthorizationStatus} from '../../constants/constants';
import {adaptUserData} from '../../utils/adapter';

const Header = ({authorizationStatus, userData}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to={AppRoutes.MAIN}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              { isAuthorized ?
                <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.FAVOURITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img src={userData.avatarUrl} alt="аватар пользователя" />
                  </div>
                  <span className="header__user-name user__name">{userData.email}</span>
                </Link>
                :
                <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link> }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  userData: PropTypes.object,
  onLogoutClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userData: adaptUserData(state.userData),
});


export {Header};
export default connect(mapStateToProps)(Header);
