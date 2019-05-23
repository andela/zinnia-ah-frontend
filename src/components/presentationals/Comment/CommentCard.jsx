import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';

import { reactToComment } from '../../../store/modules/comments';
import UserThumbnail from '../UserThumbnail/UserThumbnail';
import CommentReaction from '../../container/Comment/CommentReaction';
import './CommentCard.scss';

class CommentCard extends Component {
  state = {
    isLiked: false,
  };

  componentDidMount() {
    this.indicateLikeStatus();
  }

  indicateLikeStatus = () => {
    const comment = this.props.commentDetails;

    comment.likes.forEach(like => {
      if (like.userId === comment.userId && like.commentId === comment.id) {
        this.setState({
          isLiked: true,
        });
      }
    });
  };

  reactionClickHandler = async () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
    const { articleId, id: commentId } = this.props.commentDetails;
    const { comments } = this.props;
    this.props.reactToComment({
      comments,
      commentId,
      articleId,
    });
  };

  render() {
    const { body, createdAt, likes } = this.props.commentDetails;
    const { username, image } = this.props.commentDetails.author;
    const time = moment(createdAt).fromNow();
    const likesCount = likes.length > 0 ? likes.length : '';

    return (
      <div className="comment-card">
        <UserThumbnail
          url={`/@${username}`}
          image={image}
          name={username}
          info={time}
        />
        <p className="comment-body">{body}</p>
        <div className="react">
          <span onClick={this.reactionClickHandler}>
            <CommentReaction isLiked={this.state.isLiked} />
          </span>
          <span className="count">{likesCount}</span>
        </div>
      </div>
    );
  }
}

CommentCard.propTypes = {
  commentDetails: PropTypes.object.isRequired,
  reactToComment: PropTypes.func,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
    userId: state.comments.userId,
  };
};

export default connect(
  mapStateToProps,
  { reactToComment },
)(CommentCard);
