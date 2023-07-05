import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import { useImage } from "../context/ImageContext";

export const Viewer = () => {
  const { images, setImages, showImages, showMessage } = useImage();

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1); // Elimina la imagen en el índice dado
    setImages(updatedImages);
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {showMessage && (
        <div className="grid  grid-col-1 justify-center">
          <div className="text-center">
            Tienes un total de {images.length} imagenes, el cual tiene un costo
            de {images.length * 2.5}
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
            <Link to="/resume"> Continuar</Link>
          </button>
        </div>
      )}
      {showImages && (
        <div className="flex justify-center mt-4 mx-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imageDataURL, index) => (
              <div key={index}>
                <CardImage
                  imageDataURL={imageDataURL}
                  index={index}
                  onDelete={deleteImage}
                ></CardImage>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};