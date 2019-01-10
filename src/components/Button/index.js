import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ className, children, onClick }) => (
  <button
    className={`Button ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: null,
};

export default Button;
