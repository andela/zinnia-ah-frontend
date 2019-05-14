import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// helper functions
import { signupUser } from '../../store/modules/auth';
import {
  validateInput,
  checkAllEmptyFields,
  fieldChecker,
} from '../../utils/formValidator';

// components
import Button from '../presentationals/Button/Button';
import Loader from '../presentationals/Loader/Loader';

// styles
import '../../components/presentationals/AuthenticationCard/AuthenticationCard.scss';
import '../../components/presentationals/Form.scss';

export class Register extends Component {
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
    const emptyFields = checkAllEmptyFields(userCredentials);
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
    const userCredentials = { email: '', password: '', username: '' };
    this.setState({
      userCredentials,
    });
  };

  render() {
    const { isLoading, errorResponse, successResponse } = this.props.auth;
    const { emptyFields } = this.state;
    successResponse.status === 'success' &&
      toast.success(successResponse.message);
    return (
      <div>
        {isLoading && <Loader text="please wait" size="large" />}
        <form
          id="form"
          className="form"
          onSubmit={e => {
            this.formValidator(e) && this.submitForm(e);
          }}
        >
          <div className="form-group">
            <input
              className={`form-control ${
                emptyFields.includes('username') ? 'error' : ''
              }`}
              placeholder="Username"
              onChange={this.userInputHandler}
              value={this.state.userCredentials.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Email"
              className={`form-control ${
                emptyFields.includes('email') ? 'error' : ''
              }`}
              type="email"
              onChange={this.userInputHandler}
              value={this.state.userCredentials.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              className={`form-control ${
                emptyFields.includes('password') ? 'error' : ''
              }`}
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
          {errorResponse.length > 0 && (
            <div className="ui negative message">
              {errorResponse.map(error => (
                <p key={error.message}>{error.message}</p>
              ))}
            </div>
          )}
          <Button type="submit" value="GET STARTED" className="btn-dark" />
        </form>
        <div className="d-flex or-div">
          <hr className="hr" />
          <p className="or">OR</p>
          <hr className="hr" />
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { signupUser },
)(Register);
