import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import Title from '../Title/Title';
import Button from '../Button/Button';

import '../AuthenticationCard/AuthenticationCard.scss';
import '../Form.scss';

const ResetPasswordCard = ({
  password,
  handleChange,
  validationErrors,
  handleSubmit,
}) => {
  return (
    <div className="right">
      <div className="auth-card reset-password">
        <Title content="Reset Password" className="text-center" />
        <hr className="hr" />
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input
              placeholder="New Password"
              type="password"
              onChange={handleChange}
              value={password}
              name="password"
            />
            {validationErrors.length > 0 && (
              <div className="ui negative message">
                {validationErrors.map(error => (
                  <p key={error}>{error}</p>
                ))}
              </div>
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
  handleChange: PropTypes.func.isRequired,
  validationErrors: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordCard;
