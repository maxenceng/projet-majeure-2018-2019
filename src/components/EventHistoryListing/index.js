import React from 'react';
import './index.scss';
import pictureBox from '../../../src/assets/images/party.jpg';

const EventHistoryListing = () => (
  <div className="event_history_listing">
    <div className="event_history_listing_item">
      <img className="event_history_listting_picture" src={pictureBox} alt="imageEvenement" />
    </div>
    <div className="event_history_listing_item">
      <h3>18 Dec : Concert Ariana Grande</h3>
    </div>
  </div>
);

export default EventHistoryListing;
