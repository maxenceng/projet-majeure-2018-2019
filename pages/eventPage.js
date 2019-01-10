import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import '../styles/eventPage.scss';
import EventContentHeader from '../src/components/EventContentHeader';
import EventContentDetails from '../src/components/EventContentDetails';
import EventContentParticipantList from '../src/components/EventContentParticpantList';


const EventPage = () => (
  <div className="event_page">
    <EventContentHeader />
    <div className="event_content_info">
      <EventContentDetails />
      <EventContentParticipantList />
    </div>
  </div>
);

export default Wrapper(EventPage);
