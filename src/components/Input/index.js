import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}) => (
  <label
    className="Input"
    htmlFor={name}
  >
    <input
      id={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChange: null,
};

export default Input;
