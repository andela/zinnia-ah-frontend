/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Image, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signupUser } from '../../store/actions/authActions';

import Button from '../../components/presentationals/Button';
import '../../components/presentationals/AuthenticationCard.scss';
import '../../components/presentationals/Form.scss';
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import validator from '../../utils/formValidator';

class Signup extends Component {
  state = {
    userCredentials: {
      email: '',
      password: '',
      username: '',
    },
    validationErrors: '',
  };

  userInputHandler = event => {
    const { userCredentials } = this.state;
    userCredentials[event.target.name] = event.target.value;
    this.setState({ userCredentials });
  };

  formValidator = () => {
    const { userCredentials } = this.state;
    const validationErrors = validator(userCredentials);
    this.setState({ validationErrors });
    if (!validationErrors.length) {
      this.setState({ validationErrors: '' });
    }
  };

  submitForm = event => {
    event.preventDefault();
    this.props.signupUser({ ...this.state.userCredentials });
  };

  render() {
    const signupButtonValues = {
      type: 'submit',
      value: 'GET STARTED',
      class: 'btn-dark',
    };
    const { auth } = this.props;
    return (
      <div>
        <Form loading={auth.isLoading}>
          <Form.Field>
            <input
              className="negative"
              placeholder="Username"
              onChange={e => {
                this.formValidator(), this.userInputHandler(e);
              }}
              onBlur={e => {
                this.formValidator(), this.userInputHandler(e);
              }}
              value={this.state.userCredentials.username}
              name="username"
              required
            />
          </Form.Field>

          <Form.Field>
            <input
              placeholder="Email"
              type="email"
              onChange={e => {
                this.formValidator(), this.userInputHandler(e);
              }}
              onBlur={e => {
                this.formValidator(), this.userInputHandler(e);
              }}
              value={this.state.userCredentials.email}
              name="email"
              required
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Password"
              type="password"
              onChange={e => {
                this.formValidator(), this.userInputHandler(e);
              }}
              onBlur={e => {
                this.formValidator(), this.userInputHandler(e);
              }}
              value={this.state.userCredentials.password}
              name="password"
              required
            />
          </Form.Field>
          {this.state.validationErrors.length > 0 && (
            <div className="ui negative message">
              {this.state.validationErrors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <Button
            button={signupButtonValues}
            signUpClick={e => this.submitForm(e)}
          />
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
Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = auth => auth;

export default connect(
  mapStateToProps,
  { signupUser },
)(Signup);
