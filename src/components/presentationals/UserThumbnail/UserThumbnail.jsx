import React from 'react';
import PropTypes from 'prop-types';

//style
import 'semantic-ui-css/semantic.min.css';
import './UserThumbnail.scss';

import Avatar from '../../presentationals/Avatar/Avatar';

const UserThumbnail = ({ url, image, name, info }) => (
  <a className="user-thumbnail" href={url}>
    <Avatar url={image} className="avatar-m" />
    <div>
      <span className="name"> {name} </span>
      <span className="info"> {info} </span>
    </div>
  </a>
);

UserThumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default UserThumbnail;
