import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ onClick, text }) => <button type="button" onClick={onClick}>{text}</button>;

Index.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Index;
