import React from 'react';
import PropTypes from 'prop-types';

//style
import 'semantic-ui-css/semantic.min.css';
import './UserThumbnail.scss';

// configs
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

import Avatar from '../../presentationals/Avatar/Avatar';

const UserThumbnail = ({ url, image, name, username }) => (
  <a className="user-thumbnail" href={url}>
    <Avatar url={image ? image : DEFAULT_USER_IMAGE_URL} className="" />
    <div>
      <span className="name"> {name} </span>
      <span className="info"> @{username} </span>
    </div>
  </a>
);

UserThumbnail.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
};

export default UserThumbnail;
