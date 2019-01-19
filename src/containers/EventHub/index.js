import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventPage from '../../components/EventPage';
import actions, { actionPropTypes } from '../../actions';

class EventHub extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    idEvent: PropTypes.string.isRequired,
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
      MEDIA_CONTENT: PropTypes.string.isRequired,
    })),
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

  state = {
    curEvent: {
      EVENT_DATE: '',
      EVENT_DESC: '',
      EVENT_NAME: '',
      ID_EVENT: '',
      ID_LOCATION: '',
      LOC_DISCTRICT: '',
      LOC_EVENT: '',
      LOC_LATITUDE: '',
      LOC_LONGITUDE: '',
    },
  };

  static defaultProps = {
    events: [],
    participant: [],
    interested: [],
  }

  componentWillMount() {
    const {
      idEvent,
      actions: { getStatusParticipationAction, getStatusFavoriteAction },
    } = this.props;
    if (process.browser && this.findEvent()) {
      localStorage.setItem('currentEvent', JSON.stringify(this.findEvent()));
    }
    this.setState({ curEvent: this.findEvent() });
    getStatusParticipationAction(idEvent);
    getStatusFavoriteAction(idEvent);
  }

  findEvent = () => {
    const { idEvent, events } = this.props;
    return events.find(event => event.ID_EVENT === idEvent);
  }

  getDate = (curEvent) => {
    const date = new Date(curEvent.EVENT_DATE * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  }

  getSchedule = (curEvent) => {
    const date = new Date(curEvent.EVENT_DATE * 1);
    const hour = date.toString().split(' ');
    return `${hour[4]}`;
  }

  onClickParticipate = () => {
    const { idEvent, actions: { participateEventAction } } = this.props;
    participateEventAction(idEvent);
  }

  onClickUnParticipate = () => {
    const { idEvent, actions: { unParticipateEventAction } } = this.props;
    unParticipateEventAction(idEvent);
  }

  onClickFavorite = () => {
    const { idEvent, actions: { addFavEventAction } } = this.props;
    addFavEventAction(idEvent);
  }

  onClickUnFavorite = () => {
    const { idEvent, actions: { removeFavEventAction } } = this.props;
    removeFavEventAction(idEvent);
  }

  /* componentWillReceiveProps(newProps) {
    const { participant: { event: newEvents } } = newProps;
    const { participant: { event } } = this.props;
    const idUser = localStorage.getItem('idUser');
    if (!event && newEvents) {
      if (event.find(part => part.ID_USER === idUser)) {
        this.initialStatus = 'OK';
      }
    }
  } */

  render() {
    const {
      idEvent,
      interested,
      participant,
      participation,
      favorite,
    } = this.props;
    const { curEvent } = this.state;
    return (
      <EventPage
        idEvent={idEvent}
        eventPicture={curEvent.MEDIA_CONTENT}
        eventName={curEvent.EVENT_NAME}
        eventDesc={curEvent.EVENT_DESC}
        eventLoc={curEvent.LOC_DISTRICT}
        eventDate={this.getDate(curEvent)}
        eventSchedule={this.getSchedule(curEvent)}
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
  idEvent,
  event: { data: { events } },
  participant,
  participation,
  favorite,
  interested,
}) => ({
  idEvent,
  events,
  participant: participant.data,
  participation,
  favorite,
  interested: interested.data,
});

export default connect(mapStateToProps, actions)(EventHub);
