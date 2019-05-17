import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  placeholder,
  className,
  onChange,
  value,
  name,
  cols,
  rows,
  onKeyDown,
  autofocus,
}) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        name={name}
        cols={cols}
        rows={rows}
        onKeyDown={onKeyDown}
        autofocus={autofocus}
      />
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  cols: PropTypes.string,
  rows: PropTypes.string,
  onKeyDown: PropTypes.func,
  autofocus: PropTypes.string,
};

export default TextArea;
