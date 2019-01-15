import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventPage from '../../components/EventPage';

class EventHub extends React.Component {
  static propTypes = {
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
  };

  static defaultProps = {
    events: [],
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

  render() {
    const curEvent = this.findEvent();
    const day = this.getDate(curEvent);
    const schedule = this.getSchedule(curEvent);
    return (
      <div>
        <EventPage
          eventName={curEvent.EVENT_NAME}
          eventDesc={curEvent.EVENT_DESC}
          eventLoc={curEvent.LOC_DISTRICT}
          eventDate={day}
          eventSchedule={schedule}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ idEvent, event: { data: { events } } }) => ({ idEvent, events });

export default connect(mapStateToProps, null)(EventHub);
