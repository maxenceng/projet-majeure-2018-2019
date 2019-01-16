import React from 'react';
import PropTypes from 'prop-types';
import ArrowImage from '../../assets/images/arrow-circle-up-solid.svg';
import './index.scss';

export default class SendBar extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
  }

  state = {
    value: '',
    size: 'x1',
  }

  onChange = ({ target: { value } }) => {
    const nbLineFeed = value.split('\n').length;
    if (nbLineFeed > 0 && nbLineFeed < 4) {
      this.setState({ size: `x${nbLineFeed}` });
    }
    this.setState({ value });
  }

  sendMessage = (event) => {
    event.preventDefault();
    const { sendMessage } = this.props;
    const { value } = this.state;
    sendMessage(value);
  }

  render() {
    const { value, size } = this.state;
    return (
      <div className={`SendBar ${size}`}>
        <textarea
          value={value}
          onChange={this.onChange}
          placeholder="Ecrivez votre message ici"
        />
        <button type="button" onClick={this.sendMessage}>
          <ArrowImage />
        </button>
      </div>
    );
  }
}
