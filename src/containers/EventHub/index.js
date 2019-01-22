import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventPage from '../../components/EventPage';
import actions, { actionPropTypes } from '../../actions';

class EventHub extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    currentEvent: PropTypes.shape({
      EVENT_DATE: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_NAME: PropTypes.string.isRequired,
      ID_EVENT: PropTypes.string.isRequired,
      LOC_DISTRICT: PropTypes.string.isRequired,
      LOC_LATITUDE: PropTypes.string.isRequired,
      LOC_LONGITUDE: PropTypes.string.isRequired,
      MEDIA_CONTENT: PropTypes.string.isRequired,
    }),
    participant: PropTypes.arrayOf(PropTypes.shape({
      ID_USER: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
      PROFILE_AVATAR: PropTypes.string.isRequired,
    })),
    interested: PropTypes.arrayOf(PropTypes.shape({
      ID_USER: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
      PROFILE_AVATAR: PropTypes.string.isRequired,
    })),
    participation: PropTypes.string.isRequired,
    favorite: PropTypes.string.isRequired,
  };

  static defaultProps = {
    currentEvent: [],
    participant: [],
    interested: [],
  }

  getDate = () => {
    const { currentEvent } = this.props;
    const date = new Date(currentEvent.EVENT_DATE * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  }

  getSchedule = () => {
    const { currentEvent } = this.props;
    const date = new Date(currentEvent.EVENT_DATE * 1);
    const hour = date.toString().split(' ');
    return `${hour[4]}`;
  }

  onClickParticipate = () => {
    const { currentEvent, actions: { participateEventAction } } = this.props;
    participateEventAction(currentEvent.ID_EVENT);
  }

  onClickUnParticipate = () => {
    const { currentEvent, actions: { unParticipateEventAction } } = this.props;
    unParticipateEventAction(currentEvent.ID_EVENT);
  }

  onClickFavorite = () => {
    const { currentEvent, actions: { addFavEventAction } } = this.props;
    addFavEventAction(currentEvent.ID_EVENT);
  }

  onClickUnFavorite = () => {
    const { currentEvent, actions: { removeFavEventAction } } = this.props;
    removeFavEventAction(currentEvent.ID_EVENT);
  }

  render() {
    const {
      currentEvent,
      interested,
      participant,
      participation,
      favorite,
    } = this.props;
    return (
      <EventPage
        idEvent={currentEvent.ID_EVENT}
        eventPicture={currentEvent.MEDIA_CONTENT}
        eventName={currentEvent.EVENT_NAME}
        eventDesc={currentEvent.EVENT_DESC}
        eventLoc={currentEvent.LOC_DISTRICT}
        eventDate={this.getDate()}
        eventSchedule={this.getSchedule()}
        participants={participant.event}
        interested={interested.event}
        onClickParticipate={this.onClickParticipate}
        onClickUnParticipate={this.onClickUnParticipate}
        onClickFavorite={this.onClickFavorite}
        onClickUnFavorite={this.onClickUnFavorite}
        statusParticipant={participation.data}
        statusFavorite={favorite.data}
      />
    );
  }
}

const mapStateToProps = ({
  currentEvent,
  participant,
  participation,
  favorite,
  interested,
}) => ({
  currentEvent,
  participant: participant.data,
  participation,
  favorite,
  interested: interested.data,
});

export default connect(mapStateToProps, actions)(EventHub);
