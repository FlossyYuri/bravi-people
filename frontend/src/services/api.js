import axios from 'axios';
import { API_URL } from '../constants';

export const REQUEST_TIMEOUT = 90 * 1000;
export const APIKit = axios.create({
  baseURL: process.env.REACT_APP_API_URL || API_URL,
  timeout: REQUEST_TIMEOUT,
});
