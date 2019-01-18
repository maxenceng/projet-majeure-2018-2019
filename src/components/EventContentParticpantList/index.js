import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventContentParticipant from '../../containers/EventContentParticipant';

const idUser = process.browser && localStorage.getItem('idUser');

const EventContentParticipantList = ({ participants }) => (
  <div className="event_participant_list">
    {participants.map(part => (
      idUser !== part.ID_USER && (
      <React.Fragment>
        <div key={part.ID_USER}>
          <EventContentParticipant
            participant={part}
          />
        </div>
      </React.Fragment>)
    ))}
  </div>
);

EventContentParticipantList.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.shape({
    ID_USER: PropTypes.string.isRequired,
    USER_FIRSTNAME: PropTypes.string.isRequired,
    USER_NAME: PropTypes.string.isRequired,
    PROFILE_AVATAR: PropTypes.string.isRequired,
  })),
};

EventContentParticipantList.defaultProps = {
  participants: [],
};

export default EventContentParticipantList;
