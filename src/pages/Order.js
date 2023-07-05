import { useImage } from "../context/ImageContext";
import { MongoViewer } from "../components/MongoViewer"
import Navbar from "../components/navbar";

export const Order = () => {
    const {showImages, setShowImages} = useImage()
    return (

        <div className="container mx-auto dark:text-white  dark:bg-slate-900">
          <Navbar></Navbar>
            <div> Mi pedido: </div>
            <div className="flex justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
            onClick={() => setShowImages(true)}
          >
           Ver pedido 
          </button>
        </div>
        <MongoViewer showImages={showImages}></MongoViewer>
        </div>
    )
}