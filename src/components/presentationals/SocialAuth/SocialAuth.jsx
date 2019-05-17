/* eslint-disable no-console */
import { connect } from 'react-redux';
import jsonwebtoken from 'jsonwebtoken';
import { toast } from 'react-toastify';

import {
  socialSuccess,
  loginInitialize,
  loginError,
} from '../../../store/modules/auth';
import { setToken } from '../../../api/helpers';

const SocialAuth = ({ location, history }) => {
  loginInitialize();

  try {
    let query = location.search;
    query = query.replace('?', '');
    query = query.split('&');
    let queryObj = {};

    query.forEach(item => {
      const array = item.split('=');
      queryObj[array[0]] = array[1];
    });

    const { token, isNewRecord } = queryObj;

    const { user } = jsonwebtoken.decode(token);

    const { username, email, id } = user;

    let message;

    isNewRecord === 'true'
      ? (message = `Hi, ${email} \n Welcome to Authors Haven`)
      : (message = `Welcome Back ${username}`);

    history.push('/');

    toast.success(message);
    setToken(token);

    socialSuccess({ email, username, id });

    return null;
  } catch (error) {
    const message = 'Authentication failed. Please try again';
    history.push('/login');
    toast.error(message);
    loginError(message);
    return null;
  }
};

const mapStateToProps = state => ({ isLoading: state.auth.isLoading });

const mapDispatchToProps = dispatch => ({
  loginInitialize: () => dispatch(loginInitialize()),
  socialSuccess: user => dispatch(socialSuccess(user)),
  loginError: message => dispatch(loginError(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialAuth);
