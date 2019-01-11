import React from 'react';
import PropTypes from 'prop-types';
import DiscussionList from '../DiscussionList';
import DiscussionMessages from '../DiscussionMessages';
import SendBar from '../SendBar';
import './index.scss';

const ChatPage = ({ list, messages, onClick }) => (
  <div className="DiscussionPage">
    <DiscussionList
      className="first"
      list={list}
      onClick={onClick}
    />
    <div className="second">
      <DiscussionMessages
        contact="Skydread1"
        event="Concert Ariana Grande"
        messages={messages}
      />
      <SendBar />
    </div>
  </div>
);

ChatPage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool.isRequired,
    person: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
  })),
  messages: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};

ChatPage.defaultProps = {
  list: [],
  messages: [],
};

export default ChatPage;
