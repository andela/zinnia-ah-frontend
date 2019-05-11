import React from 'react';

import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import ForgotPasswordCard from '../components/presentationals/ForgotPassword/ForgotPasswordCard';
import '../pages/Authentication.scss';

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
