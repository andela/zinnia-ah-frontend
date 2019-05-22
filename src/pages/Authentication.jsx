import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import AuthenticationCard from '../components/presentationals/AuthenticationCard/AuthenticationCard';

// styles
import '../pages/Authentication.scss';

const AuthenticationLayout = ({ profileUrl, location }) => {
  return (
    <div>
      <ToastContainer autoClose={4000} />
      <Navbar profileUrl={profileUrl} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration className="illustration" />
        <AuthenticationCard pathname={location.pathname} />
      </div>
    </div>
  );
};

AuthenticationLayout.propTypes = {
  profileUrl: PropTypes.string,
};

AuthenticationLayout.defaultProps = {
  profileUrl: '',
};

AuthenticationLayout.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AuthenticationLayout;
