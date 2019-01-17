import React from 'react';
import PropTypes from 'prop-types';
import DiscussionMessage from '../DiscussionMessage';
import './index.scss';

const DiscussionMessages = ({
  className,
  currentIdUser,
  messages,
}) => (
  <div className={`DiscussionMessages ${className}`}>
    <div className="message-list">
      {messages.sort((a, b) => a.MES_DATE - b.MES_DATE)
        .map(({ MES_AUTHOR, MES_CONTENT, MES_DATE }) => (
          <DiscussionMessage
            key={MES_DATE}
            className={MES_AUTHOR === currentIdUser ? 'other' : 'own'}
            text={MES_CONTENT}
          />
        ))
      }
    </div>
  </div>
);

DiscussionMessages.propTypes = {
  className: PropTypes.string,
  currentIdUser: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    MES_DATE: PropTypes.string.isRequired,
    MES_AUTHOR: PropTypes.string.isRequired,
    MES_CONTENT: PropTypes.string.isRequired,
  })),
};

DiscussionMessages.defaultProps = {
  className: '',
  messages: [],
};

export default DiscussionMessages;
