import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventContentHeader from '../EventContentHeader';
import EventContentDetails from '../EventContentDetails';
import EventContentParticipantList from '../EventContentParticpantList';

const EventPage = ({
  eventName,
  eventDesc,
  eventLoc,
  eventDate,
  eventSchedule,
  participants,
  onClick,
  onUnClick,
}) => (
  <div className="event_page">
    <EventContentHeader
      eventName={eventName}
      eventDate={eventDate}
      eventLoc={eventLoc}
      eventSchedule={eventSchedule}
      onClick={onClick}
      onUnClick={onUnClick}
    />
    <div className="event_content_info">
      <EventContentDetails eventDesc={eventDesc} />
      <EventContentParticipantList participants={participants} />
    </div>
  </div>
);

EventPage.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventDesc: PropTypes.string.isRequired,
  eventLoc: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventSchedule: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({
    ID_USER: PropTypes.string.isRequired,
    USER_FIRSTNAME: PropTypes.string.isRequired,
    USER_NAME: PropTypes.string.isRequired,
    PROFILE_AVATAR: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
  onUnClick: PropTypes.func.isRequired,
};

EventPage.defaultProps = {
  participants: [],
};

export default EventPage;
