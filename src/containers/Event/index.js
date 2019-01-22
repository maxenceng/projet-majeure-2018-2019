import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import PropTypes from 'prop-types';
import EventComponent from '../../components/EventComponent';
import actions, { actionPropTypes } from '../../actions';

/**
 * Ce composant React permet de gérer un événement de la page 'index'.
 */
class Event extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    event: PropTypes.instanceOf(Object).isRequired,
  };

  /**
   * Cette méthode est déclenchée lors du clic sur un événement.
   * Elle permet de mettre à jour:
   *  -l'événement courant
   *  -les participants de l'événement courant
   *  -les intéressés de l'événement courant
   */
  handleOnEventSelected = () => {
    const { event } = this.props;
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
        getInterestedEventAction,
      },
    } = this.props;
    currentEventAction(event);
    getParticipantEventAction({
      idEvent: event.ID_EVENT,
    });
    getInterestedEventAction({
      idEvent: event.ID_EVENT,
    });
    Router.push('/eventPage');
  }

  render() {
    const { event } = this.props;
    return (
      <div>
        <EventComponent event={event} onClick={this.handleOnEventSelected} />
      </div>
    );
  }
}

export default connect(null, actions)(Event);
