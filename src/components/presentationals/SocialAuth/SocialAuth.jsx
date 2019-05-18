import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import qs from 'qs';

//modules
import {
  loginInitialize,
  socialSuccess,
  loginError,
} from '../../../store/modules/auth';

// components
import Loader from '../Loader/Loader';

//helpers
import { setToken, decodeToken } from '../../../api/helpers';

const SocialAuth = ({ location, history, ...props }) => {
  props.loginInitialize();

  const loader = (
    <Loader data-test="loader" size="large" text="redirecting, please wait" />
  );

  try {
    let query = location.search;
    query = query.replace('?', '');
    const { token, isNewRecord } = qs.parse(query);
    const { user } = decodeToken(token);
    const { username, email, id } = user;
    let message;

    isNewRecord === 'true'
      ? (message = `Hi, ${email}, Welcome to Authors Haven`)
      : (message = `Welcome Back ${username}`);

    history.push('/');
    toast.success(message);
    setToken(token);
    props.socialSuccess({ email, username, id });

    return loader;
  } catch (error) {
    const message = 'Authentication failed. Please try again';
    history.push('/login');
    toast.error(error.message);
    props.loginError([message]);
    return loader;
  }
};

export default connect(
  null,
  { loginInitialize, socialSuccess, loginError },
)(SocialAuth);
