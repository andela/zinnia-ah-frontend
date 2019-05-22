import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentReaction extends Component {
  state = {
    isLiked: false,
  };

  componentDidMount() {
    // this.props.getCurrentLikesRequest(this.props.likes);
    // const { userId } = this.props;
    // const isLiked = this.props.likes.find(like => like.userId === userId);
    // if (isLiked) {
    //   this.setState({ isLiked: true });
    // }
  }

  clickHandler = commentId => {
    // const { articleId } = this.props;
    // this.props.likeCommentRequest(articleId, commentId);
  };

  render() {
    const { likes } = this.props;
    const count = likes.length > 0 ? likes.length : '';
    const { isLiked } = this.state;
    const activeLike = isLiked ? '' : ' outline';

    return (
      <div>
        <button
          onClick={() => this.clickHandler(this.props.commentId)}
          className="like-button"
        >
          <Icon
            name={`thumbs up${activeLike}`}
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
  likes: PropTypes.array.isRequired,
  commentId: PropTypes.string.isRequired,
  comments: PropTypes.array,
  // getCurrentLikesRequest: PropTypes.any,
  userId: PropTypes.string,
};

const mapStateToProps = state => {
  return { data: state.profile, comment: state.comment };
};

export default connect(
  mapStateToProps,
  {},
)(CommentReaction);
