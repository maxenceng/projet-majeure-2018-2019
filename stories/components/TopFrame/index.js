import React from 'react';
import './index.scss';
import Button from '../Button';

const TopFrame = () => (
  <div className="topFrame">
    <div className="logo">WeMe</div>
    <div className="connexion">
      <div className="coButton">
        <Button content="connexion" onclicktype={null} />
      </div>
      <div className="insbutton">
        <Button content="Inscription" onclicktype={null} />
      </div>
    </div>
  </div>
);
export default TopFrame;
