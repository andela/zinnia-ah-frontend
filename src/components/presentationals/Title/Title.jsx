import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = props => {
  return (
    <h1 className={`title ${props.title.class}`}>{props.title.content}</h1>
  );
};

Title.propTypes = {
  title: PropTypes.shape({
    class: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Title;
