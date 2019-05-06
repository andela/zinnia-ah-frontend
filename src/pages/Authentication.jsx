import React from 'react';

import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import AuthenticationCard from '../components/presentationals/AuthenticationCard/AuthenticationCard';
import '../pages/Authentication.scss';

const AuthenticationLayout = testNavbar => {
  return (
    <div>
      <Navbar props={testNavbar} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration className="illustration" />
        <AuthenticationCard />
      </div>
    </div>
  );
};

AuthenticationLayout.defaultProps = {
  testNavbar: {
    profileUrl: '',
  },
};

export default AuthenticationLayout;
