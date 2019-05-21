import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

//style
import 'semantic-ui-css/semantic.min.css';
import './UserThumbnail.scss';

import Avatar from '../../presentationals/Avatar/Avatar';

const UserThumbnail = ({ url, image, name }) => (
  <Link className="user-thumbnail" to={`/@${url}`}>
    <Avatar url={image ? image : DEFAULT_USER_IMAGE_URL} className="" />
    <div>
      <span className="info"> {name} </span>
      <span className="name">@{url} </span>
    </div>
  </Link>
);

UserThumbnail.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

export default UserThumbnail;
