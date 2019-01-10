import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import HomePage from '../src/components/HomePage';

const Index = () => (
  <div id="homePage">
    <HomePage route="/about" />
  </div>
);

export default Wrapper(Index);
