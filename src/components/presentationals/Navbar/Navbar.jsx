import React, { Component } from 'react';
import { Dropdown, Input, Icon, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// stylesheets
import './Navbar.scss';

// component
import Avatar from '../Avatar/Avatar';

// images
import { DEFAULT_PROFILE_PICTURE } from '../../../config/config';

//stylesheets
import './Navbar.scss';
import '../../../components/presentationals/Form.scss';

// modules
import { logout, autoLogin } from '../../../store/modules/auth';

import { customSearch } from '../../../store/modules/search';
import Button from '../Button/Button';
import { getToken, getEncodedUser } from '../../../api/helpers';

export class Navbar extends Component {
  state = {
    keyword: '',
  };

  componentDidMount() {
    if (getToken() && getEncodedUser()) {
      this.props.autoLogin();
    }
  }

  logOut = event => {
    event.preventDefault();
    this.props.logout();
  };

  inputHandler = event => {
    const { value } = event.target;
    this.setState({ keyword: value });
  };

  submitHandler = event => {
    event.preventDefault();
    const { keyword } = this.state;
    const { history } = this.props;
    this.props.customSearch(keyword);
    history.push(`/search?keyword=${keyword}`);
  };

  render() {
    const { className, children, user, isAuthenticated, location } = this.props;

    return (
      <div>
        <div className="navbar">
          <div>
            <h1 className="brand">
              <Link
                to="/"
                style={{
                  color: 'inherit',
                }}
              >
                <span className="sm-hide">Authors Haven</span>
                <span className="lg-hide">Ah</span>
              </Link>
            </h1>
          </div>
          <div className="nav-items">
            <form className="search-bar" onSubmit={this.submitHandler}>
              <Input
                icon="search"
                iconPosition="left"
                value={this.state.keyword}
                className="form-control"
                type="search"
                placeholder="Search Authors' Haven"
                onChange={this.inputHandler}
                name="keyword"
                data-test="search-input"
              />
            </form>
            <Link to="/editor" className="sm-hide">
              <Button
                type="submit"
                value="WRITE"
                className="btn btn-dark w-10"
              />
            </Link>
            {this.props.location.pathname !== '/editor' && (
              <Link to="/editor" className="lg-hide hidden-link">
                <Button
                  type="submit"
                  value=""
                  className="btn-transparent write-btn w-10"
                >
                  <i aria-hidden="true" className="write icon large" />
                </Button>
              </Link>
            )}
            {!isAuthenticated &&
              this.props.location.pathname !== '/login' &&
              (this.props.location.pathname !== '/signup' && (
                <Link
                  to={{
                    pathname: '/login',
                    state: {
                      from: location,
                    },
                  }}
                  className="nav-login-btn"
                >
                  <Button className="btn-dark" value="LOGIN" />
                </Link>
              ))}
            {user && (
              <div className="navbar-avatar">
                <Menu>
                  <Menu.Menu position="right">
                    <Dropdown
                      icon={null}
                      floating
                      labeled
                      button
                      pointing="top right"
                      trigger={
                        <Avatar
                          className='avatar-sm-2'
                          url={user.image || DEFAULT_PROFILE_PICTURE}
                        />
                      }
                    >
                      <Dropdown.Menu position='right'>
                        <Dropdown.Item>
                          <Link
                            to={`/@${user.username}`}
                            style={{
                              color: 'inherit',
                            }}
                          >
                            <Icon name="user" className="right floated" />
                            Profile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            to="#"
                            onClick={this.logOut}
                            style={{
                              color: 'inherit',
                            }}
                          >
                            <Icon name="sign out" className="right floated" />
                            Logout
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                </Menu>
              </div>
            )}
          </div>
          {children && children}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  history: PropTypes.object,
  location: PropTypes.object,
  customSearch: PropTypes.func,
  logout: PropTypes.func,
  isLoading: PropTypes.bool,
  autoLogin: PropTypes.func,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.loggedInUser !== null,
  user: state.auth.loggedInUser,
});

export default connect(
  mapStateToProps,
  { customSearch, logout, autoLogin },
)(withRouter(Navbar));
