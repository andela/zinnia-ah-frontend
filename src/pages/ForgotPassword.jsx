import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/presentationals/Navbar/Navbar';
import AuthenticationIllustration from '../components/presentationals/AuthenticationIllustration/AuthenticationIllustration';
import ForgotPasswordCard from '../components/presentationals/ForgotPassword/ForgotPasswordCard';
import Loader from '../components/presentationals/Loader/Loader';

import { forgotPasswordRequest } from '../store/modules/password';
import { emailRegex } from '../utils/formValidator';

import './Authentication.scss';

class ForgotPassword extends Component {
  state = { email: '' };

  onInputChange = e => {
    this.setState({ email: e.target.value });
  };

  forgotPasswordRequest = async ({ email }) => {
    try {
      const response = await http.post('/auth/users/forgot-password', {
        email,
      });
      this.setState({ isLoading: false });
      toastbar.success('A reset link has been sent to your email');
      return response.data;
    } catch (error) {
      this.setState({ isLoading: false });
      toastbar.error('Something went wrong. Request Unsuccessful!');
    }
  };

  submitRequest = e => {
    e.preventDefault();
    const { email } = this.state;

    if (emailRegex.test(email)) {
      return this.props.forgotPasswordRequest(email);
    }
    return toast.error('Please put in a Valid Email');
  };

  render() {
    const { email } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <div className="d-flex auth-container">
          <AuthenticationIllustration />
          {this.props.isLoading && <Loader text="please wait" size="large" />}
          <ForgotPasswordCard
            submitRequest={this.submitRequest}
            email={email}
            onChange={this.onInputChange}
          />
          <ToastContainer />
        </div>
      </React.Fragment>
    );
  }
}

ForgotPassword.propTypes = {
  isLoading: PropTypes.bool,
  forgotPasswordRequest: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    isLoading: state.password.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    forgotPasswordRequest: email => dispatch(forgotPasswordRequest(email)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ForgotPassword));
