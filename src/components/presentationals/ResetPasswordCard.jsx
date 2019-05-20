import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import Title from './Title.jsx';
import Button from './Button.jsx';

import './AuthenticationCard.scss';
import './Form.scss';

const title = {
  content: 'Reset Password',
  className: 'text-center',
};

const buttonValues = {
  type: 'submit',
  value: 'RESET PASSWORD',
  className: 'btn-dark',
};

const errorStyle = {
  color: 'red',
  marginTop: '8px',
};

const ResetPasswordCard = ({
  password,
  confirmPassword,
  handleChange,
  names,
  errors,
  handleSubmit,
}) => {
  const {
    password: inputPassword,
    confirmPassword: inputConfirmPassword,
  } = names;
  const { password: errorPassword } = errors;
  return (
    <div className="right">
      <div className="card reset-password">
        <Title title={title} />
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input
              placeholder="New Password"
              type="password"
              onChange={handleChange}
              value={password}
              name={inputPassword}
            />
            {errorPassword && <span style={errorStyle}>{errorPassword}</span>}
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={handleChange}
              value={confirmPassword}
              name={inputConfirmPassword}
            />
            {errors.confirmPassword && (
              <span style={errorStyle}>{errors.confirmPassword}</span>
            )}
          </Form.Field>
          <Button button={buttonValues} />
        </Form>
      </div>
    </div>
  );
};

ResetPasswordCard.propTypes = {
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  names: PropTypes.object.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordCard;
