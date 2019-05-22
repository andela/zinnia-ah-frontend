import React from 'react';

import PopularAuthorItem from '../PopularAuthorItem/PopularAuthorItem';

// components

// styles
import './HorizontalCard.scss';
import Title from '../Title/Title';
import Image from '../Image/Image';

const HorizontalCard = () => (
  <div className="h-card">
    <div>
      <Image
        src="https://res.cloudinary.com/nedy123/image/upload/v1514128720/mike_vobxlw.jpg"
        className="h-card-image"
      />
    </div>
    <div
      className="content"
      style={{
        paddingLeft: '1rem',
      }}
    >
      <Title className="title-md mb-0" content="Nature and Life" />
      <p className="description">
        A tab could be a different number of columns depending on your
        environment, but a space is always one column.
      </p>
      <PopularAuthorItem
        key={'uiojklnmkopiuygh'}
        name={'ebenezer'}
        url={'notontwitter.com'}
        image={''}
        username={'eben'}
      />
    </div>
  </div>
);

export default HorizontalCard;
