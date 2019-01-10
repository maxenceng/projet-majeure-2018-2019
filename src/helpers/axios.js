import axios from 'axios';

const token = localStorage.getItem('userToken');
const Authorization = token ? `Bearer ${token}` : null;

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: { Authorization },
});
