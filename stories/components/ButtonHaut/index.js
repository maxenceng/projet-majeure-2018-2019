import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ButtonHaut = ({ content, onclicktype }) => <button onClick={onclicktype} type="button" className="ButtonHaut">{content}</button>;

ButtonHaut.propTypes = {
  onclicktype: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default ButtonHaut;
