import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import Title from '../Title/Title';
import Button from '../Button/Button';

import '../AuthenticationCard/AuthenticationCard.scss';
import '../Form.scss';

const ForgotPasswordCard = ({ email, onChange, submitRequest }) => {
  return (
    <div className="right">
      <div className="auth-card forgot-password">
        <Title content="Forgot Password?" className="text-center" />
        <hr className="hr" />
        <p>
          Enter the email you used to sign up and we‘ll send you a password
          reset link
        </p>
        <Form onSubmit={submitRequest}>
          <Form.Field>
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
            />
          </Form.Field>
          <Button
            type="submit"
            value="SEND INSTRUCTIONS"
            className="btn-dark"
          />
        </Form>
      </div>
    </div>
  );
};

ForgotPasswordCard.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
  submitRequest: PropTypes.func,
};

export default ForgotPasswordCard;
