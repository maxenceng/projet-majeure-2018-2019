import React from 'react';
import './index.scss';
import EventContentHeader from '../EventContentHeader';
import EventContentDetails from '../EventContentDetails';
import EventContentParticipantList from '../EventContentParticpantList';
import TopFrameCo from '../TopFrame';

const EventPage = () => (
  <div className="event_page">
    <TopFrameCo>a</TopFrameCo>
    <EventContentHeader />
    <div className="event_content_info">
      <EventContentDetails />
      <EventContentParticipantList />
    </div>
  </div>
);

export default EventPage;
