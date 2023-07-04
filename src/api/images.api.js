import axios from "./axios";

export const imageMongo = image => axios.post('/saveImage', { imageDataURL: image })

export const getImagesMongo = () => axios.get('/getImages')

export const deleteImageMongo = (id) => axios.delete(`/deleteImage/${id}`)