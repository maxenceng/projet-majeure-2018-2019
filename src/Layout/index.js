import React from 'react';
import PropTypes from 'prop-types';

import TopFrame from '../components/TopFrame';
import './index.scss';

const Index = ({ children }) => (
  <div>
    <TopFrame />
    <div className="container">
      {children}
    </div>
  </div>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
