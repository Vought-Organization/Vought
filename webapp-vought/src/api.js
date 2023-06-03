import axios from 'axios'; // importando a biblioteca "axios"

// criando constante que possui uma instância do Axios, com uma configuração de URL base
const api = axios.create({
  baseURL: 'https://voughtback.duckdns.org/v1/events', // URL base para realizar as requisições
});

export default api;
// comentário de teste do pipeline do jenkins