import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import ImgHome from '../ImgHome';
import AllEventPage from '../AllEventPage';

const HomePage = ({ route }) => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <AllEventPage route={route} />
      </div>
    </div>
  </div>
);

HomePage.propTypes = {
  route: PropTypes.string.isRequired,
};

export default HomePage;
