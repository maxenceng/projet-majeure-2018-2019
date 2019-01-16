import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import pictureBox from '../../assets/images/party.jpg';

const EventContentDetails = ({ eventDesc }) => (
  <div className="event_details">
    <div className="event_details_item">
      <img className="event_details_picture" src={pictureBox} alt="imageEvenement" />
    </div>
    <div className="event_details_item">
      <h2>Description</h2>
      <p>{eventDesc}</p>
    </div>
  </div>
);

EventContentDetails.propTypes = {
  eventDesc: PropTypes.string.isRequired,
};

export default EventContentDetails;
