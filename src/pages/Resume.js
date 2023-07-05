import React from "react";
import { useImage } from "../context/ImageContext";
import { Viewer } from "../components/Viewer";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.js";

export const Resume = () => {
  // const [showImages, setShowImages] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);
  const {
    images,
    setImages,
    setShowImages,
    setShowMessage,
    upLoadToMongo,
  } = useImage();
  setShowMessage(false);
  setShowImages(true)
  const navigate = useNavigate();

  const onLoad = async () => {
    try {
      // await S3Uploader(images);
      for (const imageDataURL of images) {
        await upLoadToMongo(imageDataURL);
      }
      setImages([]);
      navigate("/");
    } catch (error) {
      console.log("Error al cargar a las imagenes", error);
    }
  };

  return (
    <div className="container mx-auto dark:text-white  dark:bg-slate-900">
      <Navbar></Navbar>
      <div className="text-center mt-4  dark:text-white">
        {" "}
        Revisa tu pedido!
      </div>
      <Viewer></Viewer>
      <div className="flex justify-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
          onDoubleClick={() => onLoad()}
        >
          Subir
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
          <Link to="/form"> Retroceder </Link>
        </button>
      </div>
    </div>
  );
};
