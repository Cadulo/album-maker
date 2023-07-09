import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useOrder } from "../context/OrderContext";
import { Order } from "../components/Order";
import { useAuth } from "../context/AuthContext";

export const PanelOrders = () => {
  const { user } = useAuth();
  const { getOrderAdmin, updateOrderAdmin } = useOrder();
  const [isLoading, setIsLoading] = useState(false);
  const [listFiles, setListFiles] = useState([]);
  const [status, setStatus] = useState();
  const [courier, setCourier] = useState();
  const [message, setMessage] = useState();
  const [orderId, setOrderId] = useState();
 
  const [showBotton, setShowBotton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getOrderAdmin();
        console.log(res);
        setListFiles(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fetchData();
  }, []);

  const update = async (orderId, status, courier) => {
    try {
      await updateOrderAdmin(orderId, status, courier);
      window.location.reload()
    } catch (error) {
      console.error("Error ", error);
    }
  };

  if (user.isAdmin || user.username === "admin") {
    return (
      <div className="container mx-auto dark:text-white  dark:bg-slate-900">
        <Navbar></Navbar>
        {listFiles &&
          (listFiles.length !== 0 ? (
            <div className="text-center text-2xl font-bold my-8">
              Administra:
            </div>
          ) : (
            <div className="text-center text-2xl font-bold my-8">
              No hay nada que administrar aún
            </div>
          ))}
        {isLoading ? (
          <div>
            <div className="text-center text-2xl font-bold my-8">
              Cargando...
            </div>
          </div>
        ) : (
          listFiles &&
          listFiles.length > 0 && (
            <div className="flex flex-column justify-center mt-4 mx-4">
              <div className="">
                <table>
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">Orden</th>
                      <th className="py-2 px-4 border-b">Estado</th>
                      <th className="py-2 px-4 border-b">Courier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={orderId}
                          onChange={(e) => setOrderId(e.target.value)}
                          placeholder="Ingresa la id de una orden..."
                          className="text-center"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          placeholder="Asigna un estado..."
                          className="text-center"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={courier}
                          onChange={(e) => setCourier(e.target.value)}
                          placeholder="Asigna un courier..."
                          className="text-center"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center">
                  {/* <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" Envia un mensaje..."
                    className="border resize-y truncate text-justify"
                  /> */}
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
                    onClick={() => {
                      update(orderId, status, courier);
                    }}
                  >
                    Actualizar orden
                  </button>
                </div>

                {listFiles.map((file, index) => {
                  return (
                    <div key={index} className="text-black border-2 my-11">
                      <table className="min-w-full bg-white border border-gray-300 mb-4 dark:text-dark">
                        <thead>
                          <tr>
                            <th className="py-2 px-4 border-b">Orden</th>
                            <th className="py-2 px-4 border-b">Estado</th>
                            <th className="py-2 px-4 border-b">Courier</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td className="py-2 px-4 border-b">
                                {file._id}
                                </td>
                            <td className="py-2 px-4 border-b">
                              {file.status}
                            </td>
                            <td className="py-2 px-4 border-b">
                              {file.courier}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <Order
                        billId={file.bill}
                        shippingId={file.shipping}
                        orderId={file._id}
                        key={index}
                        showBotton={showBotton}
                      ></Order>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    );
  } else {
    return <div>No estas autorizado para entrar a este sitio</div>;
  }
};
