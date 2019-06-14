import axios from 'axios';

const api = axios.create({baseURL: 'https://viacep.com.br/ws/09656000'});

export default api;