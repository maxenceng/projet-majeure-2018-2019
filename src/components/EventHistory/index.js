import React from 'react';
import PropTypes from 'prop-types';
import EventHistoryMyEvents from '../EventHistoryMyEvents';

const EventHistory = ({ userEvents }) => (
  <div className="event_history">
    <EventHistoryMyEvents
      userEvents={userEvents}
    />
  </div>
);

EventHistory.propTypes = {
  userEvents: PropTypes.arrayOf(PropTypes.shape({
    ID_EVENT: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_DATE: PropTypes.string.isRequired,
    PARTICIPATE: PropTypes.bool.isRequired,
  })).isRequired,
};

export default EventHistory;
