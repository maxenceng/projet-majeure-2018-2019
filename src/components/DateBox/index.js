import React from 'react';
import PropTypes from 'prop-types';
import { getDay, getMonth } from '../../helpers/common';
import './index.scss';

/**
 * Affichage des détails de l'événement sur la miniature de la page 'index'.
 * @param {string} date : date de l'événement
 * @param {string} name : nom de l'événement
 * @param {string} district : nom du quartier
 */
const DateBox = ({ date, name, district }) => (
  <div className="boxDate">
    <div className="dateEvent">
      <div id="dayEvent">{getDay(date)}</div>
      <div id="monthEvent">{getMonth(date)}</div>
    </div>
    <div className="descriptionEvent">
      {name}
      <br />
      <font size="2">
        {district}
      </font>
    </div>
  </div>
);

DateBox.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
};

export default DateBox;
