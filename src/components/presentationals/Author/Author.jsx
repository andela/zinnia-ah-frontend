import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//utils
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

//components
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Title from '../Title/Title';

//stylesheets
import '../ProfileSidebar/ProfileSidebar.scss';

const Author = ({ profile, authUser }) => {
  return profile ? (
    <div className="container" data-test="author">
      <div className="avatar-div">
        <Link to={`/@${profile.username}`}>
          <Avatar
            url={profile.image || DEFAULT_USER_IMAGE_URL}
            className="avatar-lg"
          />
        </Link>
      </div>
      <Title
        content={`${profile.firstName} ${profile.lastName}`}
        className="title-md text-center"
      />
      <Link to={`/@${profile.username}`}>
        <p className="text-center username">@{profile.username}</p>
      </Link>
      {authUser && authUser.username && authUser.username !== profile.username && (
        <div className="d-flex justify-content-center">
          <Button className="btn-white btn-sm" value="FOLLOW" type="submit" />
        </div>
      )}
      {!authUser && (
        <div className="d-flex justify-content-center">
          <Button className="btn-white btn-sm" value="FOLLOW" type="submit" />
        </div>
      )}
    </div>
  ) : null;
};

Author.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
  authUser: PropTypes.object,
};

Author.defaultProps = {
  authUser: {},
};

export default Author;
