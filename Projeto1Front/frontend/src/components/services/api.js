import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL base do backend
});

// Adiciona o token de autenticação a cada requisição, se disponível
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
