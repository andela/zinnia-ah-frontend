import React from 'react';
import CommentList from './CommentList';
import CommentForm from '../../container/Comment/CommentForm';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { getToken } from '../../../api/helpers';
import { Button } from 'semantic-ui-react';

const CommentSection = ({ articleId, comments, location }) => {
  return (
    <div className="comment-section">
      {getToken() ? (
        <CommentForm articleId={articleId} />
      ) : (
        <>
          <br />
          <Link
            to={{
              pathname: '/login',
              state: {
                from: location,
              },
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <br />
            <Button
              color="black"
              content="Please Login to Comment on this Article"
            />
          </Link>
          <br />
        </>
      )}
      <CommentList comments={comments} />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  articleId: PropTypes.string.isRequired,
  location: PropTypes.object,
};

export default withRouter(CommentSection);
