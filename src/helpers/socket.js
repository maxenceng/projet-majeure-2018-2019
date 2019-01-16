import socketIOClient from 'socket.io-client';
import { BASE_URL } from './common';

const socket = socketIOClient(BASE_URL);

export default socket;
