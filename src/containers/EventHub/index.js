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
    })),
    participant: PropTypes.arrayOf(PropTypes.shape({
      ID_USER: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
      PROFILE_AVATAR: PropTypes.string.isRequired,
    })),
    participate: PropTypes.string.isRequired,
  };

  static defaultProps = {
    events: [],
    participant: [],
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

  render() {
    const { participant, participate } = this.props;
    const curEvent = this.findEvent();
    const day = this.getDate(curEvent);
    const schedule = this.getSchedule(curEvent);
    console.log(participate.data);
    return (
      <EventPage
        eventName={curEvent.EVENT_NAME}
        eventDesc={curEvent.EVENT_DESC}
        eventLoc={curEvent.LOC_DISTRICT}
        eventDate={day}
        eventSchedule={schedule}
        participants={participant.event}
        onClick={this.onClickParticipate}
        onUnClick={this.onClickUnParticipate}
      />
    );
  }
}

const mapStateToProps = ({
  idEvent,
  event: { data: { events } },
  participant,
  participate,
}) => ({
  idEvent,
  events,
  participant: participant.data,
  participate,
});

export default connect(mapStateToProps, actions)(EventHub);
