import axios from 'axios';


const streams = axios.create({
    baseURL: 'http://localhost:3005'
});

export default streams;