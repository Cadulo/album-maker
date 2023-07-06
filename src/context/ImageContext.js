import { createContext, useState, useContext } from "react";
import {
  imageMongo,
  getImagesMongo,
  deleteImageMongo,
} from "../api/images.api";

export const ImageContext = createContext();

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used with an ImageProvider");
  }
  return context;
};

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    direccionEnvio: "",
    codigoPostalEnvio: "",
    ciudadEnvio: "",
    repeatData: false,
  });

  const upLoadToMongo = async (imageDataUrl) => {
    try {
      const res = await imageMongo(imageDataUrl);
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const downLoadFromMongo = async () => {
    try {
      const res = await getImagesMongo();
      return res.data;
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteFromMongo = async (id) => {
    try {
      console.log(id);
      const res = await deleteImageMongo(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        setImages,
        upLoadToMongo,
        downLoadFromMongo,
        deleteFromMongo,
        formData,
        setFormData,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
