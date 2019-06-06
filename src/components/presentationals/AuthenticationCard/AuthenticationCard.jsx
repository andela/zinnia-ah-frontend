import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Title from '../Title/Title.jsx';
import './AuthenticationCard.scss';
import '../Form.scss';
import LoginForm from '../../container/login/loginComponent';
import SignupForm from '../../container/Register/Register';
import GoogleIcon from '../../../assets/images/google-icon.svg';
import FacebookIcon from '../../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../../assets/images/twitter-icon.svg';
import Image from '../Image/Image';

import { FRONTEND_URL, HOST_URL } from '../../../config/config';

const googleUrl = `${HOST_URL}/auth/google?redirectTo=${FRONTEND_URL}/social-auth`;
const facebookUrl = `${HOST_URL}/auth/facebook?redirectTo=${FRONTEND_URL}/social-auth`;
const twitterUrl = `${HOST_URL}/auth/twitter?redirectTo=${FRONTEND_URL}/social-auth`;

const AuthenticationCard = ({ pathname }) => {
  const loginClass = pathname === '/login' ? 'active item' : 'item';
  const signupClass = pathname === '/signup' ? 'active item' : 'item';
  return (
    <div className="right">
      <div className="auth-card">
        {pathname === '/signup' ? (
          <Title content="Become an Author" className="text-center" />
        ) : (
          <Title content="Welcome Back" className="text-center" />
        )}
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
            <Route path="/login" render={props => <LoginForm {...props} />} />
            <Route path="/signup" render={props => <SignupForm {...props} />} />
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
