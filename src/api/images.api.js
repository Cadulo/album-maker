import axios from "./axios";

export const imageMongo = (image, order) => {
    axios.post('/saveImage', { imageDataURL: image, order: order })
}
export const getImagesMongo = (orderId) => axios.get(`/getImages/?orderId=${orderId}`)

export const deleteImageMongo = (id) => axios.delete(`/deleteImage/${id}`)