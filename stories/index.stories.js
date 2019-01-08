/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ButtonHaut2 from './components/ButtonHaut2';
import ButtonHaut from './components/ButtonHaut';
import TopFrame from './components/TopFrame';
import SearchBar from './components/SearchBar';
import ImgHome from './components/ImgHome';
import Parallax from './components/Parallax';
import HomePage from './components/HomePage';
import StandardPage from './components/StandardPage';
import PictureEvent from './components/PictureEvent';
import DateBox from './components/DateBox';
import EventComponent from './components/EventComponent';
import pictureBox from '../src/party.jpg';
import TopFrameCo from './components/TopFrameCo';

const connexion = 'Connexion';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Inscription', () => <ButtonHaut2 content="Inscription" onclicktype={action('clicked')} />)
  .add('connexion', () => <ButtonHaut content={connexion} onclicktype={action('clicked')} />)
  .add('topFrame', () => <TopFrame />)
  .add('searchBar', () => <SearchBar onClicktype={action('clicked')} />)
  .add('ImgHome', () => <ImgHome />)
  .add('Parallax', () => <Parallax />)
  .add('HomePage', () => <HomePage />)
  .add('Standard Page', () => <StandardPage />)
  .add('picture event', () => <PictureEvent pictureEvent={pictureBox} />)
  .add('datebox', () => <DateBox />)
  .add('Event Component', () => <EventComponent onclicktype={action('clicked')} />)
  .add('Top Frame Connexion', () => <TopFrameCo onclickEvent={action('button evenement')} onclickDeco={action('button Deco')} onclickAgenda={action('button Agenda')} onclickMessage={action('button Message')} onclickProfile={action('button Profile')} />);
