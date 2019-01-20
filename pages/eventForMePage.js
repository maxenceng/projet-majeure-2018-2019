import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AllEventsComponent from '../src/components/AllEvents';
import actions, { actionPropTypes } from '../src/actions';

class eventForMePage extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
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
    location: PropTypes.shape({
      lng: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
    }),
  };

  static defaultProps = {
    events: [],
    location: {
      lng: 0,
      lat: 0,
    },
  }

  componentWillMount = () => {
    const { actions: { getEventForMeAction }, location } = this.props;
    if (!(location.lat === 0 && location.lng === 0)) {
      getEventForMeAction({
        date: null,
        location: 'Lyon',
      });
    }
  }

  componentWillReceiveProps(newProps) {
    const { actions: { getEventForMeAction }, location } = this.props;
    const { location: newLocation } = newProps;
    if (location.lat !== newLocation.lat || location.lng !== newLocation.lng) {
      getEventForMeAction({
        date: null,
        location: newLocation,
      });
    }
  }

  render() {
    const { events } = this.props;
    return (
      <AllEventsComponent events={events} />
    );
  }
}

const mapStateToProps = ({ event: { data: { events } }, location }) => ({ events, location });

export default connect(mapStateToProps, actions)(eventForMePage);
