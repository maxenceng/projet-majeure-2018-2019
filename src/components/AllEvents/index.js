import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import EventComponent from '../EventComponent';

const AllEvents = ({ events }) => (
  <div className="AllEvents">
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
      {events.map(event => (
        <div>
          <EventComponent event={event} />
        </div>
      ))}
    </div>
  </div>
);

AllEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    EVENT_DATE: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
    ID_EVENT: PropTypes.string.isRequired,
    ID_LOCATION: PropTypes.string.isRequired,
    LOC_DISCTRICT: PropTypes.string.isRequired,
    LOC_EVENT: PropTypes.string.isRequired,
    LOC_LATITUDE: PropTypes.string.isRequired,
    LOC_LONGITUDE: PropTypes.string.isRequired,
  })),
};

AllEvents.defaultProps = {
  events: [],
};

export default AllEvents;
