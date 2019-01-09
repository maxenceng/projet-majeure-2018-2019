import React from 'react';
import './index.scss';
import DiscussionList from '../DiscussionList';
import DiscussionMessages from '../DiscussionMessages';
import SendBar from '../SendBar';

const discussionList = [
  {
    active: true,
    person: 'Skydread1',
    time: '11:23am',
    lastMessage: 'Salut, j\'ai vu que tu participais...',
    onClick: null,
  },
  {
    active: false,
    person: 'Cissoudu69',
    time: '10:09am',
    lastMessage: 'Oui c\'est une bonne idée ! On...',
    onClick: null,
  },
  {
    active: false,
    person: 'Grillzoo',
    time: '08:10am',
    lastMessage: 'Je pense que ça va être compli...',
    onClick: null,
  },
];

const discussionMessages = [
  {
    timestamp: 12,
    person: 'User',
    text: 'Oui, j\'adore Ariana Grande!!',
  },
  {
    timestamp: 0,
    person: 'Skydread1',
    text: 'Salut, j\'ai vu que tu participais au concert d\'Ariana Grande.',
  },
  {
    timestamp: 24,
    person: 'Skydread1',
    text: 'Ok super',
  },
  {
    timestamp: 36,
    person: 'Skydread1',
    text: 'dac dac',
  },
];

const DiscussionPage = () => (
  <div className="DiscussionPage">
    <DiscussionList
      className="first"
      list={discussionList}
    />
    <div className="second">
      <DiscussionMessages
        contact="Skydread1"
        event="Concert Ariana Grande"
        messages={discussionMessages}
      />
      <SendBar />
    </div>
  </div>
);

export default DiscussionPage;
