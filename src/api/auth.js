import axios from 'axios' // Permite conectarme con el backend

const API = 'http://localhost:5000/api'

//Envio user al back
export const registerRequest = user => axios.post(`${API}/register`,user) 