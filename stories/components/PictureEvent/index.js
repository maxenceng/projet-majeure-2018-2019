import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const PictureEvent = ({ pictureEvent }) => (
  <div className="pictureEvent">
    <img src={pictureEvent} alt="imageEvenement" />
  </div>
);

PictureEvent.propTypes = {
  pictureEvent: PropTypes.string.isRequired,
};

export default PictureEvent;
