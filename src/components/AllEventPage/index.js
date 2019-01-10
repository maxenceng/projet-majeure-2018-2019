import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventComponent from '../EventComponent';

const AllEventPage = ({ route }) => (
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
      <div className="eventCompo"><EventComponent routeSelected={route} /></div>
      <div className="eventCompo"><EventComponent routeSelected={route} /></div>
      <div className="eventCompo"><EventComponent routeSelected={route} /></div>
      <div className="eventCompo"><EventComponent routeSelected={route} /></div>
      <div className="eventCompo"><EventComponent routeSelected={route} /></div>
    </div>
  </div>
);

AllEventPage.propTypes = {
  route: PropTypes.string.isRequired,
};

export default AllEventPage;
