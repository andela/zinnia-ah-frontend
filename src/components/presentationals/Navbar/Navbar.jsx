import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';
import Avatar from '../Avatar/Avatar';
import './Navbar.scss';

const Navbar = ({ url, className, children }) => {
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
          {children && children}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  url: PropTypes.string,
};

export default Navbar;
