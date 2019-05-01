import React from 'react';
import { Form } from 'semantic-ui-react';

import Title from './Title.jsx';
import Button from './Button.jsx';
import './AuthenticationCard.scss';
import './Form.scss';

const ForgotPasswordCard = () => {
  return (
    <div className="right">
      <div className="card forgot-password">
        <Title title={title} />
        <hr />
        <p>
          Enter the email you used to sign up and we‘ll send you a password
          reset link
        </p>
        <Form>
          <Form.Field>
            <input placeholder="Email" type="email" />
          </Form.Field>
          <Button button={buttonValues} />
        </Form>
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
