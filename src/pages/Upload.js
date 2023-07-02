import { useState, createContext } from "react";
import { S3Uploader } from "../components/S3Uploader";
import { S3Viewer } from "../components/S3Viewer";
import { Link } from "react-router-dom";
import Grid from "../components/Grid";
import Navbar from '../components/navbar.js'
export const ImagesContext = createContext([]);

function Upload() {
    const [images, setImages] = useState([]);
    const [showImages, setShowImages] = useState(false)

    const onChange = async (e) => {
        const files = Array.from(e.target.files);

        const readerPromises = files.map((file) => {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            const promise = new Promise((resolve) => {
                reader.onload = (event) => {
                    const imageDataURL = event.target.result;
                    resolve(imageDataURL);
                };
            });

            return promise;
        });

        await Promise.all(readerPromises).then((results) => {
            const updatedImages = [...results, ...images]
            setImages(updatedImages);
        });
    };


    return (

        <div className="container mx-auto px-4  dark:text-white  dark:bg-slate-900">
           <Navbar></Navbar>
            <div className="relative h-60 w-75 border-4 border-gray-300 mt-16">
                <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" multiple onChange={onChange} />
                <div className="flex items-center justify-center h-full">
                    <h3>Drag and drop or select your images</h3>
                </div>
            </div>

            <ImagesContext.Provider value={{ images, setImages }}>
                <S3Uploader></S3Uploader>
                <Grid ></Grid>
                {/* <div className="flex justify-center">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                    onClick={() => setShowImages(true)}
                >
                    Mostrar imagenes subidas
                </button>
            </div>
                <S3Viewer showImages={showImages}></S3Viewer> */}
            </ImagesContext.Provider>
        </div>
    );
}

export default Upload