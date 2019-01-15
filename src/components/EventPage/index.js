import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventContentHeader from '../EventContentHeader';
import EventContentDetails from '../EventContentDetails';
import EventContentParticipantList from '../EventContentParticpantList';

const EventPage = ({
  eventName,
  eventDesc,
  eventDate,
}) => (
  <div className="event_page">
    <EventContentHeader eventName={eventName} eventDate={eventDate} />
    <div className="event_content_info">
      <EventContentDetails eventDesc={eventDesc} />
      <EventContentParticipantList />
    </div>
  </div>
);

EventPage.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventDesc: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
};

export default EventPage;
