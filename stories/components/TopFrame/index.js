import React from 'react';
import './index.scss';
import ButtonHaut from '../ButtonHaut';

const TopFrame = () => (
  <div id="header">
    <div className="logo">WeMe</div>
    <div className="connexion">
      <ButtonHaut content="connexion" onclicktype={null} />
      <ButtonHaut content="Inscription" onclicktype={null} />
    </div>
  </div>
);
export default TopFrame;
