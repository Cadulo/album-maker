import { useEffect, useState } from "react";
import CardImage from "./CardImage";
import { useImage } from "../context/ImageContext";

export const MongoViewer = ({ showImages }) => {
  const { downLoadFromMongo } = useImage();
  // const [showImages,setShowImages] = useState(false)
  const [listFiles, setListFiles] = useState([]);
  const [isLoading, setIsLoading] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await downLoadFromMongo();
        console.log(res);
        setListFiles(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al descargar desde MongoDB:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? ( showImages && (
        <div>
          <div className="text-center text-2xl font-bold my-8">Cargando...</div>
        </div> )
      ) : (
        <div className="dark:bg-slate-900 dark:text-white">
          {showImages && listFiles && listFiles.length > 0 && (
            <>
              {" "}
              <div className="grid  grid-col-1 justify-center">
                <div className="text-center">
                  Tienes un total de {listFiles.length} imagenes, el cual tiene
                  un costo de {listFiles.length * 2.5}
                </div>
              </div>
              <div className="flex justify-center mt-4 mx-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {listFiles.map((file, index) => (
                    <CardImage
                      id={file._id}
                      key={file._id}
                      imageDataURL={file.imageData}
                      indexMongo={index}
                      listFiles={listFiles}
                      setListFiles={setListFiles}
                      ShowButton={true}
                    ></CardImage>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
