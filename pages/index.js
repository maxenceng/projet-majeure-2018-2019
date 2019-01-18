import React from 'react';
import ImgHome from '../src/components/ImgHome';
import AllEvents from '../src/containers/AllEvents';
import '../styles/index.scss';

const Index = () => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <AllEvents />
      </div>
    </div>
  </div>
);

export default Index;
