import { createContext, useState, useContext, useEffect } from 'react'
import { imageMongo,getImagesMongo,deleteImageMongo } from '../api/images.api'

export const ImageContext = createContext()

export const useImage = () => {
    const context = useContext(ImageContext)
    if (!context) {
        throw new Error("useImage must be used with an ImageProvider")
    }
    return context
}

export const ImageProvider = ({children}) => {
    const [images, setImages] = useState([]);
    const [showImages, setShowImages] = useState(false);
    const [showMessage, setShowMessage] = useState(false)

    const upLoadToMongo = async (imageDataUrl) =>{
      
        try {
            const res = await imageMongo(imageDataUrl)
            console.log(res.data)

        } catch (error) {
            console.log(error.response)
        }
    }

    const downLoadFromMongo = async () => {
        try {
            const res = await getImagesMongo()
            return res.data
        }
        catch(error) {
            console.log(error.response)
        }
    }

    const deleteFromMongo = async (id) => {
        
        try {
            console.log(id)
            const res = await deleteImageMongo(id);  
            return res
        } catch (error) {
            console.log(error);
          
        }
    }

    return(
        <ImageContext.Provider value = {{
            images,
            setImages,
            showImages, 
            setShowImages,
            showMessage, 
            setShowMessage,
            upLoadToMongo,
            downLoadFromMongo,
            deleteFromMongo
             }}>
            {children}
        </ImageContext.Provider>
    )
}