import axios from "axios"; // importando a biblioteca "axios"

// criando constante que possui uma instância do Axios, com uma configuração de URL base
const api = axios.create({
    baseURL: "http://44.214.102.135:8080/v1/events" // URL base para realizar as requisições
})


export default api;
