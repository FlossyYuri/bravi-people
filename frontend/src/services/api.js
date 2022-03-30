import axios from 'axios';

export const REQUEST_TIMEOUT = 90 * 1000;
export const APIKit = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: REQUEST_TIMEOUT,
});
