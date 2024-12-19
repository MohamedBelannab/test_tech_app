import axios from "axios";
const API_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8888/.netlify/functions/api'
  : '/.netlify/functions/api';

const api = axios.create({
    baseURL: API_URL , 
});

api.defaults.headers.common['Content-Type'] = 'application/vnd.api+json'
api.defaults.headers.common['Accept'] = 'application/vnd.api+json'


export default api;