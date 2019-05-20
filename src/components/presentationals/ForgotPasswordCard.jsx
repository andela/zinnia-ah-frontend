import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import Title from './Title.jsx';
import Button from './Button.jsx';

import './AuthenticationCard.scss';
import './Form.scss';

const title = {
  content: 'Forgot Password?',
  className: 'text-center',
};

const buttonValues = {
  type: 'submit',
  value: 'SEND EMAIL',
  className: 'btn-dark',
};

const ForgotPasswordCard = ({ email, onChange, name, submitRequest }) => {
  return (
    <div className="right">
      <div className="card forgot-password">
        <Title title={title} />
        <hr />
        <p>
          Enter the email you used to sign up and we‘ll send you a password
          reset link
        </p>
        <Form onSubmit={submitRequest}>
          <Form.Field>
            <input
              placeholder="Email"
              name={name}
              type="email"
              value={email}
              onChange={onChange}
            />
          </Form.Field>
          <Button button={buttonValues} />
        </Form>
      </div>
    </div>
  );
};

ForgotPasswordCard.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  submitRequest: PropTypes.func.isRequired,
};

export default ForgotPasswordCard;
