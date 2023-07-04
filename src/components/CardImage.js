
import { useAuth } from "../context/AuthContext";


function CardImage({ onDelete, index, id,indexMongo, imageDataURL, listFiles, setListFiles }) {
  const { deleteFromMongo } = useAuth();

  const handleDelete = () => {
    try {
      onDelete(index);
    } catch (error) {
      try {
        deleteFromMongo(id);
        const updatedImages = [...listFiles];
        updatedImages.splice(indexMongo, 1); // Elimina la imagen en el índice dado
        setListFiles(updatedImages);
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageDataURL} className="w-50 h-48 object-cover" alt="" />
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardImage;
