import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { S3Viewer } from "../components/S3Viewer";
import { MongoViewer } from "../components/MongoViewer";
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
    showImages,
    setShowImages,
    showMessage,
    setShowMessage,
    upLoadToMongo,
  } = useImage();
  setShowMessage(false);
  const navigate = useNavigate();

  const onLoad = async () => {
    try {
      // await S3Uploader(images);
      for (const imageDataURL of images) {
        await upLoadToMongo(imageDataURL);
      }
      setImages([])
      navigate("/");
    } catch (error) {
      console.log("Error al cargar a las imagenes", error);
    }
  };

  return (
    <div className=" dark:bg-slate-900">
      <Navbar></Navbar>
      <div className="text-center mt-4  dark:text-white">
        {" "}
        Gracias por su compra!
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
          onClick={() => {
            setShowImages(true);
            setShowMessage(true);
          }}
        >
          Mostrar resumen
        </button>
      </div>
      {/* <S3Viewer showImages={showImages} showMessage={showMessage}></S3Viewer> */}
      <Viewer></Viewer>
      {/* <MongoViewer></MongoViewer> */}
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
        onDoubleClick={() => onLoad()}
      >
        Subir
      </button>
      <div className="flex justify-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
          <Link to="/form"> Retroceder </Link>
        </button>
      </div>
    </div>
  );
};
