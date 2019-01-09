import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';


const TopFrame = ({ onclicktypeConnexion, onclicktypeInscription }) => (
  <div className="topFrame">
    <div className="logo">WeMe</div>
    <div className="connexion">
      <div className="coButton">
        <Button content="connexion" onclicktype={onclicktypeConnexion} />
      </div>
      <div className="insbutton">
        <Button content="Inscription" onclicktype={onclicktypeInscription} />
      </div>
    </div>
  </div>
);

TopFrame.propTypes = {
  onclicktypeConnexion: PropTypes.func.isRequired,
  onclicktypeInscription: PropTypes.func.isRequired,
};

export default TopFrame;
