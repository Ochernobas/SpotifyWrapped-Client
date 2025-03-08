const baseURL = "http://127.0.0.1:8000/"

import axios from 'axios';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

// Export the Axios instance
export default api;


