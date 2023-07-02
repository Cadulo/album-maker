import axios from 'axios' // Permite conectarme con el backend

const API = 'http://localhost:5000/api'

const instancia = axios.create({
    baseURL: API,
    withCredentials : true
})

export default instancia