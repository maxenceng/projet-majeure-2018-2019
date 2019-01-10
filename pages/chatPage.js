import React from 'react';
import Wrapper from '../src/helpers/Wrapper';
import DiscussionPage from '../src/components/DiscussionPage';

const ChatPage = () => (
  <div id="chatPage">
    <DiscussionPage />
  </div>
);

export default Wrapper(ChatPage);
