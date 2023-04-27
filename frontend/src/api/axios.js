import axios from 'axios';

const baseURL = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true // enable cookies
});

export default axiosInstance;
