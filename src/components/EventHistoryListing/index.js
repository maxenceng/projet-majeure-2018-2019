import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

/*
  Ce composant permet d'afficher les événements de la page 'AgendaPage'.
  Props:
  -param de l'événément courant
*/
const EventHistoryListing = ({
  eventDate,
  eventName,
  eventPicture,
  onClickbutton,
}) => (
  <button type="button" className="button" onClick={onClickbutton}>
    <div className="event_history_listing">
      <div className="event_history_listing_item">
        <img
          className="event_history_listting_picture"
          src={eventPicture}
          alt="imageEvenement"
        />
      </div>
      <div className="event_history_listing_item">
        <h3><span>{eventDate}</span> : {eventName}</h3>
      </div>
    </div>
  </button>
);

EventHistoryListing.propTypes = {
  eventDate: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  eventPicture: PropTypes.string.isRequired,
  onClickbutton: PropTypes.func.isRequired,
};

export default EventHistoryListing;
