import React from 'react';
import './index.scss';
import pictureBox from '../../../src/assets/images/party.jpg';

const EventContentDetails = () => (
  <div className="event_details">
    <div className="pic">
      <img src={pictureBox} alt="imageEvenement" />
    </div>
    <div>
      <h2>Description</h2>
      <p>The hottest US girl of the moment just for you folks</p>
    </div>
  </div>
);

export default EventContentDetails;
