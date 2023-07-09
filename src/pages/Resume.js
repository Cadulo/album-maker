import React, { useState } from "react";
import { useImage } from "../context/ImageContext";
import { Viewer } from "../components/Viewers/Viewer";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import Navbar from "../components/navbar.js";

export const Resume = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { images, setImages, upLoadToMongo, formData, setFormData } =
    useImage();

  const { uploadOrder } = useOrder();

  const navigate = useNavigate();

  const onLoad = async () => {
    setIsLoading(true);
    try {
      const { order } = await uploadOrder(formData);
      for (const imageDataURL of images) {
        await upLoadToMongo(imageDataURL, order);
      }
      setImages([]);
      setFormData({
        nombre: "",
        direccion: "",
        ciudad: "",
        codigoPostal: "",
        direccionEnvio: "",
        ciudadEnvio: "",
        codigoPostalEnvio: "",
        repeatData: false,
      });
      alert("Pedido procesado con exito!");
      navigate("/");
    } catch (error) {
      console.log("Error al cargar a las imagenes", error);
    }
  };

  return (
    <div className="container mx-auto dark:text-white  dark:bg-slate-900">
      <Navbar></Navbar>
      <div className="text-center mt-4  dark:text-white">Revisa tu pedido!</div>
      <Viewer></Viewer>
      <div className="flex justify-center">
        {isLoading ? (
          <div>
            <div className="text-center text-2xl font-bold my-8">
              Cargando...
            </div>
          </div>
        ) : (
          <>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
              onDoubleClick={() => onLoad()}
            >
              Subir
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
              <Link to="/form"> Retroceder </Link>
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
};
