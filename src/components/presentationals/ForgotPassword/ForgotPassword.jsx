import React from 'react';

import Title from '../Title/Title';
import Button from '../Button/Button.jsx';
import '../AuthenticationCard/AuthenticationCard.scss';
import '../Form.scss';

const ForgotPasswordCard = () => {
  return (
    <div className="right">
      <div className="card forgot-password">
        <Title title={title} />
        <hr className="hr" />
        <p>
          Enter the email you used to sign up and we‘ll send you a password
          reset link
        </p>
        <form className="form">
          <div className="form-group">
            <input placeholder="Email" type="email" />
          </div>
          <Button button={buttonValues} />
        </form>
      </div>
    </div>
  );
};

const title = {
  content: 'Forgot Password?',
  class: 'text-center',
};

const buttonValues = {
  type: 'submit',
  value: 'SEND EMAIL',
  class: 'btn-dark',
};

export default ForgotPasswordCard;
