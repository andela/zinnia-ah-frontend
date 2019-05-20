import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likeCommentRequest } from '../../../store/modules/comment';

class CommentReaction extends Component {
  state = {
    likesCount: this.props.likes.length,
    isLiked: false,
  };
  componentDidMount() {
    const { data } = JSON.parse(localStorage.getItem('userprofile'));
    const isLiked = this.props.likes.find(user => user.userId === data.id);
    if (isLiked) {
      this.setState({ isLiked: true });
    }
  }
  clickHandler = commentId => {
    const { articleId } = this.props;
    this.props.likeCommentRequest(articleId, commentId);
  };
  render() {
    const likes = this.props.likes;
    const count = likes.length > 0 ? likes.length : '';

    return (
      <div>
        <button
          onClick={() => this.clickHandler(this.props.commentId)}
          className="like-button"
        >
          <Icon
            name="thumbs up outline"
            style={{
              fontSize: '1.80rem',
            }}
          />
        </button>
        <span className="count">{count}</span>
      </div>
    );
  }
}

CommentReaction.propTypes = {
  articleId: PropTypes.string.isRequired,
  likeCommentRequest: PropTypes.any,
  likes: PropTypes.any.isRequired,
  commentId: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return { data: state.profile };
};

export default connect(
  mapStateToProps,
  { likeCommentRequest },
)(CommentReaction);
