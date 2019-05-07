import React from 'react';
import { Tab, Form } from 'semantic-ui-react';

// components
import Button from '../Button/Button';
import Image from '../Image/Image';
import Title from '../../presentationals/Title/Title';
import SignupForm from '../../../pages/Register/Register';

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
      <div className="card">
        <Title title={title} />
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

const title = {
  content: 'Become an Author',
  class: 'text-center',
};

const loginButtonValues = {
  type: 'submit',
  value: 'CONTINUE',
  class: 'btn-dark',
};

export default AuthenticationCard;
