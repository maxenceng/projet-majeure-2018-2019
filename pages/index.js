import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import ImgHome from '../src/components/ImgHome';
import AllEventPage from '../src/components/AllEventPage';
import '../styles/index.scss';

const Index = () => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <AllEventPage route="/eventPage" />
      </div>
    </div>
  </div>
);

export default Wrapper(Index);
