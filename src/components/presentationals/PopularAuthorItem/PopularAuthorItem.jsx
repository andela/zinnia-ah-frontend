import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import UserThumbnail from '../UserThumbnail/UserThumbnail';

import './PopularAuthorItem.scss';

const PopularAuthorItem = ({ name, url, image, username }) => {
  return (
    <div className="author-slot">
      <UserThumbnail
        tag="a"
        href="#"
        name={name}
        url={url}
        image={image}
        username={username}
      />
      <Button
        type="submit"
        value="See Posts"
        className="btn-white right-small"
      />
    </div>
  );
};

PopularAuthorItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  username: PropTypes.string,
};

export default PopularAuthorItem;
