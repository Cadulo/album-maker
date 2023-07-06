import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.js";
import { useImage } from "../context/ImageContext";
function Form() {
  const navigate = useNavigate();

  const { formData, setFormData, images } = useImage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = value;
    console.log(e.target);
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;

    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        direccionEnvio: prevData.direccion,
        ciudadEnvio: prevData.ciudad,
        codigoPostalEnvio: prevData.codigoPostal,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        direccionEnvio: "",
        ciudadEnvio: "",
        codigoPostalEnvio: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const message = () => {
    if (
      formData.nombre.trim() !== "" &&
      formData.direccion.trim() !== "" &&
      formData.ciudad.trim() !== "" &&
      formData.codigoPostal.trim() !== "" &&
      formData.direccionEnvio !== "" &&
      formData.codigoPostalEnvio !== "" &&
      formData.ciudadEnvio !== ""
    ) {
      if (images.length !== 0) {
        navigate("/resume");
      } else {
        alert("No tienes imagenes agregadas");
        navigate("/");
      }
    } else {
      alert("Llena todos los campos!");
    }
  };

  return (
    <div className="container mx-auto dark:text-white  dark:bg-slate-900">
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4  dark:text-white">
          Datos de facturación
        </h2>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2  dark:text-white">
            Nombre completo:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded  dark:text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block mb-2  dark:text-white">
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded  dark:text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ciudad" className="block mb-2  dark:text-white">
            Ciudad:
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded dark:text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="codigoPostal" className="block mb-2  dark:text-white">
            Código Postal:
          </label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded  dark:text-black"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="repeatData"
            name="repeatData"
            // checked={formData.repeatData}
            onChange={handleCheckboxChange}
            className=" mr-2"
          />
          <label htmlFor="repeatData" className=" dark:text-white">
            Utilizar los mismos datos de facturación para la entrega
          </label>
        </div>
        <h2 className="text-2xl font-bold mb-4  dark:text-white">
          Datos de envío
        </h2>
        <div className="flex mb-4">
          <div className="mr-4">
            <label
              htmlFor="direccionEnvio"
              className="block mb-2  dark:text-white"
            >
              Dirección:
            </label>
            <input
              type="text"
              id="direccionEnvio"
              name="direccionEnvio"
              value={formData.direccionEnvio}
              onChange={handleChange}
              readOnly={formData.repeatData}
              className="w-full p-2 border border-gray-300 rounded  dark:text-black"
            />
          </div>
          <div className="mr-4">
            <label htmlFor="ciudadEnvio" className="block mb-2 dark:text-white">
              Ciudad:
            </label>
            <input
              type="text"
              id="ciudadEnvio"
              name="ciudadEnvio"
              value={formData.ciudadEnvio}
              onChange={handleChange}
              readOnly={formData.repeatData}
              className="w-full p-2 border border-gray-300 rounded  dark:text-black"
            />
          </div>
          <div>
            <label
              htmlFor="codigoPostalEnvio"
              className="block mb-2 dark:text-white"
            >
              Código Postal:
            </label>
            <input
              type="text"
              id="codigoPostalEnvio"
              name="codigoPostalEnvio"
              value={formData.codigoPostalEnvio}
              onChange={handleChange}
              readOnly={formData.repeatData}
              className="w-full p-2 border border-gray-300 rounded  dark:text-black"
            />
          </div>
        </div>{" "}
        <button
          type="submit"
          onClick={() => message()}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="#resume">Resumen del pedido </a>
        </button>{" "}
        <Link to="/">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8">
            Retroceder
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
