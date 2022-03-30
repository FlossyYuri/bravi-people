import axios from 'axios';

export const REQUEST_TIMEOUT = 90 * 1000;
export const APIKit = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: REQUEST_TIMEOUT,
});
