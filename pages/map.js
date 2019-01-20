import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../src/actions';
import Pin from '../src/components/Pin/index';

class Map extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      EVENT_NAME: PropTypes.string.isRequired,
      ID_EVENT: PropTypes.string.isRequired,
      LOC_LATITUDE: PropTypes.string.isRequired,
      LOC_LONGITUDE: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    events: [],
  }

  componentDidMount = () => {
    const { actions: { getAllEventsAction } } = this.props;
    getAllEventsAction({
      date: null,
      location: 'Lyon',
    });
  }

  get userEvents() {
    const { events } = this.props;
    const pins = [];
    events.forEach((event) => {
      pins.push(
        <Pin
          lat={event.LOC_LATITUDE}
          lng={event.LOC_LONGITUDE}
          idEvent={event.ID_EVENT}
          EVENT_DATE={event.EVENT_DATE}
          EVENT_NAME={event.EVENT_NAME}
          LOC_DISTRICT={event.LOC_DISTRICT}
          MEDIA_CONTENT={event.MEDIA_CONTENT}
        />,
      );
    });
    return pins;
  }

  handleOnChange = (res) => {
    const { actions: { getAllEventsAction } } = this.props;
    getAllEventsAction({
      date: null,
      location: `{"lat": "${res.center.lat}", "lng": "${res.center.lng}"}`,
    });
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={{ lat: 45.764043, lng: 4.835659 }}
        defaultZoom={13}
        hoverDistance={1}
        onChange={this.handleOnChange}
      >
        {this.userEvents}
      </GoogleMapReact>
    );
  }
}

const mapStateToProps = ({ event: { data: { events } }, location }) => ({ events, location });

export default connect(mapStateToProps, actions)(Map);
