import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import PropTypes from 'prop-types';
import EventHistoryListing from '../../components/EventHistoryListing';
import actions, { actionPropTypes } from '../../actions';

class EventHistory extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    event: PropTypes.arrayOf(PropTypes.shape({
      EVENT_NAME: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_DATE: PropTypes.string.isRequired,
      MEDIA_CONTENT: PropTypes.string.isRequired,
      PARTCIPATE: PropTypes.bool.isRequired,
    })).isRequired,
  };

  getDate = (EVENT_DATE) => {
    const date = new Date(EVENT_DATE * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  };

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
        <EventHistoryListing
          eventDate={this.getDate(event.EVENT_DATE)}
          eventName={event.EVENT_NAME}
          eventPicture={event.MEDIA_CONTENT}
          onClickbutton={this.handleOnEventSelected}
        />
      </div>
    );
  }
}

export default connect(null, actions)(EventHistory);
