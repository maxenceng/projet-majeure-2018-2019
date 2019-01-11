import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import Subscribe from '../src/components/Subscribe';

const SubscribePage = () => (
  <div id="subPage">
    <Subscribe />
  </div>
);

export default Wrapper(SubscribePage);
