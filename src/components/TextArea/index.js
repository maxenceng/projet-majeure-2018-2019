import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextArea = ({
  name,
  value,
  placeholder,
  onChange,
}) => (
  <textarea
    cols="40"
    rows="7"
    id={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  placeholder: '',
  onChange: null,
};

export default TextArea;
