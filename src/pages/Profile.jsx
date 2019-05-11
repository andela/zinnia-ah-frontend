import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import ProfileSidebar from '../components/presentationals/ProfileSidebar/ProfileSidebar';
import ProfileMain from '../components/presentationals/ProfileMain/ProfileMain';

// styles
import './Profile.scss';

// images
import { DEFAULT_USER_IMAGE_URL } from '../utils/config';

//actions
import { getUserProfileRequest } from '../store/modules/profile';

export class Profile extends Component {
  componentDidMount() {
    this.props.getUserProfileRequest('igbominadeveloper');
  }
  render() {
    const {
      profile: { data },
      isLoading,
    } = this.props;
    return (
      <div>
        <Navbar url={data.image || DEFAULT_USER_IMAGE_URL} className="" />
        <div className="profile-container">
          {isLoading && (
            <Dimmer active>
              <Loader />
            </Dimmer>
          )}

          <ProfileSidebar {...data} />
          <ProfileMain {...data} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getUserProfileRequest: PropTypes.func,
  profile: PropTypes.shape({
    data: PropTypes.object,
  }),
  isLoading: PropTypes.bool,
};

export const mapStateToProps = state => ({
  profile: state.profile.profile,
  isLoading: state.profile.isLoading,
});

export default connect(
  mapStateToProps,
  { getUserProfileRequest },
)(Profile);
