import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import UserThumbnail from '../UserThumbnail/UserThumbnail';
import CommentReaction from '../../container/Comment/CommentReaction';
import './CommentCard.scss';

class CommentCard extends Component {
  state = {};

  commentDetails = this.props.commentDetails;

  componentDidMount() {}
  userDetail = async () => {
    const { data } = await axios.get(`user/${props.commentDetails.userid}`);
    const { username, image } = data;
    this.setState({ user: { username, image } });
  };
  render() {
    const { body } = this.props.commentDetails;

    return (
      <div className="comment-card">
        <UserThumbnail
          url={`/@${username}`}
          image={image}
          name={`@${username}`}
          info="5 mins ago"
        />
        <p className="comment-body">{body}</p>
        <CommentReaction />
      </div>
    );
  }
}

CommentCard.propTypes = {
  commentDetails: PropTypes.object.isRequired,
};

export default CommentCard;
