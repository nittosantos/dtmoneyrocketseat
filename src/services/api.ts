import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoneyteste.netlify.app/api',
});
