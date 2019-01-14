import React from 'react';
import PropTypes from 'prop-types';

import Header from '../containers/Header';
import './index.scss';

const Index = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
