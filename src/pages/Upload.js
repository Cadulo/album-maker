import Continue from "../components/Continue"
import Grid from "../components/Grid";
import Navbar from "../components/navbar.js";
import { useImage } from "../context/ImageContext";


function Upload() {
  const {images, setImages,} = useImage()  
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
      const updatedImages = [...results, ...images];
      setImages(updatedImages);
    });
  };

  return (
    <div className="container mx-auto dark:text-white  dark:bg-slate-900">
      <Navbar></Navbar>
      <div className="relative h-60 w-75 border-4 border-gray-300 mt-16">
        <input
          className="absolute inset-0 opacity-0 cursor-pointer"
          type="file"
          multiple
          onChange={onChange}
        />
        <div className="flex items-center justify-center h-full">
          <h3>Drag and drop or select your images</h3>
        </div>
      </div>

        <Continue></Continue>
        <Grid></Grid>
        {/* <div className="flex justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
            onClick={() => setShowImages(true)}
          >
           Ver pedido anterior
          </button>
        </div>
        <MongoViewer showImages={showImages}></MongoViewer> */}

    </div>
  );
}

export default Upload;
