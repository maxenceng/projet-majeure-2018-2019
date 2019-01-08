import React from 'react';
import './index.scss';
import Button from '../Button';

const TopFrameCo = () => (
  <div id="header">
    <div className="logo">WeMe</div>
    <div className="connexion">
      <button type="button">Evenements</button>
      <i className="far fa-calendar-alt" />
      <i className="far fa-envelope" />
      <i className="far fa-user" />
      <Button />
    </div>
  </div>
);


export default TopFrameCo;
