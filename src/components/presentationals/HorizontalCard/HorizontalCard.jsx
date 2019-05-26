import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import PopularAuthorItem from '../PopularAuthorItem/PopularAuthorItem';

// components

// styles
import './HorizontalCard.scss';
import Title from '../Title/Title';
import Image from '../Image/Image';

// config
import { DEFAULT_ARTICLE_IMAGE_URL } from '../../../utils/config';

const HorizontalCard = ({ index, article }) => {
  return (
    <div className={`h-card card-${index}`}>
      {article && (
        <Fragment>
          <div>
            <Image
              src={article.imageThumbnail || DEFAULT_ARTICLE_IMAGE_URL}
              className="h-card-image"
            />
          </div>
          <div
            className="content"
            style={{
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title className="title-md mb-0" content={article.title} />
            <p
              className="description"
              style={{
                marginBottom: 'auto',
              }}
            >
              {article.description}
            </p>
            <PopularAuthorItem
              key={'uiojklnmkopiuygh'}
              name={''}
              url={article.author.username}
              image={article.author.image}
              username={article.author.username}
              link={article.id}
              value={'Read More'}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default HorizontalCard;

HorizontalCard.propTypes = {
  article: PropTypes.object,
  index: PropTypes.number,
};
