import React from 'react';
import CommentList from './CommentList';
import CommentForm from '../../container/Comment/CommentForm';
import PropTypes from 'prop-types';

const CommentSection = ({ comments }) => {
  return (
    <div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentSection;
