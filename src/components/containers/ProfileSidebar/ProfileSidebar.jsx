/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from 'semantic-ui-react';

import Avatar from '../../presentationals/Avatar/Avatar.jsx';
import Button from '../../presentationals/Button/Button.jsx';
import { DEFAULT_PROFILE_PICTURE } from '../../../config/config.js';

import './ProfileSidebar.scss';

const CameraIcon = () => <Icon name="camera" />;
const OverlayImage = () => (
  <div className="overlay-image">
    <CameraIcon />
  </div>
);

export default function ProfileSidebar(props) {
  const { followers, followings, username, email } = props.profile;
  return (
    <div className="sidebar">
      <div className="avatar-div">
        <Avatar
          url={props.profile.image || DEFAULT_PROFILE_PICTURE}
          className="avatar-xl"
        />
        <OverlayImage />
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
      <div style={buttonStyles}>
        <Button type="submit" value="FOLLOW" className="btn-white" />
      </div>
      <hr className="sidebar-hr" />
    </div>
  );
}

const buttonStyles = {
  paddingLeft: '15%',
  paddingRight: '15%',
  marginTop: '35px',
};
