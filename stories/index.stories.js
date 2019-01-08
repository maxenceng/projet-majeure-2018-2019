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
import SubscribePage from './components/SubscribePage';
import ConnexionPage from './components/ConnexionPage';

storiesOf('Basic Components', module)
  .add('Generic Button', () => <Button content="Inscription" onclicktype={action('clicked Inscription')} />)
  .add('Generic Button inverse', () => <Button className="inverse" content="Connexion" onclicktype={action('clicked Connexion')} />)
  .add('searchBar', () => <SearchBar onClicktype={action('clicked')} />)
  .add('ImgHome', () => <ImgHome />)
  .add('Parallax', () => <Parallax />)
  .add('datebox', () => <DateBox />);

storiesOf('Groups', module)
  .add('topFrame', () => <TopFrame />)
  .add('Top Frame Connexion', () => <TopFrameCo onclickEvent={action('Event')} onclickDeco={action('Deconnexion')} onclickAgenda={action('Agenda')} onclickMessage={action('Message')} onclickProfile={action('Profile')} />)
  .add('Event Component', () => <EventComponent onclicktype={action('clicked')} />);

storiesOf('Pages', module)
  .add('HomePage', () => <HomePage />)
  .add('Standard Page', () => <StandardPage />)
  .add('Subscribe Page', () => <SubscribePage />)
  .add('Connexion Page', () => <ConnexionPage />);
