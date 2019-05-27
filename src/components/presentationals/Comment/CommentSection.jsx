import React from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CommentForm from '../../container/Comment/CommentForm';
import { getToken } from '../../../api/helpers';

const CommentSection = ({ articleId, comments }) => {
  return (
    <div className="comment-section">
      {getToken() ? (
        <CommentForm articleId={articleId} />
      ) : (
        <Link to="/login"> Please Login to Comment </Link>
      )}
      <CommentList comments={comments} />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default CommentSection;
