import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/' , 
});

api.defaults.headers.common['Content-Type'] = 'application/vnd.api+json'
api.defaults.headers.common['Accept'] = 'application/vnd.api+json'


export default api;