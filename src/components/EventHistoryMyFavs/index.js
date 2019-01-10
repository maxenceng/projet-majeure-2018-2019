import React from 'react';
import './index.scss';
import EventHistoryListing from '../EventHistoryListing';

const EventHistoryMyFavs = () => (
  <div className="event_history_my_favs">
    <h2>My Events</h2>
    <EventHistoryListing />
    <EventHistoryListing />
  </div>
);

export default EventHistoryMyFavs;
