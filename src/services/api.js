import axios from 'axios';

// URL da API 
const api = axios.create({ baseURL: 'https://api.jikan.moe/v3' });

export default api;