import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Dimmer, Loader } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import ProfileSidebar from '../components/presentationals/ProfileSidebar/ProfileSidebar';
import ProfileMain from '../components/presentationals/ProfileMain/ProfileMain';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './Profile.scss';

// images
import { DEFAULT_USER_IMAGE_URL } from '../utils/config';

//actions
import { getUserProfileRequest } from '../store/modules/profile';
import { deleteArticle } from '../store/modules/profile';

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
  render() {
    const {
      profile,
      publications,
      followings,
      followers,
      isLoading,
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
            currentView={this.state.view}
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};

export const mapStateToProps = state => ({
  profile: {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    bio: state.profile.bio,
    image: state.profile.image,
    email: state.profile.email,
    username: state.profile.username,
  },
  error: state.profile.error,
  isLoading: state.profile.isLoading,
  isDeleting: state.profile.isDeleting,
  publications: state.profile.publications,
  followings: state.profile.followings,
  followers: state.profile.followers,
});

export default connect(
  mapStateToProps,
  { getUserProfileRequest, deleteArticle },
)(Profile);
