import React from 'react';
import PropTypes from 'prop-types';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import AuthenticationCard from '../components/presentationals/AuthenticationCard/AuthenticationCard';

// styles
import '../pages/Authentication.scss';

const AuthenticationLayout = ({ profileUrl }) => {
  return (
    <div>
      <Navbar profileUrl={profileUrl} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration className="illustration" />
        <AuthenticationCard />
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

export default AuthenticationLayout;
