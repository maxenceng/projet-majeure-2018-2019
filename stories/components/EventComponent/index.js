import React from 'react';
import './index.scss';
import PictureEvent from '../PictureEvent';
import DateBox from '../DateBox';
import pictureBox from '../../../src/party.jpg';

const EventComponent = () => (
  <div className="boxEvent">
    <PictureEvent pictureEvent={pictureBox} />
    <DateBox />
  </div>
);

export default EventComponent;
