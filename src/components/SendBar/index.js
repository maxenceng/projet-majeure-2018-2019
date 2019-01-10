import React from 'react';
import ArrowImage from '../../assets/images/arrow-circle-up-solid.svg';
import './index.scss';

export default class SendBar extends React.Component {
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

  sendMessage = () => console.log('Message sent!')

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
