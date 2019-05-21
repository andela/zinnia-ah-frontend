import React from 'react';

import CommentCard from './CommentCard';
import PropTypes from 'prop-types';

const processComments = comments => {
  return comments.sort((a, b) => {
    const previousDate = new Date(a.createdAt);
    const newDate = new Date(b.createdAt);
    return newDate - previousDate;
  });
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments === []
        ? 'There are no comments'
        : processComments(comments).map(comment => (
            <CommentCard key={comment.id} commentDetails={comment} />
          ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
