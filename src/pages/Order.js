import { useImage } from "../context/ImageContext";
import { MongoViewer } from "../components/MongoViewer"
import Navbar from "../components/navbar";
import { useState } from "react";

export const Order = () => {
    const { setShowImages} = useImage()
    const [isLoading] = useState(false);

    return (

        <div className="container mx-auto dark:text-white  dark:bg-slate-900">
          <Navbar></Navbar>
            <div> Mi pedido: </div>
            <div className="flex justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
            onClick={() => { 
              setShowImages(true)}}
          >
           Ver pedido 
          </button>
        </div>
        {isLoading ? (
                    <div>
                        <div className="text-center text-2xl font-bold my-8">Cargando...</div>
                    </div>
                ) : (
        <MongoViewer  ></MongoViewer>)}
        </div>
    )
}