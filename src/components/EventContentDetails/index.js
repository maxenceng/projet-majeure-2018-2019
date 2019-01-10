import React from 'react';
import './index.scss';
import pictureBox from '../../assets/images/party.jpg';

const EventContentDetails = () => (
  <div className="event_details">
    <div className="event_details_item">
      <img className="event_details_picture" src={pictureBox} alt="imageEvenement" />
    </div>
    <div className="event_details_item">
      <h2>Description</h2>
      <p>The hottest US girl of the moment just for you folks</p>
    </div>
  </div>
);

export default EventContentDetails;
