import React from 'react';
import './index.scss';
import Button from '../Button';

const TopFrame = () => (
  <div id="header">
    <div className="logo">WeMe</div>
    <div className="connexion">
      <Button content="connexion" onclicktype={null} />
      <Button content="Inscription" onclicktype={null} />
    </div>
  </div>
);
export default TopFrame;
