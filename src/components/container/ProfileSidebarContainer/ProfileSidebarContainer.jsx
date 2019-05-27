import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import ProfileSidebar from '../../presentationals/ProfileSidebar/ProfileSidebar';

// actions
import { followAuthorRequest } from '../../../store/modules/profile';

// helpers
import { getToken, decodeToken } from '../../../api/helpers';

export class ProfileSidebarContainer extends Component {
  loginUser = (() => {
    if (getToken()) {
      const loginStatus = decodeToken(getToken());
      return loginStatus;
    }
  })();

  isFollowing = () => {
    return this.props.followers.find(
      follower => follower.id === this.loginUser.id,
    );
  };

  followAuthorHandler = () => {
    const value = this.isFollowing() ? 'unfollow' : 'follow';
    return this.props.followAuthorRequest(value, this.props.profile.username);
  };

  getButtonText = () => {
    if (this.isFollowing()) return 'UNFOLLOW';
    return 'FOLLOW';
  };

  render() {
    const {
      profile,
      followings,
      followers,
      isButtonLoading,
      currentView,
    } = this.props;
    return (
      <ProfileSidebar
        {...profile}
        followers={followers}
        followings={followings}
        currentView={currentView}
        isButtonLoading={isButtonLoading}
        getButtonText={this.getButtonText}
        followAuthorHandler={this.followAuthorHandler}
        loginUser={this.loginUser}
      />
    );
  }
}

ProfileSidebarContainer.propTypes = {
  profile: PropTypes.object,
  followings: PropTypes.array,
  followers: PropTypes.array,
  currentView: PropTypes.any,
  isButtonLoading: PropTypes.bool,
  followAuthorRequest: PropTypes.func,
};

export const mapStateToProps = state => ({
  isButtonLoading: state.profile.isButtonLoading,
});

export default connect(
  mapStateToProps,
  { followAuthorRequest },
)(ProfileSidebarContainer);
