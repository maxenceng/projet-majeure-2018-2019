import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageComponent from '../../components/Message';

const Index = ({ message }) => <MessageComponent text={message} />;

Index.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = ({ message }) => ({ message });

export default connect(mapStateToProps, {})(Index);
