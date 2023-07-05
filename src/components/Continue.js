import React, { useState, useContext } from "react";
import { ImagesContext } from "../pages/Upload";
import { S3Uploader } from "../api/s3";
import { useImage } from "../context/ImageContext";
import { useNavigate} from "react-router-dom";

function Continue({ uploadToS3 }) {
    const { images } = useContext(ImagesContext); 
    const [isLoading, setIsLoading] = useState(false); //En caso que las imagenes se esten cargando en S3
    const [showContinue, setShowContinue] = useState(true)
    const { upLoadToMongo } = useImage();
    const navigate = useNavigate()
    const handleContinue = async () => {
        setIsLoading(true);
        try {
            // await S3Uploader(images);
            // for (const imageDataURL of images) {
            //         await upLoadToMongo(imageDataURL);
            // }
            setShowContinue(false)
            navigate("/form")
        } catch (error) {
            console.log("Error al cargar a las imagenes", error);
            setShowContinue(false)
         
        }

    };

    if (images.length > 0) {
        return (
            <div className="flex justify-center gap-2">

                {isLoading ? (
                    <div>
                        <div className="text-center text-2xl font-bold my-8">Cargando...</div>
                        {/* {showContinue ? (<div className="text-center text-2xl font-bold my-8">Cargando...</div>) :
                            (<button
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                            >
                                <Link to="/form" >
                                    Continuar
                                </Link>
                            </button>
                            )} */}
                    </div>

                ) : (
                    <div className="flex">
                        <div className="text-center text-2xl font-bold my-8">
                            Ordena tu album de imágenes antes de solicitarlo!
                        </div>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                            onClick={handleContinue}
                        >
                            Continuar
                        </button>

                    </div>


                )}
            </div>
        );
    } else {
        return (
            <div className="text-center text-2xl font-bold my-8">¡Aún no hay para subir!</div>
        );
    }
}

export default Continue;