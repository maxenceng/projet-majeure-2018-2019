import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import EventContent from '../../components/EventContentParticipant';
import actions, { actionPropTypes } from '../../actions';

class EventContentParticipant extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    participant: PropTypes.arrayOf(PropTypes.shape({
      ID_USER: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
      PROFILE_AVATAR: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    participant: [],
  }

  handleOnEventContentParticipantSelected = () => {
    const { participant, actions: { currentConvAction } } = this.props;
    currentConvAction({ idUser: participant.ID_USER, person: `${participant.USER_NAME} ${participant.USER_FIRSTNAME}` });
    Router.push('/chat');
  }

  render() {
    const { participant } = this.props;
    return (
      <div>
        <EventContent
          firstname={participant.USER_FIRSTNAME}
          username={participant.USER_NAME}
          picture={participant.PROFILE_AVATAR}
          id={participant.ID_USER}
          onClick={this.handleOnEventContentParticipantSelected}
        />
      </div>
    );
  }
}

export default connect(null, actions)(EventContentParticipant);
