import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class CommentReaction extends Component {
  render() {
    const { isLiked } = this.props;
    const activeLike = isLiked ? '' : ' outline';

    return (
      <button className="like-button">
        <Icon
          name={`thumbs up${activeLike}`}
          style={{
            fontSize: '1.80rem',
          }}
        />
      </button>
    );
  }
}

CommentReaction.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};

export default CommentReaction;
