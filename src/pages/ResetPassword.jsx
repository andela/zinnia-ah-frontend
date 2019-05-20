import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import ResetPasswordCard from '../components/presentationals/ResetPassword/ResetPasswordCard';
import Loader from '../components/presentationals/Loader/Loader';

import { resetPasswordRequest } from '../store/modules/password';
import { validate } from '../utils/formValidator';

import './Authentication.scss';

class ResetPassword extends Component {
  state = {
    password: '',
    validationErrors: [],
  };

  onInputChange = e => {
    const { validationErrors } = this.state;
    const errors = validate(
      { [e.target.name]: e.target.value },
      validationErrors,
    );

    this.setState({
      [e.target.name]: e.target.value,
      validationErrors: errors,
    });
  };

  submitRequest = e => {
    e.preventDefault();
    const { password, validationErrors } = this.state;
    const { history, location } = this.props;

    if (!password || validationErrors.length > 0) {
      return toast.error('Please fill the credentials correctly');
    }

    const query = location.search;
    const token = query.split('=').pop();
    return this.props.resetPasswordRequest(password, token, history);
  };

  render() {
    const { password, validationErrors } = this.state;

    return (
      <div>
        <Navbar />
        <div className="d-flex auth-container">
          <AuthenticationIllustration />
          {this.props.isLoading && <Loader text="please wait" size="large" />}
          <ResetPasswordCard
            validationErrors={validationErrors}
            handleSubmit={this.submitRequest}
            password={password}
            handleChange={this.onInputChange}
          />
          <ToastContainer />
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  isLoading: PropTypes.bool,
  resetPasswordRequest: PropTypes.func,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoading: state.password.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetPasswordRequest: (password, token, history) =>
      dispatch(resetPasswordRequest(password, token, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ResetPassword));
