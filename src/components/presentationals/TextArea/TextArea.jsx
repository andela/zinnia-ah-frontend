import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ placeholder, className, onChange, value, name }) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
