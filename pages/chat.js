import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wrapper from '../src/helpers/Wrapper';
import ChatPage from '../src/components/ChatPage';
import actions, { actionPropTypes } from '../src/actions';

class Chat extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    // We don't know what chat contains yet
    // eslint-disable-next-line react/forbid-prop-types
    chat: PropTypes.any,
  };

  static defaultProps = {
    chat: null,
  }

  onClick = () => console.log('clicked chat');

  render() {
    const { chat, actions: { getMessagesAction } } = this.props;
    console.log(chat, getMessagesAction);
    return (
      <ChatPage
        onClick={this.onClick}
      />
    );
  }
}

const mapStateToProps = ({ chat: { data: chat } }) => ({ chat });

export default Wrapper(connect(mapStateToProps, actions)(Chat));
