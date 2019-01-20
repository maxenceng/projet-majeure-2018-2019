import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AllEventsComponent from '../../components/AllEvents';
import actions, { actionPropTypes } from '../../actions';


class AllEvents extends React.Component {
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
    eventMode: PropTypes.string.isRequired,
  };

  static defaultProps = {
    events: [],
    location: {
      lng: 0,
      lat: 0,
    },
  }

  componentWillMount = () => {
    const { actions: { getAllEventsAction, switchEventModeAction }, location } = this.props;
    switchEventModeAction();
    if (!(location.lat === 0 && location.lng === 0)) {
      getAllEventsAction({
        date: null,
        location: 'Lyon',
      });
    }
  }

  componentWillReceiveProps(newProps) {
    const { actions: { getAllEventsAction }, location } = this.props;
    const { location: newLocation } = newProps;
    if (location.lat !== newLocation.lat || location.lng !== newLocation.lng) {
      getAllEventsAction({
        date: null,
        location: newLocation,
      });
    }
  }

  handleClickMode = (mode) => {
    const { actions: { switchEventModeAction } } = this.props;
    localStorage.setItem('eventMode', mode);
    switchEventModeAction();
  }

  render() {
    const { events, eventMode } = this.props;
    if (eventMode.data === 'btnAllEventsMode') {
      return (
        <div className="AllEvents">
          <div className="filter">
            <div className="topFilter">
              <input type="text" className="locationFilter" placeholder="Lieu" />
              <input type="date" className="dateFilter" placeholder="2019-01-01" min="2019-01-01" max="2020-12-31" />
              <button type="button">Go</button>
            </div>
            <div className="bottomFilter">
              <button id="btnAllEventsMode" onClick={() => this.handleClickMode('btnAllEventsMode')} type="button" className="btn"> Tous les événements</button>
              <button id="btnEventsForMeMode" onClick={() => this.handleClickMode('btnEventsForMeMode')} type="button" className="btn"> Pour moi </button>
              <button id="randomEventMode" onClick={() => this.handleClickMode('randomEventMode')} type="button" className="btn"> Surprises </button>
            </div>
          </div>
          <AllEventsComponent events={events} />
        </div>
      );
    }
    return (
      <div className="AllEvents">
        <div className="filter">
          <div className="topFilter">
            <input type="text" className="locationFilter" placeholder="Lieu" />
            <input type="date" className="dateFilter" placeholder="2019-01-01" min="2019-01-01" max="2020-12-31" />
            <button type="button">Go</button>
          </div>
          <div className="bottomFilter">
            <button id="btnAllEventsMode" onClick={() => this.handleClickMode('btnAllEventsMode')} type="button" className="btn"> Tous les événements</button>
            <button id="btnEventsForMeMode" onClick={() => this.handleClickMode('btnEventsForMeMode')} type="button" className="btn"> Pour moi </button>
            <button id="randomEventMode" onClick={() => this.handleClickMode('randomEventMode')} type="button" className="btn"> Surprises </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  event: { data: { events } },
  location,
  eventMode,
}) => ({
  events,
  location,
  eventMode,
});

export default connect(mapStateToProps, actions)(AllEvents);
