import React, { Component } from 'react';
import { Image, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Button from '../presentationals/Button';
import '../presentationals/AuthenticationCard.scss';
import '../presentationals/Form.scss';
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import validator from '../../utils/formValidator.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userCredentials: { email: '', password: '' },
      validationErrors: '',
    };
  }

  formValidator = () => {
    const { userCredentials } = this.state;
    const validationErrors = validator(userCredentials);
    this.setState({ validationErrors });
    if (!validationErrors.length) {
      this.setState({ validationErrors: '' });
    }
  };

    this.props.loginUser(user);
  }

  userInputHandler = event => {
    const { userCredentials } = this.state;
    userCredentials[event.target.name] = event.target.value;
    this.setState({ userCredentials });
  };

  render() {
    const loginButtonValues = {
      type: 'submit',
      value: 'CONTINUE',
      class: 'btn-dark',
    };
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={this.props.auth.isLoading}>
          <Form.Field>
            <input
              className="negative"
              placeholder="Email"
              onChange={e => {
                this.formValidator();
                this.userInputHandler(e);
              }}
              onBlur={e => {
                this.formValidator();
                this.userInputHandler(e);
              }}
              value={this.state.userCredentials.username}
              name="email"
              required
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Password"
              type="password"
              onChange={e => {
                this.formValidator();
                this.userInputHandler(e);
              }}
              onBlur={e => {
                this.formValidator();
                this.userInputHandler(e);
              }}
              value={this.state.userCredentials.password}
              name="password"
              required
            />
          </Form.Field>
          <div className="text-right">
            <a href="/forgot-password" className="text-red">
              Forgot Password?
            </a>
          </div>
          {this.state.validationErrors.length > 0 && (
            <div className="ui negative message">
              {this.state.validationErrors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
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
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
