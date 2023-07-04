import axios from './axios' // Permite conectarme con el backend

//Envio user al back
export const registerRequest = user => axios.post(`/register`,user) 

export const loginRequest = user => axios.post(`/login`,user) 

export const verifyTokenRequest = () => axios.get('/verify')

export const logoutRequest =  () => axios.post('/logout')