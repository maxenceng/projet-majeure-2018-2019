import React from 'react';
import './index.scss';
import Button from '../Button';

const Subscribe = () => (
  <div className="subPage">
    <div className="subForm">
      <div className="formulaire">
        <div className="inscription">Inscription</div>
        <div className="username">
          <input type="text" className="inputUsername" placeholder="username" />
        </div>
        <div className="mail">
          <input type="text" className="inputMail" placeholder="email" />
        </div>
        <div className="password">
          <input type="text" className="inputPassword" placeholder="password" />
        </div>
        <div className="validation">
          <Button content="Validation" route="/profilePage" />
        </div>
      </div>
    </div>
  </div>
);

export default Subscribe;
