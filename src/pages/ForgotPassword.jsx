import React from 'react';

import Navbar from '../components/presentationals/Navbar.jsx';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration.jsx';
import ForgotPasswordCard from '../components/presentationals/ForgotPasswordCard.jsx';
import './Authentication.scss';

const ForgotPassword = () => {
  return (
    <div>
      <Navbar props={testNavbar} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration />
        <ForgotPasswordCard />
      </div>
    </div>
  );
};

let testNavbar = {
  profileUrl: '',
};

export default ForgotPassword;
