import PropTypes from 'prop-types';
import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';
import PopularAuthorItem from '../PopularAuthorItem/PopularAuthorItem';

// components

// styles
import './VerticalCard.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';
import { DEFAULT_ARTICLE_IMAGE_URL } from '../../../utils/config';
import { Link } from 'react-router-dom';

const VerticalCard = ({ index, article }) => {
  return (
    <div className={`card-${index}`}>
      <Card>
        <Link to={`/read/${article.slug}`}>
          <Image
            src={article.imageThumbnail || DEFAULT_ARTICLE_IMAGE_URL}
            wrapped
            ui={true}
          />
        </Link>
        <Card.Content>
          <Card.Header>
            <Link to={`/read/${article.slug}`}>
              <Title content={article.title} className="title-avg" />
            </Link>
            <Button
              className="btn-transparent"
              type="button"
              value={
                <Icon
                  name="bookmark outline"
                  style={{
                    fontSize: '1.8rem',
                    margin: '0',
                  }}
                />
              }
            />
          </Card.Header>
          <Card.Description>
            {' '}
            <Link to={`/read/${article.slug}`} style={{ color: 'inherit' }}>
              {' '}
              {article.description}
            </Link>
          </Card.Description>
        </Card.Content>
        <div className="card-footer">
          <PopularAuthorItem
            key={'uiojklnmkopiuygh'}
            name={''}
            url={article.author.username}
            image={article.author.image}
            username={article.author.username}
            link={`/read/${article.slug}`}
            value={'Read More'}
          />
        </div>
      </Card>
    </div>
  );
};

export default VerticalCard;

VerticalCard.propTypes = {
  article: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
