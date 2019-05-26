import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

//components
import { Dropdown, Input } from 'semantic-ui-react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

//stylesheets
import './Navbar.scss';
import '../../../components/presentationals/Form.scss';

//modules
import { customSearch } from '../../../store/modules/search';
export class Navbar extends Component {
  state = {
    keyword: '',
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
    const { children, url, className } = this.props;
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
                Authors Haven
              </Link>
            </h1>
          </div>
          <div className="sm-hide">
            {url && (
              <div className="navbar-avatar">
                <Avatar className={className} url={url} />
                <Dropdown className="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <a>Logout</a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
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
              <Link to="/login">
                <Button
                  type="submit"
                  value="WRITE"
                  className="btn btn-dark w-10"
                />
              </Link>
            </div>
            {children && children}
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
  history: PropTypes.object,
  customSearch: PropTypes.func,
};

export default connect(
  null,
  { customSearch },
)(withRouter(Navbar));
