import axios from "./axios";

export const orderMongo = (formData) => axios.post('/saveOrder', formData)

