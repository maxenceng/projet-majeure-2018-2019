import React from 'react';
import './index.scss';
import Button from '../Button';

const EventContentHeader = () => (
  <div className="event_header">
    <div id="event_header_left" className="event_header_item">
      <h1 className="event_title">18 Dec : Concert Ariana Grande</h1>
      <h2 className="event_location">Hall Tony Garnier</h2>
      <h2 className="event_time">8pm : Doors Open</h2>
    </div>
    <div id="event_header_right" className="event_header_item">
      <Button className="inverse event_participate" content="Participate" onclicktype={null} />
      <Button className="inverse event_addtofavorite" content="Add To Favorite" onclicktype={null} />
    </div>
  </div>
);

export default EventContentHeader;
