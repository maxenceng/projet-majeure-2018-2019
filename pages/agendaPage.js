import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../src/actions';
import EventHistory from '../src/components/EventHistory';
import '../styles/allEventPage.scss';

/*
  La page Agenda permet de répertorier tous les événements auxquels l'utilisateur
  participe et ceux ajouter aux favoris.
  PropsType:
    userEvents: les événements auxquels l'utilisateur participe.
    actions: userEvensAction
*/
class AgendaPage extends React.Component {
  static propTypes = {
    userEvents: PropTypes.instanceOf(Object).isRequired,
    actions: actionPropTypes.isRequired,
  }

  // Déclenche l'action: userEventsAction()
  componentWillMount() {
    const { actions: { userEventsAction } } = this.props;
    userEventsAction();
  }

  // Récupère les événéments de l'utilisateur
  get userEvents() {
    const { userEvents: { events } } = this.props;
    if (!events) {
      return [];
    }
    return events;
  }

  render() {
    const { userEvents } = this.props;
    return (
      <div className="agenda_page">
        <EventHistory userEvents={userEvents.events} />
      </div>
    );
  }
}

const mapStateToProps = ({ userEvents }) => ({ userEvents: userEvents.data });

export default (connect(mapStateToProps, actions)(AgendaPage));
