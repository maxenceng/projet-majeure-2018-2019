import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import TopFrame from '../TopFrame';
import Button from '../Button';

const ConnectionPage = ({ onclicktype }) => (
  <div className="connexionPage">
    <div className="header"><TopFrame /></div>
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
          <Button content="Validation" onclicktype={onclicktype} />
        </div>
      </div>
    </div>
  </div>
);

ConnectionPage.propTypes = {
  onclicktype: PropTypes.func.isRequired,
};

export default ConnectionPage;
