import React from 'react';
import './index.scss';
import TopFrame from '../TopFrame';
import EventContentHeader from '../EventContentHeader';
import EventContentDetails from '../EventContentDetails';
import EventContentParticipantList from '../EventContentParticpantList';

const EventPage = () => (
  <div className="event_page">
    <TopFrame>a</TopFrame>
    <EventContentHeader>a</EventContentHeader>
    <div className="event_content_info">
      <EventContentDetails>a</EventContentDetails>
      <EventContentParticipantList>a</EventContentParticipantList>
    </div>
  </div>
);

export default EventPage;
