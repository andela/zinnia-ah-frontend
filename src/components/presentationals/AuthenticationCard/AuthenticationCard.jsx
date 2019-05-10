import React from 'react';
import { Tab } from 'semantic-ui-react';

// components
import Button from '../Button/Button';
import Image from '../Image/Image';
import Title from '../../presentationals/Title/Title';
import SignupForm from '../../Register/Register';

// styles
import './AuthenticationCard.scss';
import '../../presentationals/Form.scss';

// images
import GoogleIcon from '../../../assets/images/google-icon.svg';
import FacebookIcon from '../../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../../assets/images/twitter-icon.svg';

const panes = [
  {
    menuItem: 'Sign Up',
    render: () => (
      <Tab.Pane attached={false}>
        <SignupForm />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Login',
    render: () => (
      <Tab.Pane attached={false}>
        <form className="form">
          <div className="form-group">
            <input className="form-control" placeholder="Username or Email" />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-red">
              Forgot Password?
            </a>
          </div>
          <Button type="submit" value="CONTINUE" className="btn-dark" />
        </form>
        <div className="d-flex or-div">
          <hr className="hr" />
          <p className="or">OR</p>
          <hr className="hr" />
        </div>
        <div className="icon-container">
          <div className="icon-card">
            <Image src={GoogleIcon} />
          </div>
          <div className="icon-card">
            <Image src={FacebookIcon} />
          </div>
          <div className="icon-card">
            <Image src={TwitterIcon} />
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];

const AuthenticationCard = () => {
  return (
    <div className="right">
      <div className="auth-card">
        <Title content="Become an Author" className="text-center" />
        <hr className="hr" />
        <Tab
          className="tab-label"
          menu={{ secondary: true, pointing: true }}
          panes={panes}
        />
      </div>
    </div>
  );
};

export default AuthenticationCard;
