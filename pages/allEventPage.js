import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import EventComponent from '../src/components/EventComponent';
import '../styles/allEventPage.scss';

const AllEventPage = () => (
  <div className="eventPage">
    <div className="filter">
      <div className="topFilter">
        <input type="text" className="locationFilter" placeholder="Lieu" />
        <input type="date" className="dateFilter" placeholder="2019-01-01" min="2019-01-01" max="2020-12-31" />
        <button type="button">Go</button>
      </div>
      <div className="bottomFilter">
        <button type="button" className="btn active"> Tous les événements</button>
        <button type="button" className="btn"> Pour moi </button>
        <button type="button" className="btn"> Surprises </button>
      </div>
    </div>
    <div className="events">
      <div className="eventCompo"><EventComponent routeSelected="/" /></div>
      <div className="eventCompo"><EventComponent routeSelected="/" /></div>
      <div className="eventCompo"><EventComponent routeSelected="/" /></div>
      <div className="eventCompo"><EventComponent routeSelected="/" /></div>
      <div className="eventCompo"><EventComponent routeSelected="/" /></div>
    </div>
  </div>
);

export default Wrapper(AllEventPage);
