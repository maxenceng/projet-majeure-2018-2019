import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import AllEvent from '../src/components/AllEventPage';
import '../styles/allEventPage.scss';

const AllEventPage = () => (
  <div id="allEventPage">
    <AllEvent />
  </div>
);

export default Wrapper(AllEventPage);
