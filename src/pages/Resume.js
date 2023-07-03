import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { S3Viewer } from "../components/S3Viewer";
import { Link } from "react-router-dom";
import { MongoViewer } from "../components/MongoViewer";

export const Resume = () => {
  const [showImages, setShowImages] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
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
      <S3Viewer showImages={showImages} showMessage={showMessage}></S3Viewer>
      <div className="flex justify-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
          <Link to="/form"> Retroceder </Link>
        </button>
      </div>
    </div>
  );
};
