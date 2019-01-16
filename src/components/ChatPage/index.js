import React from 'react';
import PropTypes from 'prop-types';
import DiscussionList from '../DiscussionList';
import DiscussionMessages from '../DiscussionMessages';
import SendBar from '../SendBar';
import './index.scss';

const ChatPage = ({
  currentIdUser,
  list,
  messages,
  setActive,
  sendMessage,
}) => (
  <div className="DiscussionPage">
    <DiscussionList
      className="first"
      currentIdUser={currentIdUser}
      list={list}
      onClick={setActive}
    />
    <div className="second">
      <DiscussionMessages
        currentIdUser={currentIdUser}
        messages={messages}
      />
      <SendBar
        sendMessage={sendMessage}
      />
    </div>
  </div>
);

ChatPage.propTypes = {
  currentIdUser: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    person: PropTypes.string.isRequired,
    time: PropTypes.string,
    lastMessage: PropTypes.string,
  })),
  messages: PropTypes.arrayOf(PropTypes.shape({
    MES_DATE: PropTypes.string.isRequired,
    MES_AUTHOR: PropTypes.string.isRequired,
    MES_CONTENT: PropTypes.string.isRequired,
  })),
  setActive: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

ChatPage.defaultProps = {
  list: [],
  messages: [],
};

export default ChatPage;
