import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import { PageContext } from "../App";
import { S3Viewer } from "../components/S3Viewer";

export const Gallery = () => {
    const { setPage } = useContext(PageContext);
    const [showImages,setShowImages] = useState(false)

    return (
        <div >
            <div className='text-center mt-4  dark:text-white'> Gracias por su compra!</div>
             <div className="flex justify-center">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                    onClick={() => setShowImages(true)}
                >
                    Mostrar imagenes
                </button>
            </div>
            <S3Viewer showImages={showImages}></S3Viewer>
            <div className="flex justify-center">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                    onClick={() => setPage(2)}
                >
                    Retroceder
                </button>
            </div>



        </div>
    )
}
