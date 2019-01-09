import React from 'react';
import './index.scss';
import EventContentHeader from '../EventContentHeader';
import EventContentDetails from '../EventContentDetails';
import EventContentParticipantList from '../EventContentParticpantList';
import TopFrameCo from '../TopFrameCo';

const EventPage = () => (
  <div className="event_page">
    <TopFrameCo>a</TopFrameCo>
    <EventContentHeader>a</EventContentHeader>
    <div className="event_content_info">
      <EventContentDetails>a</EventContentDetails>
      <EventContentParticipantList>a</EventContentParticipantList>
    </div>
  </div>
);

export default EventPage;
