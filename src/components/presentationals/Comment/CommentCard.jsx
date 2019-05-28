import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { reactToComment, deleteComment } from '../../../store/modules/comments';
import UserThumbnail from '../UserThumbnail/UserThumbnail';
import CommentReaction from '../../container/Comment/CommentReaction';
import './CommentCard.scss';

class CommentCard extends Component {
  state = {
    isLiked: false,
    selectedCommentId: '',
    isOwnComment: false,
    isModalOpen: false,
    actionToConfirm: {},
    options: [
      {
        key: 'edit',
        icon: 'edit',
        value: 'edit',
        text: 'Edit comment',
      },
      {
        key: 'delete',
        icon: 'delete',
        value: 'delete',
        text: 'Delete comment',
      },
    ],
  };

  componentDidMount() {
    this.indicateLikeStatus();
  }

  displayOptions = commentAuthorId => {
    if (commentAuthorId === this.props.userId) {
      this.setState({
        isOwnComment: true,
      });
    }
  };

  indicateLikeStatus = (comment = this.props.commentDetails) => {
    this.displayOptions(comment.userId);

    comment.likes.forEach(like => {
      if (like.userId === this.props.userId && like.commentId === comment.id) {
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
    await this.props.reactToComment({
      comments,
      commentId,
      articleId,
    });
    this.indicateLikeStatus();
  };

  optionHandler = operation => {
    const commentId = this.props.commentDetails.id;

    if (operation === 'delete') {
      this.props.displayModal(() =>
        this.props.deleteComment(this.props.comments, commentId),
      );
    }
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
        <div className="reaction">
          <span onClick={this.reactionClickHandler}>
            <CommentReaction isLiked={this.state.isLiked} />
          </span>
          <span className="count">{likesCount}</span>

          {this.state.isOwnComment === true && (
            <Dropdown
              className="options-menu pointing bottom right icon"
              icon="chevron up"
            >
              <Dropdown.Menu>
                {this.state.options.map(option => (
                  <Dropdown.Item
                    key={option.value}
                    {...option}
                    onClick={() => this.optionHandler(option.value)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>
    );
  }
}

CommentCard.propTypes = {
  commentDetails: PropTypes.object.isRequired,
  reactToComment: PropTypes.func,
  comments: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func,
  displayModal: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
    userId: state.comments.userId,
  };
};

export default connect(
  mapStateToProps,
  { reactToComment, deleteComment },
)(CommentCard);
