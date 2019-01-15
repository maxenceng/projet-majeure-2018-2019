import React from 'react';
import PropTypes from 'prop-types';
import DiscussionList from '../DiscussionList';
import DiscussionMessages from '../DiscussionMessages';
import SendBar from '../SendBar';
import './index.scss';

const ChatPage = ({
  currentConv,
  list,
  messages,
  onClick,
}) => (
  <div className="DiscussionPage">
    <DiscussionList
      className="first"
      currentConv={currentConv}
      list={list}
      onClick={onClick}
    />
    <div className="second">
      <DiscussionMessages
        person={currentConv}
        messages={messages}
      />
      <SendBar />
    </div>
  </div>
);

ChatPage.propTypes = {
  currentConv: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    person: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    lastMessage: PropTypes.string,
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
