import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.0.102:3333",
    // baseURL: "http://192.168.106.103:3333",
});