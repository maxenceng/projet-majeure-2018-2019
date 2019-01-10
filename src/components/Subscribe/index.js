import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

const Subscribe = ({ routeInscription }) => (
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
          <Button content="Validation" route={routeInscription} />
        </div>
      </div>
    </div>
  </div>
);

Subscribe.propTypes = {
  routeInscription: PropTypes.string.isRequired,
};

export default Subscribe;
