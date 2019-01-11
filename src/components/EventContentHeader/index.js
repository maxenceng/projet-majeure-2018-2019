import React from 'react';
import './index.scss';
import Link from 'next/link';
import Button from '../Button';
import ChevronLeft from '../../assets/images/chevron-left-solid.svg';
import SvgButton from '../SvgButton';

const EventContentHeader = () => (
  <div className="event_header">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
    <div className="buttonbox">
      <Link href="/allEventPage">
        <SvgButton Svg={ChevronLeft} />
      </Link>
    </div>
    <div id="event_header_left" className="event_header_item">
      <h1 className="event_title">18 Dec : Concert Ariana Grande</h1>
      <h2 className="event_location">Hall Tony Garnier</h2>
      <h2 className="event_time">8pm : Doors Open</h2>
    </div>
    <div id="event_header_right" className="event_header_item">
      <Button className="inverse event_participate" content="Participate" route="/about" />
      <Button className="inverse event_addtofavorite" content="Add To Favorite" />
    </div>
  </div>
);

export default EventContentHeader;
