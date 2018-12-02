import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ text }) => <p>{text}</p>;

Index.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Index;
