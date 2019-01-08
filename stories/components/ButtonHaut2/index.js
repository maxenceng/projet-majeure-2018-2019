import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ButtonHaut2 = ({ content, onclicktype }) => <button type="button" onClick={onclicktype} className="ButtonHaut2">{content}</button>;

ButtonHaut2.propTypes = {
  onclicktype: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default ButtonHaut2;
