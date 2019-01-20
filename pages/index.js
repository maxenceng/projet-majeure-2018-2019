import React from 'react';
import Router from 'next/router';
import ImgHome from '../src/components/ImgHome';
import AllEvents from '../src/containers/AllEvents/index';

const onClickMap = () => {
  Router.push('/map');
};

const Index = () => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <AllEvents />
      </div>
      <button onClick={onClickMap}>Map</button>
    </div>
  </div>
);

export default Index;
