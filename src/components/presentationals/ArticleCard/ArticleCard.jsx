import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//style
import 'semantic-ui-css/semantic.min.css';
import './ArticleCard.scss';

//components
import Title from '../Title/Title';

//pictures
import { DEFAULT_PROFILE_PICTURE } from '../../../config/config';
import { DEFAULT_ARTICLE_IMAGE_URL } from '../../../utils/config';

const Article = props => {
  const { article, user } = props;
  if (user) user.image = user.image || DEFAULT_PROFILE_PICTURE;
  return (
    <div className="article">
      <div className="thumbnail">
        <img src={article.imageThumbnail || DEFAULT_ARTICLE_IMAGE_URL} />
      </div>
      <div className="description">
        <Link to={`/read/${article.slug}`}>
          <Title content={article.title} className="ui header" />
        </Link>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.any.isRequired,
  user: PropTypes.any,
};

export default Article;
