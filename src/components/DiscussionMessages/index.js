import React from 'react';
import PropTypes from 'prop-types';
import DiscussionMessage from '../DiscussionMessage';
import './index.scss';

const DiscussionMessages = ({
  className,
  person,
  messages,
}) => (
  <div className={`DiscussionMessages ${className}`}>
    <div className="message-list">
      {messages.sort((a, b) => a.timestamp - b.timestamp)
        .map(({ MES_AUTHOR, MES_CONTENT }) => (
          <DiscussionMessage
            className={MES_AUTHOR === person ? 'other' : 'own'}
            text={MES_CONTENT}
          />
        ))
      }
    </div>
  </div>
);

DiscussionMessages.propTypes = {
  className: PropTypes.string,
  person: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

DiscussionMessages.defaultProps = {
  className: '',
  messages: [],
};

export default DiscussionMessages;
