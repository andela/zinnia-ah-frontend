import React from 'react';

import Navbar from '../components/presentationals/Navbar.jsx';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration.jsx';
import ResetPasswordCard from '../components/presentationals/ResetPasswordCard.jsx';
import './Authentication.scss';

const ResetPassword = () => {
  return (
    <div>
      <Navbar props={testNavbar} />
      <div className="d-flex auth-container">
        <AuthenticationIllustration />
        <ResetPasswordCard />
      </div>
    </div>
  );
};

let testNavbar = {
  profileUrl: '',
};

export default ResetPassword;
