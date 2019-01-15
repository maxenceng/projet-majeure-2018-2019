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
    const curEvent = events.find(event => event.ID_EVENT === idEvent);
    return curEvent;
  }

  render() {
    const curEvent = this.findEvent();
    return (
      <div>
        <EventPage
          eventName={curEvent.EVENT_NAME}
          eventDesc={curEvent.EVENT_DESC}
          eventDate={curEvent.EVENT_DATE}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ idEvent, event: { data: { events } } }) => ({ idEvent, events });

export default connect(mapStateToProps, null)(EventHub);
