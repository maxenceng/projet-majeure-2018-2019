import React from 'react';
import './index.scss';
import EventHistoryMyEvents from '../EventHistoryMyEvents';
import EventHistoryMyFavs from '../EventHistoryMyFavs';

const EventHistory = () => (
  <div className="event_history">
    <EventHistoryMyEvents />
    <EventHistoryMyFavs />
  </div>
);

export default EventHistory;
