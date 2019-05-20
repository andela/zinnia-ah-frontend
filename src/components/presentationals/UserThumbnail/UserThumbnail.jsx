import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

//style
import 'semantic-ui-css/semantic.min.css';
import './UserThumbnail.scss';

import Avatar from '../../presentationals/Avatar/Avatar';

const UserThumbnail = ({ url, image, name, info }) => {
  image = image !== null ? image : DEFAULT_USER_IMAGE_URL;
  return (
    <a className="user-thumbnail" href={url}>
      <Avatar url={image} className="avatar-m" />
      <div>
        <span className="name"> {name} </span>
        <span className="info"> {info} </span>
      </div>
    </a>
  );
};

UserThumbnail.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
};

export default UserThumbnail;
