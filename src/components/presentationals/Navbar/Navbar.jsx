import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

// stylesheets
import './Navbar.scss';

// modules
import { logout, autoLogin } from '../../../store/modules/auth';

// component
import Avatar from '../Avatar/Avatar';
import Loader from '../Loader/Loader';

// images
import { DEFAULT_PROFILE_PICTURE } from '../../../config/config';

export class Navbar extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  logOut = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    const { className, children, isLoading, user } = this.props;
    return (
      <div>
        {isLoading && <Loader text="loading. please wait" size="large" />}
        <div className="navbar">
          <div>
            <Link to="/">
              <h1 className="brand">Authors Haven</h1>
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'row-reverse',
            }}
          >
            {children && user && (
              <Fragment>
                <div className="navbar-avatar" style={{ margin: '0 2rem' }}>
                  <Avatar
                    className={className}
                    url={user.image || DEFAULT_PROFILE_PICTURE}
                  />
                  <Dropdown className="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to={`@${user.username}`}>Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a onClick={this.logOut}>Logout</a>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Fragment>
            )}
            {children}
          </div>
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
