import axios from 'axios';

export const instance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
