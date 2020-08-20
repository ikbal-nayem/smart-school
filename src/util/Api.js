import axios from 'axios';

export default axios.create({
  // baseURL: `http://g-axon.work/jwtauth/api/`,//YOUR_API_URL HERE
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  }
});
