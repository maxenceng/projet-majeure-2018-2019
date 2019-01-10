import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import Profile from '../src/components/Profile';

const SubscribePage = () => (
  <div id="profilePage">
    <Profile routeProfile="/about" />
  </div>
);

export default Wrapper(SubscribePage);
