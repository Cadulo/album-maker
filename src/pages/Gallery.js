import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import { S3Viewer } from "../components/S3Viewer";
import { Link } from "react-router-dom";

export const Gallery = () => {
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
                >
                    <Link to="/form"> Retroceder </Link>
                </button>
            </div>



        </div>
    )
}
