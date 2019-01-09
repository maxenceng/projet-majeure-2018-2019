import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import HomePage from '../src/components/HomePage';

const Index = () => (
  <div id="homePage">
    <HomePage />
  </div>
);

export default Wrapper(Index);
