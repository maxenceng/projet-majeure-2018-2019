import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ className, children }) => (
  <button
    className={`Button ${className}`}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
