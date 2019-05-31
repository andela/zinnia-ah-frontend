import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

// components
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import AuthenticationCard from '../components/presentationals/AuthenticationCard/AuthenticationCard';

// styles
import '../pages/Authentication.scss';

const AuthenticationLayout = ({ location }) => {
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
