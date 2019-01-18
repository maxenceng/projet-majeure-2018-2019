import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventContentHeader from '../EventContentHeader';
import EventContentDetails from '../EventContentDetails';
import EventContentParticipantList from '../EventContentParticpantList';

const EventPage = ({
  eventPicture,
  eventName,
  eventDesc,
  eventLoc,
  eventDate,
  eventSchedule,
  participants,
  onClickParticipate,
  onClickUnParticipate,
  status,
}) => (
  <div className="event_page">
    <EventContentHeader
      eventName={eventName}
      eventDate={eventDate}
      eventLoc={eventLoc}
      eventSchedule={eventSchedule}
      onClickParticipate={onClickParticipate}
      onClickUnParticipate={onClickUnParticipate}
      status={status}
    />
    <div className="event_content_info">
      <EventContentDetails eventPicture={eventPicture} eventDesc={eventDesc} />
      <EventContentParticipantList participants={participants} />
    </div>
  </div>
);

EventPage.propTypes = {
  eventPicture: PropTypes.string.isRequired,
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
  onClickParticipate: PropTypes.func.isRequired,
  onClickUnParticipate: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

EventPage.defaultProps = {
  participants: [],
};

export default EventPage;
