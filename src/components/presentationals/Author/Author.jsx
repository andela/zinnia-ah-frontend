import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//utils
import { DEFAULT_USER_PROFILE_IMAGE } from '../../../config/config';

//components
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Title from '../Title/Title';

//stylesheets
import '../ProfileSidebar/ProfileSidebar.scss';

const Author = ({ profile }) => {
  return profile ? (
    <div className="container" data-test="author">
      <div className="avatar-div">
        <Link to={`@${profile.username}`}>
          <Avatar
            url={profile.image || DEFAULT_USER_PROFILE_IMAGE}
            className="avatar-lg"
          />
        </Link>
      </div>
      <Title
        content={`${profile.firstName} ${profile.lastName}`}
        className="title-md text-center"
      />
      <Link to={`@${profile.username}`}>
        <p className="text-center username">@{profile.username}</p>
      </Link>
      <div className="d-flex justify-content-center">
        <Button className="btn-white btn-sm" value="FOLLOW" type="submit" />
      </div>
    </div>
  ) : null;
};

Author.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default Author;
