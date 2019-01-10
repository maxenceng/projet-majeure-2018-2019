import React from 'react';
import './index.scss';
import ImgHome from '../ImgHome';

const Parallax = () => (
  <div className="parallax">
    <div className="container1"><ImgHome /></div>
    <div id="slide2"><div className="container2">Présentation:</div></div>
    <div id="slide3"><div className="container3">bisous</div></div>
  </div>
);

export default Parallax;
