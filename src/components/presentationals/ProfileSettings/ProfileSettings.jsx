import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../../presentationals/Button/Button.jsx';
import { generateFormData, uploadImageToServer } from '../../../utils/helpers';
import { updateUserProfileRequest } from '../../../store/modules/Profile';
import Loader from '../../presentationals/Loader/Loader.jsx';

class ProfileSettings extends Component {
  state = {
    isLoading: null,
    tabName: 'userSettings',
    previewImage: null,
  };

  componentDidMount() {
    this.props.currentView;
  }

  componentWillUnmount() {
    return this.props.currentView('default');
  }

  componentDidUpdate(prevProps) {
    if (this.props.updatedAt !== prevProps.updatedAt) {
      this.setState({ isLoading: null });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    this.setState({ isLoading: true });
    if (this.state.previewImage) {
      return this.props.uploadImageToServer(
        {
          image: this.state.previewImage,
          tag: 'profile_pix',
        },
        (error, response) => {
          if (error) return toast.error(response, 'ERROR');
          formData.image = response;
          return this.props.updateUserProfileRequest(formData);
        },
      );
    }
    return this.props.updateUserProfileRequest(formData);
  };

  previewImage = ({ target }) => {
    const image = target.files[0];
    if (!image.type.startsWith('image/')) {
      return false;
    }
    const previewer = document.querySelector('.avatar-div .avatar.avatar-xl');

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      previewer.src = reader.result;
    });
    reader.readAsDataURL(image);
    toast.success('Photo Ready to be saved to profile', 'DONE');
    this.setState({ previewImage: image });
  };

  render() {
    return (
      <div className="settings">
        <div className="edit-profile">
          {this.state.isLoading && (
            <Loader text="Updating Profile" size="large teal" />
          )}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder="Jane"
                defaultValue={this.props.firstName}
                name="firstName"
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Doe"
                defaultValue={this.props.lastName}
                name="lastName"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email Address"
                placeholder="example@mail.com"
                defaultValue={this.props.email}
                type="email"
                name="email"
              />
              <Form.Input
                fluid
                label="Username"
                placeholder="janedoe1"
                defaultValue={this.props.username}
                name="username"
              />
            </Form.Group>
            <Form.TextArea
              label="Bio"
              name="bio"
              placeholder="Tell us more about you...(450 characters max)"
              maxLength="450"
              defaultValue={this.props.bio}
              rows={5}
            />
            <div
              className="field"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button type="submit" value="SAVE CHANGES" className="btn-dark" />
              <Form.Input
                fluid
                type="file"
                accept="image/*"
                name="upload_profile_picture"
                placeholder="Select Profile Pix"
                onChange={this.previewImage}
              />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

ProfileSettings.propTypes = {
  currentView: PropTypes.func,
  uploadImageToServer: PropTypes.func.isRequired,
  updateUserProfileRequest: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  updatedAt: PropTypes.string,
  bio: PropTypes.string,
};

const mapStateToProps = state => {
  const { data } = state.profile.profile;
  return data;
};

export default connect(
  mapStateToProps,
  { updateUserProfileRequest, uploadImageToServer },
)(ProfileSettings);
