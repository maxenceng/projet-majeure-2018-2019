import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import EventHistory from '../src/components/EventHistory';
import '../styles/allEventPage.scss';

const agendaPage = () => (
  <div className="agenda_page">
    <EventHistory />
  </div>
);

export default Wrapper(agendaPage);
