import React from 'react';
import PropTypes from 'prop-types';

import PopularAuthorItem from '../PopularAuthorItem/PopularAuthorItem';

const PopularAuthorsList = ({ authors }) => {
  console.log('Kinging', authors);
  const popAuthorsList = authors.map(author => {
    return (
      <PopularAuthorItem
        key={author.id}
        name={author.name}
        url={author.url}
        image={author.image}
        info={author.info}
      />
    );
  });
  return (
    <div>
      <h1>Popular Authors</h1>
      {popAuthorsList}
    </div>
  );
};

PopularAuthorsList.propTypes = {
  authors: PropTypes.array,
};

export default PopularAuthorsList;
