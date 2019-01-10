import React from 'react';
import './index.scss';
import EventHistoryListing from '../EventHistoryListing';

const EventHistoryMyEvents = () => (
  <div className="event_history_my_events">
    <h2>My Favorites</h2>
    <EventHistoryListing />
    <EventHistoryListing />
    <EventHistoryListing />
  </div>
);

export default EventHistoryMyEvents;
