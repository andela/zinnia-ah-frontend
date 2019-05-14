import React from 'react';

import Title from '../Title/Title';
import Button from '../Button/Button.jsx';
import '../AuthenticationCard/AuthenticationCard.scss';
import '../Form.scss';

const ForgotPasswordCard = () => {
  return (
    <div className="right">
      <div className="card forgot-password">
        <Title content="Forgot Password?" className="text-center" />
        <hr className="hr" />
        <p>
          Enter the email you used to sign up and we‘ll send you a password
          reset link
        </p>
        <form className="form">
          <div className="form-group">
            <input placeholder="Email" type="email" />
          </div>
          <Button type="submit" value="SEND EMAIL" className="btn-dark" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordCard;
