import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

// components
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import AuthenticationCard from '../components/presentationals/AuthenticationCard/AuthenticationCard';

// styles
import '../pages/Authentication.scss';
import { setItem, getItem } from '../utils/helpers';

const AuthenticationLayout = ({ location }) => {
  if (!getItem('redirectUrl')) {
    let pathname;
    location.state
      ? (pathname = location.state.from.pathname)
      : (pathname = '/');
    setItem('redirectUrl', pathname);
  }
  return (
    <div>
      <ToastContainer autoClose={4000} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration className="illustration" />
        <AuthenticationCard pathname={location.pathname} />
      </div>
    </div>
  );
};

AuthenticationLayout.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AuthenticationLayout;
