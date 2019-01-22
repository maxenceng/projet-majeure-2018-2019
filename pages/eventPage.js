import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions, { actionPropTypes } from '../src/actions';
import EventHub from '../src/containers/EventHub';


class EventPage extends React.Component {
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
    events: PropTypes.arrayOf(PropTypes.shape({
      EVENT_DATE: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_NAME: PropTypes.string.isRequired,
      ID_EVENT: PropTypes.string.isRequired,
      LOC_DISTRICT: PropTypes.string.isRequired,
      LOC_LATITUDE: PropTypes.string.isRequired,
      LOC_LONGITUDE: PropTypes.string.isRequired,
      MEDIA_CONTENT: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    events: [],
    currentEvent: [],
  }


  componentWillMount() {
    const {
      currentEvent,
      actions: { getStatusParticipationAction, getStatusFavoriteAction },
    } = this.props;
    getStatusParticipationAction(currentEvent.ID_EVENT);
    getStatusFavoriteAction(currentEvent.ID_EVENT);
  }

  findEvent = () => {
    const { currentEvent, events } = this.props;
    return events.find(event => event.ID_EVENT === currentEvent.ID_EVENT);
  }

  render() {
    return (
      <EventHub />
    );
  }
}

const mapStateToProps = ({
  currentEvent,
  event: { data: { events } },
}) => ({ currentEvent, events });

export default connect(mapStateToProps, actions)(EventPage);
