import React, { Component } from 'react';
import { Image, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Button from '../presentationals/Button.jsx';
import '../presentationals/AuthenticationCard.scss';
import '../presentationals/Form.scss';
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const loginButtonValues = {
      type: 'submit',
      value: 'CONTINUE',
      class: 'btn-dark',
    };
    // console.log(this.props.auth);
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={this.props.auth.isLoading}>
          <Form.Field>
            <input
              placeholder="Username or Email"
              value={this.state.email}
              onChange={this.onChange}
              name="email"
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              name="password"
            />
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
