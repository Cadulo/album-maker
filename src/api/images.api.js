import axios from "./axios";

export const imageMongo = (image, order) => {
    axios.post('/saveImage', { imageDataURL: image, order: order })
}
export const getImagesMongo = () => axios.get('/getImages')

export const deleteImageMongo = (id) => axios.delete(`/deleteImage/${id}`)