import React from 'react';

import CommentCard from './CommentCard';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments === []
        ? 'There are no comments'
        : comments.map(comment => (
            <CommentCard key={comment.id} commentDetails={comment} />
          ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
