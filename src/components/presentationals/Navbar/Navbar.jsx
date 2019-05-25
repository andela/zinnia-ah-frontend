import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Dropdown } from 'semantic-ui-react';
import Avatar from '../Avatar/Avatar';
import './Navbar.scss';
import { logout, autoLogin } from '../../../store/modules/auth';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export class Navbar extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  logOut = () => {
    this.props.logout();
  };
  render() {
    const { className, children, isLoading, user } = this.props;
    return (
      <div>
        {isLoading && <Loader text="loading. please wait" size="large" />}
        <div className="navbar">
          <div>
            <h1 className="brand">Authors Haven</h1>
          </div>
          {user ? (
            <div className="navbar-avatar">
              <Avatar className={className} url={user.image} />
              <Dropdown className="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="#" onClick={this.logOut}>
                      Logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <Link to="/editor">
              <Button className="btn-dark" value="BECOME AN AUTHOR" />
            </Link>
          )}
          {children && children}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  url: PropTypes.string,
  logout: PropTypes.func,
  isLoading: PropTypes.bool,
  autoLogin: PropTypes.func,
  user: PropTypes.object,
};
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.loggedInUser !== null,
  user: state.auth.loggedInUser,
});

export default connect(
  mapStateToProps,
  { logout, autoLogin },
)(Navbar);
