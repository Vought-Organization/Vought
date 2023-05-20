import axios from 'axios'; // importando a biblioteca "axios"

// criando constante que possui uma instância do Axios, com uma configuração de URL base
export const useServices = () => {
  const users = axios.create({
    baseURL: 'https://voughtback.duckdns.org/v1/users',
    headers: { 'Content-Type': 'application/json' },
  });

  const tickets = axios.create({
    baseURL: 'https://voughtback.duckdns.org/v1/tickets',
  });

  const events = axios.create({
    baseURL: 'https://voughtback.duckdns.org/v1/events',
    headers: { 'Content-Type': 'application/json' },
  });

  return {
    events,
    tickets,
    users,
  };
};
