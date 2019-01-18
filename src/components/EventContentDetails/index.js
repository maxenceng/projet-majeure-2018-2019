import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const EventContentDetails = ({ eventDesc, eventPicture }) => (
  <div className="event_details">
    <div className="event_details_item">
      <img className="event_details_picture" src={eventPicture} alt="imageEvenement" />
    </div>
    <div className="event_details_item">
      <h2>Description</h2>
      <p>{eventDesc}</p>
    </div>
  </div>
);

EventContentDetails.propTypes = {
  eventPicture: PropTypes.string.isRequired,
  eventDesc: PropTypes.string.isRequired,
};

export default EventContentDetails;
