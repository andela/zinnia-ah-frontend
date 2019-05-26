import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getToken } from '../../../api/helpers';
const AuthWrapper = ({ component: Component, location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        getToken() !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

AuthWrapper.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object,
};

export default connect(
  null,
  {},
)(AuthWrapper);
