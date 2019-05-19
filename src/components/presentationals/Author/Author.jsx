import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//utils
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

//components
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

//stylesheets
import '../ProfileSidebar/ProfileSidebar.scss';
const Author = ({ profile }) => {
  return profile ? (
    <div className="container" data-test="author">
      <div className="avatar-div">
        <Avatar url={DEFAULT_USER_IMAGE_URL} className="avatar-xl" />
      </div>
      <p className="text-center fullname">{`${profile.firstName} ${
        profile.lastName
      }`}</p>
      <Link to={`@${profile.username}`}>
        <p className="text-center username">@{profile.username}</p>
      </Link>
      <Button className="btn-white" value="FOLLOW" type="submit" />
    </div>
  ) : null;
};

Author.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Author;
