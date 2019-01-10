import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';

const Connection = ({ routeConnection }) => (
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
          <Button content="Validation" route={routeConnection} />
        </div>
      </div>
    </div>
  </div>
);

Connection.propTypes = {
  routeConnection: PropTypes.string.isRequired,
};

export default Connection;
