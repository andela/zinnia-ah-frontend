import React from 'react';
import CommentList from './CommentList';
import CommentForm from '../../container/Comment/CommentForm';
import PropTypes from 'prop-types';

const CommentSection = ({ articleId, comments }) => {
  return (
    <div>
      <CommentForm articleId={articleId} />
      <CommentList comments={comments} />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default CommentSection;
