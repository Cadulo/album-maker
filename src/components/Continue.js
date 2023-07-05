import React, { useState} from "react";
import { useImage } from "../context/ImageContext";
import { useNavigate} from "react-router-dom";

function Continue({ uploadToS3 }) {
    const [isLoading, setIsLoading] = useState(false); //En caso que las imagenes se esten cargando en S3
    const { images } = useImage();
    const navigate = useNavigate()
    const handleContinue = async () => {
        setIsLoading(true);
        try {
            navigate("/form")
        } catch (error) {
            console.log("Error al cargar a las imagenes", error);

         
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