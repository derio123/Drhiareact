import axios from "axios";
//utilizado para banco de dados

const api = axios.create({
    baseURL: '',
});

export default api;