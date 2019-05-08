import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signupUser } from '../../store/modules/auth';
import {
  validateInput,
  checkAllEmptyInputs,
  fieldChecker,
} from '../../utils/formValidator';

// components
import Button from '../presentationals/Button/Button';
import Image from '../presentationals/Image/Image';
import Loader from '../presentationals/Loader/Loader';
import '../../components/presentationals/AuthenticationCard/AuthenticationCard.scss';

// styles
import '../../components/presentationals/Form.scss';

// images
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';

class Register extends Component {
  state = {
    userCredentials: {
      email: '',
      password: '',
      username: '',
    },
    validationErrors: '',
  };

  userInputHandler = event => {
    this.setState({
      userCredentials: {
        ...this.state.userCredentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  formValidator = event => {
    const { userCredentials } = this.state;
    event.preventDefault();
    const validationErrors = validateInput(userCredentials);
    this.setState({
      validationErrors,
    });
    if (!validationErrors.length) {
      this.setState({ validationErrors: '' });
      return true;
    }
  };

  submitForm = event => {
    event.preventDefault();
    this.props.signupUser({
      ...this.state.userCredentials,
    });
  };

  render() {
    const { auth } = this.props;
    const signupButtonValues = {
      type: 'submit',
      value: 'GET STARTED',
      className: 'btn-dark',
    };
    const { userCredentials } = this.state;
    let loader;
    auth.isLoading && (loader = <Loader text="please wait" size="large" />);
    return (
      <div>
        {loader}
        <form id="form" className="form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Username"
              onChange={e => {
                this.userInputHandler(e);
                fieldChecker(e);
              }}
              value={this.state.userCredentials.username}
              name="username"
              required
            />
          </div>

          <div className="form-group">
            <input
              placeholder="Email"
              className="form-control"
              type="email"
              onChange={e => {
                this.userInputHandler(e);
                fieldChecker(e);
              }}
              value={this.state.userCredentials.email}
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              onChange={e => {
                this.userInputHandler(e);
                fieldChecker(e);
              }}
              value={this.state.userCredentials.password}
              name="password"
              required
            />
          </div>
          {this.state.validationErrors.length > 0 && (
            <div className="ui negative message">
              {this.state.validationErrors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <Button
            button={signupButtonValues}
            onClick={e => {
              !checkAllEmptyInputs(userCredentials).length &&
                this.formValidator(e) &&
                this.submitForm(e);
            }}
          />
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
      </div>
    );
  }
}
Register.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  { signupUser },
)(Register);
