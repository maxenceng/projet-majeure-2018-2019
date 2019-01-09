import React from 'react';
import './index.scss';
import ImgHome from '../ImgHome';
import AllEventPage from '../AllEventPage';

const HomePage = () => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <AllEventPage />
      </div>
    </div>
  </div>
);

export default HomePage;
