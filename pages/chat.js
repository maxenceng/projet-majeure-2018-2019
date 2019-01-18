import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatPage from '../src/components/ChatPage';
import actions, { actionPropTypes } from '../src/actions';
import socket from '../src/helpers/socket';
import { getLocalStorageItem } from '../src/helpers/common';

class Chat extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      MES_CONTENT: PropTypes.string.isRequired,
      MES_AUTHOR: PropTypes.string.isRequired,
      MES_DATE: PropTypes.string.isRequired,
    })),
    currentConv: PropTypes.shape({
      idUser: PropTypes.string.isRequired,
      person: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    messages: null,
  }

  componentWillMount() {
    const { actions: { getConversationsAction } } = this.props;
    getConversationsAction();
    if (process.browser) {
      socket.on('sendMessage', (result) => {
        const { actions: { addMessageAction } } = this.props;
        if (!result.err) {
          addMessageAction({
            MES_AUTHOR: getLocalStorageItem('idUser'),
            MES_CONTENT: result.data.message,
            MES_DATE: Date.now(),
          });
        }
      });
      socket.on('message', (result) => {
        const { actions: { addMessageAction }, currentConv } = this.props;
        if (!result.err) {
          addMessageAction({
            MES_AUTHOR: currentConv.idUser,
            MES_CONTENT: result.message,
            MES_DATE: Date.now(),
          });
        }
      });
    }
  }

  componentWillReceiveProps(newProps) {
    const conversations = this.getConversations(this.props);
    const newConversations = this.getConversations(newProps);
    const { currentConv: { idUser }, actions: { getMessagesAction } } = this.props;
    if (
      newConversations.length !== 0
      && conversations.length === 0
      && idUser === ''
    ) {
      this.setActive(newConversations[0])();
    }
    const { currentConv: { idUser: newIdUser } } = newProps;
    if (idUser !== newIdUser) {
      getMessagesAction(newIdUser);
    }
  }

  componentDidMount() {
    window.onbeforeunload = () => socket.emit('disconnect');
  }

  connect = () => process.browser && socket.emit('chatConnection', { idUser: getLocalStorageItem('idUser') });

  sendMessage = (message) => {
    const { currentConv: { idUser: idDest } } = this.props;
    if (process.browser) {
      socket.emit('sendMessage', {
        message,
        exp: getLocalStorageItem('idUser'),
        idDest,
      });
    }
  }

  getConversations = (props) => {
    const { conversations } = props;
    if (!conversations) return [];
    return Object.entries(conversations).map(([idUser, v]) => ({
      idUser,
      person: `${v.USER_FIRSTNAME} ${v.USER_NAME}`,
    }));
  }

  get conversations() {
    const conversations = this.getConversations(this.props);
    const { currentConv } = this.props;
    const convInArray = conversations.find(conv => conv.idUser === currentConv.idUser);
    if (!convInArray && currentConv.idUser !== '') {
      return [
        ...conversations,
        {
          idUser: currentConv.idUser,
          person: currentConv.person,
        },
      ];
    }
    return conversations;
  }


  setActive = currentConv => () => {
    const { actions: { currentConvAction } } = this.props;
    currentConvAction(currentConv);
  }

  get messages() {
    const { messages } = this.props;
    if (!messages) return [];
    return messages;
  }

  render() {
    const { currentConv: { idUser } } = this.props;
    this.connect();
    return (
      <ChatPage
        setActive={this.setActive}
        sendMessage={this.sendMessage}
        list={this.conversations}
        messages={this.messages}
        currentIdUser={idUser}
      />
    );
  }
}

const mapStateToProps = ({
  message: { data: { messages } },
  conversation: { data: { conversations } },
  currentConv,
}) => ({
  messages,
  conversations,
  currentConv,
});

export default connect(mapStateToProps, actions)(Chat);
