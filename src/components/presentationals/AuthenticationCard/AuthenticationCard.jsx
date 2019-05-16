import React from 'react';
import { Image } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Title from '../Title/Title.jsx';
import './AuthenticationCard.scss';
import '../Form.scss';
import LoginForm from '../../container/login/loginComponent';
import SignupForm from '../../container/Register/Register';
import GoogleIcon from '../../../assets/images/google-icon.svg';
import FacebookIcon from '../../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../../assets/images/twitter-icon.svg';

const googleUrl =
  'https://zinnia-ah-backend-staging.herokuapp.com/api/v1/auth/google';
const facebookUrl =
  'https://zinnia-ah-backend-staging.herokuapp.com/api/v1/auth/facebook';
const twitterUrl =
  'https://zinnia-ah-backend-staging.herokuapp.com/api/v1/auth/twitter';

const AuthenticationCard = ({ pathname }) => {
  const loginClass = pathname === '/login' ? 'active item' : 'item';
  const signupClass = pathname === '/signup' ? 'active item' : 'item';

  return (
    <div className="right">
      <ToastContainer autoClose={5000} />
      <div className="auth-card">
        <Title content="Become an Author" className="text-center" />
        <hr className="hr" />
        <div className="tab-label">
          <div className="ui pointing secondary menu">
            <Link className={signupClass} to="/signup">
              Sign Up
            </Link>
            <Link className={loginClass} to="/login">
              Login
            </Link>
          </div>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
          </Switch>
          <div className="d-flex or-div">
            <hr />
            <p className="or">OR</p>
            <hr />
          </div>
          <div className="icon-container">
            <a href={googleUrl}>
              <div className="icon-card" data-test="social-icon">
                <Image src={GoogleIcon} />
              </div>
            </a>
            <a href={facebookUrl}>
              <div className="icon-card" data-test="social-icon">
                <Image src={FacebookIcon} />
              </div>
            </a>
            <a href={twitterUrl}>
              <div className="icon-card" data-test="social-icon">
                <Image src={TwitterIcon} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthenticationCard.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default AuthenticationCard;
