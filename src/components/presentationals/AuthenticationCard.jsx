/* eslint-disable react/display-name */
import React from 'react';
import { Tab, Image, Form } from 'semantic-ui-react';

import Title from './Title.jsx';
import Button from './Button.jsx';
import './AuthenticationCard.scss';
import './Form.scss';
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';

const panes = [
  {
    menuItem: 'Sign Up',
    render: () => (
      <Tab.Pane attached={false}>
        <Form>
          <Form.Field>
            <input placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Email" type="email" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Button button={signupButtonValues} />
        </Form>
        <div className="d-flex or-div">
          <hr />
          <p className="or">OR</p>
          <hr />
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
  {
    menuItem: 'Login',
    render: () => (
      <Tab.Pane attached={false}>
        <Form>
          <Form.Field>
            <input placeholder="Username or Email" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <div className="text-right">
            <a href="/forgot-password" className="text-red">
              Forgot Password?
            </a>
          </div>
          <Button button={loginButtonValues} />
        </Form>
        <div className="d-flex or-div">
          <hr />
          <p className="or">OR</p>
          <hr />
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

const signupButtonValues = {
  type: 'submit',
  value: 'GET STARTED',
  class: 'btn-dark',
};
const loginButtonValues = {
  type: 'submit',
  value: 'CONTINUE',
  class: 'btn-dark',
};

const AuthenticationCard = () => {
  return (
    <div className="right">
      <div className="card">
        <Title title={title} />
        <hr />
        <Tab
          className="tab-label"
          menu={{ secondary: true, pointing: true }}
          panes={panes}
        />
      </div>
    </div>
  );
};

const title = {
  content: 'Become an Author',
  class: 'text-center',
};

export default AuthenticationCard;
