import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

const TopFrameCo = ({
  onclickEvent,
  onclickDeco,
  onclickAgenda,
  onclickMessage,
  onclickProfile,
}) => (
  <div className="topFrame">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
    <div className="leftSide">
      <div className="logo">WeMe</div>
      <button type="button" className="eventButton" onClick={onclickEvent}>Evenements</button>
    </div>
    <div className="rightSide">
      <div className="buttonIcons">
        <button type="button" onClick={onclickAgenda} className="buttonAgenda">
          <i className="far fa-calendar-alt" />
        </button>
        <button type="button" onClick={onclickMessage} className="buttonMessage">
          <i className="far fa-envelope" />
        </button>
        <button type="button" onClick={onclickProfile} className="buttonProfile">
          <i className="far fa-user" />
        </button>
      </div>
      <div className="decoButton">
        <Button content="Deconnexion" onclicktype={onclickDeco} />
      </div>
    </div>
  </div>
);

TopFrameCo.propTypes = {
  onclickEvent: PropTypes.func.isRequired,
  onclickDeco: PropTypes.func.isRequired,
  onclickAgenda: PropTypes.func.isRequired,
  onclickMessage: PropTypes.func.isRequired,
  onclickProfile: PropTypes.func.isRequired,
};

export default TopFrameCo;
