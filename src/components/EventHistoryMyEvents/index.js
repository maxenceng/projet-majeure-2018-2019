import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventHistory from '../../containers/EventHistory';

const EventHistoryMyEvents = ({ userEvents }) => (
  <div className="agendaEventList">
    <h2>Participating To</h2>
    {userEvents && userEvents.map((event) => {
      if (event.PARTICIPATE) {
        return (
          <EventHistory
            key={event.ID_EVENT}
            event={event}
          />);
      }
      return '';
    })}

    <h2>Favorite</h2>
    {userEvents && userEvents.map((event) => {
      if (event.FAVORITE) {
        return (
          <EventHistory
            key={event.ID_EVENT}
            event={event}
          />);
      }
      return '';
    })}
  </div>
);

EventHistoryMyEvents.propTypes = {
  userEvents: PropTypes.arrayOf(PropTypes.shape({
    EVENT_NAME: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_DATE: PropTypes.string.isRequired,
    MEDIA_CONTENT: PropTypes.string.isRequired,
    PARTCIPATE: PropTypes.bool.isRequired,
  })).isRequired,
};

export default EventHistoryMyEvents;
