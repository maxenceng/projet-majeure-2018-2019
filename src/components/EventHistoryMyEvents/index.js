import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventHistoryListing from '../EventHistoryListing';

const getDate = (EVENT_DATE) => {
  const date = new Date(EVENT_DATE * 1);
  const dateS = date.toString().split(' ');
  return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
};

const EventHistoryMyEvents = ({ userEvents }) => (
  <div className="agendaEventList">
    <h2>Participating To</h2>
    {userEvents && userEvents.map(({
      EVENT_NAME,
      EVENT_DATE,
      MEDIA_CONTENT,
    }) => (
      <EventHistoryListing
        EVENT_NAME={EVENT_NAME}
        DATE={getDate(EVENT_DATE)}
        MEDIA_CONTENT={MEDIA_CONTENT}
      />
    ))}
  </div>
);

EventHistoryMyEvents.propTypes = {
  userEvents: PropTypes.arrayOf(PropTypes.shape({
    EVENT_NAME: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_DATE: PropTypes.string.isRequired,
    MEDIA_CONTENT: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventHistoryMyEvents;
