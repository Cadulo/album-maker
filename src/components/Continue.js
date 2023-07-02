import React, { useState, useContext } from "react";
import { ImagesContext } from "../pages/Upload";
import { useAuth } from "../context/AuthContext";


import { Link } from "react-router-dom";

function Continue({ uploadToS3, uploadToMongo }) {
    const { images } = useContext(ImagesContext);
    
    const [isLoading, setIsLoading] = useState(false);
    const [showContinue, setShowContinue] = useState(true)
    const { upLoadToMongo } = useAuth();
    const handleContinue = async () => {
        setIsLoading(true);
        try {
            // await uploadToS3();
            for (const imageDataURL of images) {
                    await upLoadToMongo(imageDataURL);
            }
            setShowContinue(false)
        } catch (error) {
            console.log("Error al cargar a S3:", error);
            setShowContinue(false)
         
        }

    };

    if (images.length > 0) {
        return (
            <div className="flex justify-center gap-2">

                {isLoading ? (
                    <div>
                        {showContinue ? (<div className="text-center text-2xl font-bold my-8">Cargando...</div>) :
                            (<button
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                            >
                                <Link to="/form" >
                                    Continuar
                                </Link>
                            </button>
                            )}
                    </div>

                ) : (
                    <div className="flex">
                        <div className="text-center text-2xl font-bold my-8">
                            Revisa las imágenes antes de subirlas!
                        </div>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                            onClick={handleContinue}
                        >
                            Subir
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