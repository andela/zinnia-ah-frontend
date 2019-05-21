import React from 'react';
import PropTypes from 'prop-types';

//style
import 'semantic-ui-css/semantic.min.css';
import './Article.scss';

import Title from '../Title/Title';
import UserThumbnail from '../UserThumbnail/UserThumbnail';

const Article = props => {
  const { user, article } = props;
  return (
    <div className="article">
      <div className="thumbnail">
        <a href={article.slug}>
          <img src={article.thumbnail} />
        </a>
      </div>
      <div className="description">
        <a href={article.slug}>
          <Title content={article.title} className="ui header" />
        </a>
        <p>{article.description}</p>
        <div className="footer">
          <UserThumbnail
            name={`${user.firstName} ${user.lastName}`}
            info={`@${user.username}`}
            image={user.image}
            url={user.username}
          />

          <a href={article.slug} className="btn btn-white read-more">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  user: PropTypes.any.isRequired,
  article: PropTypes.any.isRequired,
};

export default Article;
