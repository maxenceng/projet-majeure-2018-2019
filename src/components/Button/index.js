import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import './index.scss';

const Button = ({ className, content, route }) => (
  <Link href={route}>
    <button
      className={`Button ${className}`}
      type="button"
    >
      {content}
    </button>
  </Link>
);

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
