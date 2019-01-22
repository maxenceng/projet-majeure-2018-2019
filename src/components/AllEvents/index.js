import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Event from '../../containers/Event';

/**
 * Ce composant permet d'afficher la liste des événements.
 * @param {object} events : Array de tous les événements.
 */
const AllEvents = ({ events }) => (
  <div className="events">
    {events.map(event => (
      <div className="eventThumbnail" key={event.ID_EVENT}>
        <Event event={event} />
      </div>
    ))}
  </div>
);

AllEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    EVENT_DATE: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
    ID_EVENT: PropTypes.string.isRequired,
    LOC_DISTRICT: PropTypes.string.isRequired,
    LOC_EVENT: PropTypes.string.isRequired,
    LOC_LATITUDE: PropTypes.string.isRequired,
    LOC_LONGITUDE: PropTypes.string.isRequired,
  })),
};

AllEvents.defaultProps = {
  events: [],
};

export default AllEvents;
