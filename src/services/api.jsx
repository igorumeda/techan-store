import axios from "axios";

const api =  axios.create({
    // baseURL: 'http://192.168.0.106:8081'
    baseURL: 'https://techan-store-api.herokuapp.com'

});

export default api;