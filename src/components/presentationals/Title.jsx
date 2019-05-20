import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = props => {
  const { cssClass, content } = props['title'];
  return <h1 className={`title ${cssClass}`}>{content}</h1>;
};

Title.propTypes = {
  title: PropTypes.shape({
    class: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Title;
