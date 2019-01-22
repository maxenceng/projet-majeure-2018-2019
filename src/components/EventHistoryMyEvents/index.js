import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventHistory from '../../containers/EventHistory';

/**
 * Ce composant permet l'affichage des:
    -événements auxquels l'utilisateur participe
    -événements ajouté en favoris par l'utilisateur
  En fonction des paramètres 'PARTICIPATE' et 'FAVORITE', on affichera les événements
  que l'utilisateur a ajouté.
  Ce composant ce situe dans la page: AgendaPage.
 * @param {object} userEvents :les événements relatifs au participant
 */
const EventHistoryMyEvents = ({ userEvents }) => (
  <div className="agendaEventList">
    <div id="myParticpatingEvent" className="eventListUsers">
      <h2>Mes événements:</h2>
      {userEvents && userEvents.map((event) => {
        if (event.PARTICIPATE) {
          return (
            <EventHistory
              key={event.ID_EVENT}
              event={event}
            />
          );
        }
        return '';
      })}
    </div>

    <div id="myFavEvent" className="eventListUsers">
      <h2>Mes événements favoris:</h2>
      {userEvents && userEvents.map((event) => {
        if (event.FAVORITE) {
          return (
            <div className="eventListUsers">
              <EventHistory
                key={event.ID_EVENT}
                event={event}
              />
            </div>);
        }
        return '';
      })}
    </div>
  </div>
);

EventHistoryMyEvents.propTypes = {
  userEvents: PropTypes.arrayOf(PropTypes.shape({
    EVENT_NAME: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_DATE: PropTypes.string.isRequired,
    MEDIA_CONTENT: PropTypes.string.isRequired,
    PARTCIPATE: PropTypes.bool.isRequired,
  })).isRequired,
};

export default EventHistoryMyEvents;
