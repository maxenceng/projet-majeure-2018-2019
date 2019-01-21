import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../src/actions';
import EventHistory from '../src/components/EventHistory';
import '../styles/allEventPage.scss';

class AgendaPage extends React.Component {
  static propTypes = {
    userEvents: PropTypes.instanceOf(Object).isRequired,
    actions: actionPropTypes.isRequired,
  }

  fetchUserEvents() {
    const { actions: { userEventsAction } } = this.props;
    userEventsAction();
  }

  componentWillMount() {
    this.fetchUserEvents();
  }

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
