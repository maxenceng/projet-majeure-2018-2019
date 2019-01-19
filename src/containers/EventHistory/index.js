import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import PropTypes from 'prop-types';
import EventHistoryListing from '../../components/EventHistoryListing';
import actions, { actionPropTypes } from '../../actions';

class EventHistory extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    ID_EVENT: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
    DATE: PropTypes.string.isRequired,
    MEDIA_CONTENT: PropTypes.string.isRequired,
  };

  handleOnEventSelected = () => {
    const { ID_EVENT } = this.props;
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
        getInterestedEventAction,
      },
    } = this.props;
    currentEventAction(ID_EVENT);
    getParticipantEventAction({
      idEvent: ID_EVENT,
    });
    getInterestedEventAction({
      idEvent: ID_EVENT,
    });
    Router.push('/eventPage');
  }

  render() {
    const { DATE, EVENT_NAME, MEDIA_CONTENT } = this.props;
    return (
      <div>
        <EventHistoryListing
          eventDate={DATE}
          eventName={EVENT_NAME}
          eventPicture={MEDIA_CONTENT}
          onClickbutton={this.handleOnEventSelected}
        />
      </div>
    );
  }
}

export default connect(null, actions)(EventHistory);
