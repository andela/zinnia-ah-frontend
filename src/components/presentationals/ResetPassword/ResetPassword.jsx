import React from 'react';
import { Form } from 'semantic-ui-react';

import Title from '../Title/Title';
import Button from '../Button/Button';
import '../AuthenticationCard/AuthenticationCard.scss';
import '../Form.scss';

const ForgotPasswordCard = () => {
  return (
    <div className="right">
      <div className="card reset-password">
        <Title title={title} />
        <hr />
        <Form>
          <Form.Field>
            <input placeholder="New Password" type="password" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Confirm Password" type="password" />
          </Form.Field>
          <Button button={buttonValues} />
        </Form>
      </div>
    </div>
  );
};

const title = {
  content: 'Reset Password',
  class: 'text-center',
};

const buttonValues = {
  type: 'submit',
  value: 'RESET PASSWORD',
  class: 'btn-dark',
};

export default ForgotPasswordCard;
