import React from 'react';
import './index.scss';
import EventHistoryListing from '../EventHistoryListing';

const EventHistoryMyFavs = () => (
  <div className="event_history_my_favs">
    <h2>My Favs</h2>
    <EventHistoryListing />
  </div>
);

export default EventHistoryMyFavs;
