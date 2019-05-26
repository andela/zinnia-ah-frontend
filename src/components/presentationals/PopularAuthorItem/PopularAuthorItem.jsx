import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/@${username}`}>
        <Button
          type="submit"
          value="See Posts"
          className="btn-white right-small"
        />
      </Link>
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
