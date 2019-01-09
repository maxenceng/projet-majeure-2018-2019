/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './components/Button';
import TopFrame from './components/TopFrame';
import SearchBar from './components/SearchBar';
import ImgHome from './components/ImgHome';
import Parallax from './components/Parallax';
import HomePage from './components/HomePage';
import StandardPage from './components/StandardPage';
import DateBox from './components/DateBox';
import EventComponent from './components/EventComponent';
import TopFrameCo from './components/TopFrameCo';
import DiscussionList from './components/DiscussionList';
import DiscussionMessage from './components/DiscussionMessage';
import DiscussionMessages from './components/DiscussionMessages';
import DiscussionPage from './components/DiscussionPage';
import SendBar from './components/SendBar';
import EventPage from './components/EventPage';
import SubscribePage from './components/SubscribePage';
import ConnectionPage from './components/ConnectionPage';
import ProfilePage from './components/ProfilePage';
import AllEventPage from './components/AllEventPage';
import EventHistory from './components/EventHistory';

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

storiesOf('Basic Components', module)
  .add('Generic Button', () => <Button content="Inscription" onclicktype={action('clicked Inscription')} />)
  .add('Generic Button inverse', () => <Button className="inverse" content="Connexion" onclicktype={action('clicked Connexion')} />)
  .add('searchBar', () => <SearchBar onclicktype={action('clicked')} />)
  .add('ImgHome', () => <ImgHome />)
  .add('Parallax', () => <Parallax />)
  .add('datebox', () => <DateBox />)
  .add('Discussion Box', () => (
    <DiscussionMessages
      active={false}
      person="Skydread1"
      time="11:23am"
      lastMessage="Salut, j'ai vu que tu participais..."
      onClick={null}
    />))
  .add('Discussion Message', () => <DiscussionMessage className="other" text="Salut, j'ai vu que tu participais..." />)
  .add('Send Bar', () => <SendBar />);

storiesOf('Groups', module)
  .add('topFrame', () => <TopFrame />)
  .add('Top Frame Connexion', () => <TopFrameCo />)
  .add('Event Component', () => <EventComponent onclicktype={action('clicked')} />)
  .add('Discussion List', () => <DiscussionList list={discussionList} />)
  .add('Discussion Details', () => (
    <DiscussionMessages
      messages={discussionMessages}
      contact="Skydread1"
      event="Concert Ariana Grande"
    />
  ))
  .add('topFrame', () => <TopFrame onclicktypeConnexion={action('clicked Connexion')} onclicktypeInscription={action('clicked Inscription')} />)
  .add('Top Frame Connexion', () => <TopFrameCo onclickEvent={action('Event')} onclickDeco={action('Deconnexion')} onclickAgenda={action('Agenda')} onclickMessage={action('Message')} onclickProfile={action('Profile')} />)
  .add('Event Component', () => <EventComponent onclicktype={action('clicked')} />);

storiesOf('Pages', module)
  .add('HomePage', () => <HomePage />)
  .add('Standard Page', () => <StandardPage />)
  .add('Discussion Page', () => <DiscussionPage />)
  .add('datebox', () => <DateBox />)
  .add('Event Component', () => <EventComponent onclicktype={action('clicked')} />)
  .add('Top Frame Connexion', () => <TopFrameCo />)
  .add('EventPage', () => <EventPage />)
  .add('Subscribe Page', () => <SubscribePage />)
  .add('Connexion Page', () => <ConnectionPage onclicktype={action('clicked')} />)
  .add('Profile Page', () => <ProfilePage />)
  .add('events Page', () => <EventPage />)
  .add('History Event Feature', () => <EventHistory />)
  .add('All events Page', () => <AllEventPage />);
