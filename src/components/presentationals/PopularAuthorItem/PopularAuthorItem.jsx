import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import UserThumbnail from '../UserThumbnail/UserThumbnail';

import './PopularAuthorItem.scss';

const PopularAuthorItem = ({ name, url, image, info }) => {
  return (
    <div className="author-slot">
      <UserThumbnail
        tag="a"
        href="#"
        name={name}
        url={url}
        image={image}
        info={info}
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
  info: PropTypes.string,
};

export default PopularAuthorItem;
