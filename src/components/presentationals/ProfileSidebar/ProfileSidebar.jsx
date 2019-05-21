import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// components
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

// styles
import './ProfileSidebar.scss';

// config and helpers
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';
import { handleImageEventClick } from '../../../utils/helpers';

const CameraIcon = () => <Icon name="camera" />;
const OverlayImage = () => (
  <div className="overlay-image show" onClick={handleImageEventClick}>
    <CameraIcon />
  </div>
);

const ProfileSidebar = ({
  followers,
  followings,
  id,
  username,
  email,
  image,
  currentView,
  isButtonLoading,
  loginUser,
  followAuthorHandler,
  getButtonText,
}) => {
  return (
    <div className="sidebar">
      <div className="avatar-div">
        <Avatar url={image || DEFAULT_USER_IMAGE_URL} className="avatar-xl" />
        {currentView === 'userSettings' ? <OverlayImage /> : ''}
      </div>
      <p className="text-center username">{username}</p>
      <p className="text-center email">{email}</p>
      <div className="follow-div">
        <div className="follow-stats">
          <p className="text-center count">
            {followings !== undefined ? followings.length : 0}
          </p>
          <p className="text-center type">Followings</p>
        </div>
        <div>
          <p className="text-center count">
            {followers !== undefined ? followers.length : 0}
          </p>
          <p className="text-center type">Followers</p>
        </div>
      </div>
      <div className="profilebtn-container">
        {isButtonLoading && <Button className="ui basic loading button" />}
        {!isButtonLoading && loginUser && loginUser.id !== id && (
          <Button
            className={getButtonText() === 'FOLLOW' ? 'btn-white' : 'btn-dark'}
            value={getButtonText()}
            onClick={followAuthorHandler}
          />
        )}
      </div>
      <hr className="sidebar-hr" />
    </div>
  );
};

ProfileSidebar.propTypes = {
  followers: PropTypes.array,
  followings: PropTypes.array,
  id: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  followAuthorHandler: PropTypes.func,
  getButtonText: PropTypes.func,
  isLoading: PropTypes.bool,
  isButtonLoading: PropTypes.bool,
  loginUser: PropTypes.object,
  currentView: PropTypes.string.isRequired,
};

export default ProfileSidebar;
