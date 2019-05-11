import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';
import Avatar from '../Avatar/Avatar';
import './Navbar.scss';

const Navbar = ({ url, className }) => {
  return (
    <div>
      <div className="navbar">
        <div>
          <h1 className="brand">Authors Haven</h1>
        </div>
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
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
};

export default Navbar;
