import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Dimmer, Loader } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';

// components
import ProfileSidebar from '../components/presentationals/ProfileSidebar/ProfileSidebar';
import ProfileMain from '../components/presentationals/ProfileMain/ProfileMain';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './Profile.scss';

//actions
import {
  getUserProfileRequest,
  deleteArticle,
  followAuthorRequest,
} from '../store/modules/profile';

// helpers
import { getToken, decodeToken } from '../api/helpers';

export class Profile extends Component {
  state = {
    view: 'default',
  };

  changeView = (view = 'userSettings') => {
    this.setState({ view });
  };

  componentDidMount() {
    this.props.getUserProfileRequest(this.props.match.params.username);
  }

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
      publications,
      followings,
      followers,
      isLoading,
      isButtonLoading,
      deleteArticle: deleteArticleFunction,
      isDeleting,
    } = this.props;
    return (
      <div>
        <ToastContainer autoClose={4000} />
        <div className="profile-container">
          {isLoading && (
            <Dimmer active>
              <Loader />
            </Dimmer>
          )}

          <ProfileSidebar
            {...profile}
            followers={followers}
            followings={followings}
            getButtonText={this.getButtonText}
            followAuthorHandler={this.followAuthorHandler}
            currentView={this.state.view}
            isButtonLoading={isButtonLoading}
            loginUser={this.loginUser}
          />
          <ProfileMain
            {...profile}
            publications={publications}
            deleteArticle={deleteArticleFunction}
            isDeleting={isDeleting}
            view={this.changeView}
            currentView={this.state.view}
          />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getUserProfileRequest: PropTypes.func,
  profile: PropTypes.object,
  publications: PropTypes.array,
  followings: PropTypes.array,
  followers: PropTypes.array,
  deleteArticle: PropTypes.func,
  isDeleting: PropTypes.bool,
  isLoading: PropTypes.bool,
  isButtonLoading: PropTypes.bool,
  followAuthorRequest: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};

export const mapStateToProps = state => ({
  profile: {
    id: state.profile.id,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    bio: state.profile.bio,
    image: state.profile.image,
    email: state.profile.email,
    username: state.profile.username,
  },
  error: state.profile.error,
  isLoading: state.profile.isLoading,
  isButtonLoading: state.profile.isButtonLoading,
  isDeleting: state.profile.isDeleting,
  publications: state.profile.publications,
  followings: state.profile.followings,
  followers: state.profile.followers,
});

export default connect(
  mapStateToProps,
  { getUserProfileRequest, deleteArticle, followAuthorRequest },
)(Profile);
