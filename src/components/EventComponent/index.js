import React from 'react';
import './index.scss';
import PictureEvent from '../PictureEvent';
import DateBox from '../DateBox';
import pictureBox from '../../assets/images/party.jpg';

const EventComponent = () => (
  <div className="boxEvent">
    <button type="button" className="clickedEvent" onClick={null}>
      <PictureEvent pictureEvent={pictureBox} />
      <DateBox />
    </button>
  </div>
);


export default EventComponent;
