import React from 'react';

import Navbar from '../components/presentationals/Navbar.jsx';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration.jsx';
import AuthenticationCard from '../components/presentationals/AuthenticationCard.jsx';
import './Authentication.scss';

const AuthenticationLayout = () => {
  return (
    <div>
      <Navbar props={testNavbar} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration />
        <AuthenticationCard />
      </div>
    </div>
  );
};

let testNavbar = {
  profileUrl: '',
};

export default AuthenticationLayout;
