import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({
  className,
  children,
  onClick,
  type,
}) => (
  <button
    className={`Button ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick: null,
  type: 'button',
};

export default Button;
