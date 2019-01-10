import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import './index.scss';

const LinkButton = ({ className, content, route }) => (
  <Link href={route}>
    <button
      className={`LinkButton ${className}`}
      type="button"
    >
      {content}
    </button>
  </Link>
);

LinkButton.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  className: '',
};

export default LinkButton;
