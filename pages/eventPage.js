import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import '../styles/eventPage.scss';
import EventHub from '../src/containers/EventHub';

const EventPage = () => <EventHub />;

export default Wrapper(EventPage);
