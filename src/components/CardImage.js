import { useAuth } from "../context/AuthContext";
function CardImage({ onDelete, index, key, imageDataURL }) {
  const { deleteFromMongo } = useAuth();

  const handleDelete = () => {
    try {
      onDelete(index);
      console.log(key)
    } catch (error) {
      deleteFromMongo(key);
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
