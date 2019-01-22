import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

/**
 * Image de la miniature de l'événement de la page 'index'.
 * @param {string} pictureEvent : url de l'image de l'événement
 */
const PictureEvent = ({ pictureEvent }) => (
  <div className="pictureEvent">
    <img src={pictureEvent} alt="imageEvenement" />
  </div>
);

PictureEvent.propTypes = {
  pictureEvent: PropTypes.string.isRequired,
};

export default PictureEvent;
