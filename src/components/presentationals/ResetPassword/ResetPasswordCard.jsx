/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import Title from '../Title/Title.jsx';
import Button from '../Button/Button.jsx';

import '../AuthenticationCard/AuthenticationCard.scss';
import '../Form.scss';

const errorStyle = {
  color: 'red',
  marginTop: '8px',
};

const ResetPasswordCard = ({
  password,
  confirmPassword,
  handleChange,
  errors,
  handleSubmit,
}) => {
  const {
    password: errorPassword,
    confirmPassword: errorConfirmPassword,
  } = errors;

  return (
    <div className="right">
      <div className="card reset-password">
        <Title content="Reset Password" className="text-center" />
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input
              placeholder="New Password"
              type="password"
              onChange={handleChange}
              value={password}
              name="password"
            />
            {errorPassword && <span style={errorStyle}>{errorPassword}</span>}
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={handleChange}
              value={confirmPassword}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <span style={errorStyle}>{errorConfirmPassword}</span>
            )}
          </Form.Field>
          <Button type="submit" value="RESET PASSWORD" className="btn-dark" />
        </Form>
      </div>
    </div>
  );
};

ResetPasswordCard.propTypes = {
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordCard;
