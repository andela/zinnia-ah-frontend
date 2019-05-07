import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';
import Avatar from '../Avatar/Avatar';
import './Navbar.scss';

const Navbar = ({ props }) => {
  return (
    <div>
      <div className="navbar">
        <div>
          <h1 className="brand">Authors Haven</h1>
        </div>
        {props.profileUrl && (
          <div className="navbar-avatar">
            <Avatar avatarUrl={props.profileUrl} />
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
  props: PropTypes.shape({
    profileUrl: PropTypes.string,
  }),
  profileUrl: PropTypes.string,
};

export default Navbar;
