import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { reactToComment } from '../../../store/modules/comments';
import UserThumbnail from '../UserThumbnail/UserThumbnail';
import CommentReaction from '../../container/Comment/CommentReaction';
import './CommentCard.scss';
import { decodeToken, getToken } from '../../../api/helpers';

class CommentCard extends Component {
  state = {
    isLiked: false,
    selectedCommentId: '',
    isOwnComment: false,
    options: [
      {
        key: 'edit',
        icon: 'edit',
        value: 'delete',
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
    // const user = decodeToken(getToken()) || { id: null };
    if (commentAuthorId === this.props.userId) {
      this.setState({
        isOwnComment: true,
      });
    }
  };

  indicateLikeStatus = () => {
    const comment = this.props.commentDetails;
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
    this.props.reactToComment({
      comments,
      commentId,
      articleId,
    });
  };

  optionHandler = () => {
    const { userId } = this.props;
    const commentId = this.props.commentDetails.id;
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
                    onClick={this.optionHandler}
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
