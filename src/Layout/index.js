import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Index = ({ children }) => (
  <div>
    <header />
    <div className="container">
      {children}
    </div>
  </div>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
