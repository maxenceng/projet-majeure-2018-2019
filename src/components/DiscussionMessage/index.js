import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const DiscussionMessage = ({ className, text }) => (
  <div className="DiscussionMessage">
    <span className={className}>{text}</span>
    <div className="clear" />
  </div>
);

DiscussionMessage.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

DiscussionMessage.defaultProps = {
  className: '',
};

export default DiscussionMessage;
