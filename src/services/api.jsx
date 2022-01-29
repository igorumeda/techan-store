import axios from "axios";

const api =  axios.create({
    baseURL: 'http://192.168.1.23:8081/techanstore'
    // baseURL: 'http://192.168.0.106:8081/techanstore'
});

export default api;