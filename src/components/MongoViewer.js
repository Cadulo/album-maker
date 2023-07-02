import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import CardImage from "./CardImage";

export const MongoViewer = ({ showImages }) => {
  const { downLoadFromMongo } = useAuth();
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
  }, []);

  return (
    <div>
      {showImages && (
        <div className="flex justify-center mt-4 mx-4">
          {listFiles && listFiles.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {listFiles.map((file) => (
                <CardImage
                  key={file._id}
                  imageDataURL={file.imageData}
                ></CardImage>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};