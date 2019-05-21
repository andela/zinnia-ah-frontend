import React from 'react';
import PropTypes from 'prop-types';

import {
  DEFAULT_ARTICLE_PICTURE,
  DEFAULT_PROFILE_PICTURE,
} from '../../../config/config';

//style
import 'semantic-ui-css/semantic.min.css';
import './ArticleCard.scss';

import Title from '../Title/Title';
import UserThumbnail from '../UserThumbnail/UserThumbnail';

const Article = props => {
  const { article, user } = props;
  if (user) user.image = user.image || DEFAULT_PROFILE_PICTURE;
  return (
    <div className="article">
      <div className="thumbnail">
        <a href={article.slug}>
          <img src={article.imageThumbnail || DEFAULT_ARTICLE_PICTURE} />
        </a>
      </div>
      <div className="description">
        <a href={article.slug}>
          <Title content={article.title} className="ui header" />
        </a>
        <p>{article.description}</p>
        {user && (
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
        )}
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.any.isRequired,
  user: PropTypes.any,
};

export default Article;
