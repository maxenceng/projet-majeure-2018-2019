import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventContentParticipant from '../EventContentParticipant';

const EventContentParticipantList = ({ participants }) => (
  <div className="event_participant_list">
    {participants.map(part => (
      <div key={part.ID_USER}>
        <EventContentParticipant
          firstname={part.USER_FIRSTNAME}
          username={part.USER_NAME}
          picture={part.PROFILE_AVATAR}
        />
      </div>
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
