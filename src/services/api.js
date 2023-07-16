// utilizando a biblioteca axios pra consumir o back-end
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketmovies-api-5fnl.onrender.com',
});
