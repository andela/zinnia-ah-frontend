import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, ...props }) => {
  return <img src={src} {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  props: PropTypes.object,
};

export default Image;
