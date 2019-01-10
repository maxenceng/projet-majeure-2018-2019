import React from 'react';
import './index.scss';
import HomePage from '../HomePage';
import TopFrame from '../TopFrame';

const StandardPage = () => (
  <div id="standardPage">
    <div id="fixedHeader"><TopFrame /></div>
    <div id="standardBody"><HomePage /></div>
  </div>
);

export default StandardPage;
