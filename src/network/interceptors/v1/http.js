import axios from "axios";
import {API} from "../../../constants/app";

let token = localStorage.getItem('token');

const http = axios.create({
    baseURL: `${API}`,
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    }
});

export default http;