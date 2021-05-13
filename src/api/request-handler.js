import axios from 'axios';

const RequestHandler = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default RequestHandler;
