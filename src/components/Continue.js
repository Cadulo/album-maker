import React, { useState, useContext } from "react";
import { ImagesContext } from "../pages/Upload";
import { PageContext } from "../App";


function Continue({ uploadToS3 }) {
    const { images } = useContext(ImagesContext);
    const { setPage } = useContext(PageContext);
    const [isLoading, setIsLoading] = useState(false);
    const handleContinue = async () => {
        setIsLoading(true);
        try {
            await uploadToS3();
            setPage(2);
        } catch (error) {
            console.log("Error al cargar a S3:", error);
            setPage(2); // Otra opción es mostrar un mensaje de error al usuario
        } finally {
            setIsLoading(false);
        }
    };

    if (images.length > 0) {
        return (
            <div className="flex justify-center gap-2">
                <div className="text-center text-2xl font-bold my-8">
                    Revisa las imágenes antes de subirlas!
                </div>
                {isLoading ? (
                    <div className="text-center text-2xl font-bold my-8">Cargando...</div>
                ) : (
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                        onClick={handleContinue}
                    // onClick={()=>setPage(2)}
                    >
                        Continuar
                    </button>
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