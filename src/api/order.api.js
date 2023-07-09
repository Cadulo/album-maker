import axios from "./axios";

export const orderMongo = (formData) => axios.post('/saveOrder', formData)

export const getOrderMongo = () => axios.get('/getOrder')

export const getBillMongo = (id) => axios.get( `/getBill/${id}`)

export const getShippingMongo = (id) => axios.get( `/getShipping/${id}`)
