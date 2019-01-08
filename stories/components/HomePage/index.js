import React from 'react';
import './index.scss';
import ImgHome from '../ImgHome';
import EventComponent from '../EventComponent';

const HomePage = () => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <div className="filter">
          <h1>Filter here</h1>
        </div>
        <div className="events">
          <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
