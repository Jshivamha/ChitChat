import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // This ensures cookies are sent with all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 