import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';
import './CommentForm.scss';

import Loader from '../../presentationals/Loader/Loader';
import Avatar from '../../presentationals/Avatar/Avatar';
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';
import { createComment } from '../../../store/modules/comments';

class CommentForm extends Component {
  state = {
    userAvatar: null,
    commentInput: '',
    errors: [],
  };

  componentDidMount() {
    const { data } = JSON.parse(localStorage.getItem('userprofile'));
    this.setState({
      userAvatar: data.image,
    });
  }

  handleCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    });
  };

  submitHandler = async event => {
    event.preventDefault();
    const { articleId } = this.props;
    const comment = this.state.commentInput;

    if (comment.length < 1) {
      return;
    }
    const createdComment = await this.props.createComment({
      articleId,
      comment,
    });

    if (createdComment.comments) {
      this.setState({
        commentInput: '',
      });
    }
  };

  render() {
    const userAvatar = this.state.userAvatar
      ? this.state.userAvatar
      : DEFAULT_USER_IMAGE_URL;
    return (
      <div>
        <form className="comment-form" onSubmit={this.submitHandler}>
          {this.props.isLoading && <Loader text="Creating your comment" />}
          <div className="comment-content">
            <Avatar url={userAvatar} className="avatar-m" />
            <input
              name="comment-text"
              onChange={this.handleCommentInput}
              value={this.state.commentInput}
              placeholder="comment here..."
            />
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  articleId: PropTypes.string.isRequired,
  createComment: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: state.comments.isLoading,
});

export default connect(
  mapStateToProps,
  { createComment },
)(CommentForm);
