import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const SvgButton = ({ className, onClick, Svg }) => (
  <button
    className={`SvgButton ${className}`}
    type="button"
    onClick={onClick}
  >
    <Svg />
  </button>
);

SvgButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  Svg: PropTypes.func.isRequired,
};

SvgButton.defaultProps = {
  className: '',
  onClick: null,
};

export default SvgButton;
