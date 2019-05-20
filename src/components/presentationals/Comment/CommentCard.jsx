import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import UserThumbnail from '../UserThumbnail/UserThumbnail';
import CommentReaction from '../../container/Comment/CommentReaction';
import './CommentCard.scss';

class CommentCard extends Component {
  state = {};

  render() {
    const { body, createdAt, likes, id, articleId } = this.props.commentDetails;
    const { username, image } = this.props.commentDetails.author;
    const time = moment(createdAt).fromNow();

    return (
      <div className="comment-card">
        <UserThumbnail
          url={`/@${username}`}
          image={image}
          name={username}
          info={time}
        />
        <p className="comment-body">{body}</p>
        <CommentReaction commentId={id} articleId={articleId} likes={likes} />
      </div>
    );
  }
}

CommentCard.propTypes = {
  commentDetails: PropTypes.object.isRequired,
};

export default CommentCard;
