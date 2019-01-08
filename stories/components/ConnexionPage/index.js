import React from 'react';
import './index.scss';
import TopFrame from '../TopFrame';
import Button from '../Button';

const ConnexionPage = () => (
  <div className="subPage">
    <div className="header"><TopFrame /></div>
    <div className="subForm">
      <div className="formulaire">
        <div className="inscription">Connexion</div>
        <div className="mail">
          <input className="inputMail" type="text" placeholder="email" />
        </div>
        <div className="password">
          <input className="inputPassword" type="text" placeholder="password" />
        </div>
        <div className="validation">
          <Button content="Validation" onClickType={null} />
        </div>
      </div>
    </div>
  </div>
);
export default ConnexionPage;
