import React from 'react';
import socketIOClient from 'socket.io-client';
import Wrapper from '../src/helpers/Wrapper';
import { BASE_URL } from '../src/helpers/common';

class Socket extends React.Component {
  socket = socketIOClient(BASE_URL);

  connect = () => {
    this.socket.emit('chatConnection', { idUser: '6a835041-6389-4189-9302-59b77d0f8f3b' });
    this.socket.emit('connection');
    this.socket.on('chatConnection', result => console.log(result));
    this.socket.emit('sendMessage', {
      message: 'TEST-MESSAGE',
      exp: '6a835041-6389-4189-9302-59b77d0f8f3b',
      idDest: 'ad431291-7020-4375-bc5f-632c31536032',
    });
    this.socket.on('sendMessage', res => console.log(res));
  }

  componentDidMount() {
    window.onbeforeunload = () => this.socket.emit('disconnect');
  }

  render() {
    this.connect();
    return (
      <div className="socket">Socket</div>
    );
  }
}

export default Wrapper(Socket);
