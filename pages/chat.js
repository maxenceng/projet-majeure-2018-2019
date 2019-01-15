import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wrapper from '../src/helpers/Wrapper';
import ChatPage from '../src/components/ChatPage';
import actions, { actionPropTypes } from '../src/actions';

class Chat extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      MES_CONTENT: PropTypes.string.isRequired,
      MES_AUTHOR: PropTypes.string.isRequired,
      MES_DATE: PropTypes.string.isRequired,
    })),
    // eslint-disable-next-line react/no-unused-prop-types
    conversations: PropTypes.arrayOf(PropTypes.shape({
      idUser: PropTypes.string.isRequired,
      person: PropTypes.string.isRequired,
    })),
    currentConv: PropTypes.string.isRequired,
  };

  static defaultProps = {
    messages: null,
    conversations: null,
  }

  componentWillMount() {
    const { actions: { getConversationsAction, getMessagesAction } } = this.props;
    getConversationsAction();
    getMessagesAction();
  }

  componentWillReceiveProps(newProps) {
    const conversations = this.getConversations(this.props);
    const newConversations = this.getConversations(newProps);
    if (newConversations.length !== 0 && conversations.length === 0) {
      this.setActive(newConversations[0].idUser)();
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
    return this.getConversations(this.props);
  }

  get contactName() {
    const { conversations } = this;
    const { currentConv } = this.props;
    const current = conversations.find(conv => conv.idUser === currentConv);
    return current ? current.person : '';
  }


  setActive = idUser => () => {
    const { actions: { currentConvAction } } = this.props;
    currentConvAction(idUser);
  }

  onClick = () => console.log('clicked chat');

  get messages() {
    const { messages } = this.props;
    if (!messages) return [];
    return messages;
  }

  render() {
    const { currentConv } = this.props;
    return (
      <ChatPage
        onClick={this.setActive}
        list={this.conversations}
        messages={this.messages}
        currentConv={currentConv}
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

export default Wrapper(connect(mapStateToProps, actions)(Chat));
