import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
