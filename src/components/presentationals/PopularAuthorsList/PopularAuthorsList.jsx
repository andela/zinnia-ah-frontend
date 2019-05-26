import React from 'react';
import PropTypes from 'prop-types';

import PopularAuthorItem from '../PopularAuthorItem/PopularAuthorItem';
import Title from '../Title/Title';

const PopularAuthorsList = ({ authors }) => {
  return (
    <div className="popular-authors">
      <Title content="Popular Authors" className="title-md index-title" />
      <div className="author-slot-container">
        {authors.map(author => (
          <PopularAuthorItem
            key={author.id}
            name={author.name}
            url={author.username}
            image={author.image}
            username={author.username}
            value="See Posts"
            link={`@${author.username}`}
          />
        ))}
      </div>
    </div>
  );
};

PopularAuthorsList.propTypes = {
  authors: PropTypes.array,
};

export default PopularAuthorsList;
