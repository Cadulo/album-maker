import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import { useImage } from "../context/ImageContext";

export const MongoViewer = () => {
  const { showImages,showMessage,  downLoadFromMongo } = useImage();
  const [listFiles, setListFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await downLoadFromMongo();
        console.log(res);
        setListFiles(res);
      } catch (error) {
        console.error("Error al descargar desde MongoDB:", error);
      }
    };
    fetchData();
  }, [showImages]);

  return (
    
    <div className="dark:bg-slate-900 dark:text-white">
       {showMessage && (
        <div className="grid  grid-col-1 justify-center">
          <div className="text-center">
            Tienes un total de {listFiles.length} imagenes, el cual tiene un
            costo de {listFiles.length * 2.5}
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
            <Link to="/resume"> Continuar</Link>
          </button>
        </div>
      )}
      {showImages && (
        <div className="flex justify-center mt-4 mx-4">
          {listFiles && listFiles.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {listFiles.map((file,index) => (
                <CardImage
                  id={file._id}
                  key={file._id}
                  imageDataURL={file.imageData}
                  indexMongo = {index}
                  listFiles = {listFiles }
                  setListFiles = {setListFiles}
                ></CardImage>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
 
  );
};