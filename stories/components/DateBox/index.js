import React from 'react';
import './index.scss';

const DateBox = () => (
  <div className="boxDate">
    <div className="dateEvent">
      <div id="dayEvent">27</div>
      <div id="monthEvent">mai</div>
    </div>
    <div className="descriptionEvent">
      Concert Ariana Grande
      <br />
      <font size="2">
        Halle Tony Garnier
      </font>
    </div>
  </div>
);

export default DateBox;
