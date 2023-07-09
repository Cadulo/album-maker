import CardImage from "./CardImage";
import { useImage } from "../context/ImageContext";

export const Viewer = () => {
  const { images, setImages,formData } = useImage();

  const deleteImage = (index) => {
    console.log(images.length)
    const updatedImages = [...images];
    updatedImages.splice(index, 1); // Elimina la imagen en el índice dado
    setImages(updatedImages);
   

  };

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="grid  grid-col-1 justify-center">
        <div className="text-center">
          Tienes un total de {images.length} imagenes, el cual tiene un costo de{" "}
          {images.length * 2.5}
        </div>
        <div>Pedido a nombre de: {formData.nombre}</div>
            <div>Direccion de envio: {formData.direccionEnvio}</div>
            <div>Ciudad de envio: {formData.ciudadEnvio}</div>
            <div>Codigo Postal: {formData.codigoPostalEnvio}</div>
      </div>

      <div className="flex justify-center mt-4 mx-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((imageDataURL, index) => (
            <div key={index}>
              <CardImage
                imageDataURL={imageDataURL}
                index={index}
                onDelete={deleteImage}
                ShowButton={false}
              ></CardImage>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
