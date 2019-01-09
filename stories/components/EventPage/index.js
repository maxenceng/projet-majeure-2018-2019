import React from 'react';
import './index.scss';
import EventComponent from '../EventComponent';

const EventPage = () => (
  <div className="eventPage">
    <div className="filter">
      <div className="topFilter">
        <input type="text" className="locationFilter" placeholder="Lieu" />
        <input type="date" className="dateFilter" placeholder="2019-01-01" min="2019-01-01" max="2020-12-31" />
        <button type="button" onClick={null}>Go</button>
      </div>
      <div className="bottomFilter">
        <button type="button" className="btn active" onClick={null}> Tous les événements</button>
        <button type="button" className="btn" onClick={null}> Pour moi </button>
        <button type="button" className="btn" onClick={null}> Surprises </button>
      </div>
    </div>
    <div className="events">
      <div className="eventCompo"><EventComponent /></div>
      <div className="eventCompo"><EventComponent /></div>
      <div className="eventCompo"><EventComponent /></div>
      <div className="eventCompo"><EventComponent /></div>
      <div className="eventCompo"><EventComponent /></div>
    </div>
  </div>
);

export default EventPage;
