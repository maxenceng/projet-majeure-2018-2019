import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import Button from '../src/components/Button';
import '../styles/connectionPage.scss';

const ConnectionPage = () => (
  <div className="connexionPage">
    <div className="connexionForm">
      <div className="formulaire">
        <div className="connexion">Connexion</div>
        <div className="mail">
          <input className="inputMail" type="text" placeholder="email" />
        </div>
        <div className="password">
          <input className="inputPassword" type="text" placeholder="password" />
        </div>
        <div className="validation">
          <Button content="Validation" route="/allEventPage" />
        </div>
      </div>
    </div>
  </div>
);

export default Wrapper(ConnectionPage);
