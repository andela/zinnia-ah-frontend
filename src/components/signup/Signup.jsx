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

class Signup extends Component {
  state = {
    userCredentials: {
      email: '',
      password: '',
      username: '',
    },
  };

  userInputHandler = event => {
    const { userCredentials } = this.state;
    userCredentials[event.target.name] = event.target.value;
    this.setState({ userCredentials });
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
    const { signup } = this.props;
    return (
      <div>
        <Form loading={signup.isLoading}>
          <Form.Field>
            <input
              placeholder="Username"
              onChange={e => this.userInputHandler(e)}
              value={this.state.userCredentials.username}
              name="username"
              required
            />
          </Form.Field>

          <Form.Field>
            <input
              placeholder="Email"
              type="email"
              onChange={e => this.userInputHandler(e)}
              value={this.state.userCredentials.email}
              name="email"
              required
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Password"
              type="password"
              onChange={e => this.userInputHandler(e)}
              value={this.state.userCredentials.password}
              name="password"
              required
            />
          </Form.Field>
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
  signup: PropTypes.object.isRequired,
};

const mapStateToProps = signup => signup;

export default connect(
  mapStateToProps,
  { signupUser },
)(Signup);
