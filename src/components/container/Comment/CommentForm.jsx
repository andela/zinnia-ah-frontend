import React, { Component } from 'react';
import './CommentForm.scss';
import Avatar from '../../presentationals/Avatar/Avatar';
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

class CommentForm extends Component {
  state = {};

  submitHandler = event => {};

  render() {
    const userAvatar = this.props.userAvatar
      ? this.props.userAvatar
      : DEFAULT_USER_IMAGE_URL;
    return (
      <div>
        <form className="comment-form" onSubmit={this.submitHandler}>
          <div className="comment-content">
            <Avatar url={userAvatar} className="avatar-m" />
            <input placeholder="comment here..." />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
