import React, { useContext, useRef } from "react";
import { ImagesContext } from "../pages/Upload";
import CardImage from "./CardImage";



function Grid({ listFiles, formatUrl,deleteFromS3 }) {
    const { images, setImages } = useContext(ImagesContext);

    let dragItem = useRef();
    let dragOverItem = useRef();
    let dragOverItemIndex = useRef();
    let dragItemIndex = useRef();

    const dragStart = (e, index) => {
        dragItem.current = e.target
        dragItemIndex = index
    };

    const dragEnter = (e, index) => {
        dragOverItem.current = e.target
        dragOverItemIndex = index
    };

    const drop = () => {
        const dragIndex = dragItemIndex;
        const dropIndex = dragOverItemIndex;

        if (dragIndex === dropIndex) return;

        const images2 = [...images];
        const temp = images2[dragIndex];
        images2.splice(dragIndex, 1); //Elimina el elemento de su posición actual
        images2.splice(dropIndex, 0, temp); //Agrega el elemento en su posición final
        setImages(images2);

    };

    const deleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1); // Elimina la imagen en el índice dado
        setImages(updatedImages);
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((imageDataURL, index) => (
                    <div key={index}
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        draggable
                    >
                        <CardImage imageDataURL={imageDataURL} onDelete={deleteImage} index={index}>Delete</CardImage>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default Grid


