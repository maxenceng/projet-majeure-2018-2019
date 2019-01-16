import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const EventHistoryListing = ({ EVENT_NAME, DATE, MEDIA_CONTENT }) => (
  <div className="event_history_listing">
    <div className="event_history_listing_item">
      <img className="event_history_listting_picture" src={MEDIA_CONTENT} alt="imageEvenement" />
    </div>
    <div className="event_history_listing_item">
      <h3>{DATE} : {EVENT_NAME}</h3>
    </div>
  </div>
);

EventHistoryListing.propTypes = {
  EVENT_NAME: PropTypes.string.isRequired,
  DATE: PropTypes.string.isRequired,
  MEDIA_CONTENT: PropTypes.string.isRequired,
};

export default EventHistoryListing;
