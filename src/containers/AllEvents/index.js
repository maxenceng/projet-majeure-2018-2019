import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AllEventsComponent from '../../components/AllEvents';
import actions, { actionPropTypes } from '../../actions';

/**
 * Ce composant React permet l'affichage de tous les événements disponibles.
 */
class AllEvents extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      EVENT_DATE: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_NAME: PropTypes.string.isRequired,
      ID_EVENT: PropTypes.string.isRequired,
      LOC_DISTRICT: PropTypes.string.isRequired,
      LOC_LATITUDE: PropTypes.string.isRequired,
      LOC_LONGITUDE: PropTypes.string.isRequired,
    })),
    location: PropTypes.shape({
      lng: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
    }),
    eventMode: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    events: [],
    location: {
      lng: 0,
      lat: 0,
    },
  }

  /**
   * Ce composant permet de récupérer tous les événements.
   */
  componentWillMount = () => {
    const { actions: { getAllEventsAction }, location, eventMode } = this.props;
    eventMode.data = 'btnAllEventsMode';
    if (!(location.lat === 0 && location.lng === 0)) {
      getAllEventsAction({
        date: null,
        location: 'Lyon',
      });
    }
  }

  /**
   * Mettre à jour le tableau de tous les événements.
   * @param {*} newProps : récupère les nouvelles données dès réception d'un nouveau prop
   */
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

  /**
   * Cette méthode permet de passer du mode "Evénements pour moi" au mode "Tous les événements"
   * En fonction du mode, on déclenche l'action relative au mode.
   */
  handleClickMode = (mode) => {
    const {
      actions: { switchEventModeAction, getEventForMeAction, getAllEventsAction },
    } = this.props;
    localStorage.setItem('eventMode', mode);
    switchEventModeAction();
    if (mode === 'btnEventsForMeMode') {
      getEventForMeAction();
    } else {
      getAllEventsAction({
        date: null,
        location: 'Lyon',
      });
    }
  }

  render() {
    const { events } = this.props;
    const navigationMode = (
      <div className="modeMenu">
        <button id="btnAllEventsMode" onClick={() => this.handleClickMode('btnAllEventsMode')} type="button" className="btn"> Tous les événements</button>
        <button id="btnEventsForMeMode" onClick={() => this.handleClickMode('btnEventsForMeMode')} type="button" className="btn"> Pour moi </button>
      </div>
    );
    return (
      <div className="AllEvents">
        { navigationMode }
        <AllEventsComponent events={events} />
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
