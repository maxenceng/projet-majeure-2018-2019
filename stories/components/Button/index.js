import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ className, content, onclicktype }) => (
  <button
    className={`Button ${className}`}
    onClick={onclicktype}
    type="button"
  >
    {content}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  onclicktype: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
