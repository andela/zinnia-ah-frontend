import React from 'react';

import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import ResetPasswordCard from '../components/presentationals/ResetPassword/ResetPassword';
import '../pages/Authentication.scss';

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
  url: '',
  class: '',
};

export default ResetPassword;
