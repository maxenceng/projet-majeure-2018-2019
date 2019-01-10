import React from 'react';
import './index.scss';
import pp from '../../assets/images/mario_profile.jpg';

const EventContentParticipant = () => (
  <div className="event_participant">
    <img className="event_participant_item pp" src={pp} alt="profile pic" />
    <h3 className="event_participant_item">Mario Dupont</h3>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />
    <i className="event_participant_item fa fa-envelope" />
  </div>
);

export default EventContentParticipant;
