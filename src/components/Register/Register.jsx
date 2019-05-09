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
    validationErrors: [],
    emptyFields: [],
  };

  userInputHandler = event => {
    const { emptyFields } = this.state;
    const currentEmptyFields = fieldChecker(event, emptyFields);
    this.setState({
      userCredentials: {
        ...this.state.userCredentials,
        [event.target.name]: event.target.value,
      },
      emptyFields: currentEmptyFields,
    });
  };

  formValidator = event => {
    event.preventDefault();
    const { userCredentials } = this.state;
    const emptyFields = checkAllEmptyInputs(userCredentials);
    if (emptyFields.length) {
      this.setState({
        emptyFields,
      });
      return false;
    }
    this.setState({ emptyFields: [] });
    const validationErrors = validateInput(userCredentials);
    this.setState({
      validationErrors,
    });
    if (!validationErrors.length) {
      this.setState({ validationErrors: '' });
      return true;
    }
    return false;
  };

  submitForm = event => {
    event.preventDefault();
    this.props.signupUser({
      ...this.state.userCredentials,
    });
  };

  render() {
    const { auth } = this.props;
    const { emptyFields } = this.state;
    const usernameClasses = ['form-control'];
    const emailClasses = ['form-control'];
    const passwordClasses = ['form-control'];
    emptyFields.includes('email') ? emailClasses.push('error') : '';
    emptyFields.includes('username') ? usernameClasses.push('error') : '';
    emptyFields.includes('password') ? passwordClasses.push('error') : '';
    const signupButtonValues = {
      type: 'submit',
      value: 'GET STARTED',
      className: 'btn-dark',
    };
    let loader;
    auth.isLoading && (loader = <Loader text="please wait" size="large" />);
    return (
      <div>
        {loader}
        <form
          id="form"
          className="form"
          onSubmit={e => {
            this.formValidator(e) && this.submitForm(e);
          }}
        >
          <div className="form-group">
            <input
              className={usernameClasses.join(' ')}
              placeholder="Username"
              onChange={this.userInputHandler}
              value={this.state.userCredentials.username}
              name="username"
            />
          </div>

          <div className="form-group">
            <input
              placeholder="Email"
              className={emailClasses.join(' ')}
              type="email"
              onChange={this.userInputHandler}
              value={this.state.userCredentials.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              className={passwordClasses.join(' ')}
              placeholder="Password"
              type="password"
              onChange={this.userInputHandler}
              value={this.state.userCredentials.password}
              name="password"
            />
          </div>
          {this.state.validationErrors.length > 0 && (
            <div className="ui negative message">
              {this.state.validationErrors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <Button button={signupButtonValues} />
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

export const unwrappedRegister = Register;

export default connect(
  mapStateToProps,
  { signupUser },
)(Register);
