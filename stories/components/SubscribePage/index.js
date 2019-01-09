import React from 'react';
import './index.scss';
import TopFrame from '../TopFrame';
import Button from '../Button';

const SubscribePage = () => (
  <div className="subPage">
    <div className="header"><TopFrame /></div>
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
          <Button content="Validation" onclicktype={null} />
        </div>
      </div>
    </div>
  </div>
);
export default SubscribePage;
