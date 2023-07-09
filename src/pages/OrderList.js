
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useOrder } from "../context/OrderContext";
import { Order } from "../components/Order";


export const OrderList = () => {
  const { getOrder } = useOrder();
  const [isLoading, setIsLoading] = useState(false);
  const [listFiles, setListFiles] = useState([]);
  const [showBotton, setShowBotton] = useState(false)
  setShowBotton(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getOrder();
        setListFiles(res);
        console.log(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto dark:text-white  dark:bg-slate-900">
      <Navbar></Navbar>
      {listFiles.length !== 0 ? (
        <div className="text-center text-2xl font-bold my-8">Mis órdenes:</div>
      ) : (
        <div className="text-center text-2xl font-bold my-8">
          Aún no tienes órdenes
        </div>
      )}
      {isLoading ? (
        <div>
          <div className="text-center text-2xl font-bold my-8">Cargando...</div>
        </div>
      ) : (
        listFiles &&
        listFiles.length > 0 && (
          <div className="flex flex-column justify-center mt-4 mx-4 ">
            <div className="">
              {listFiles.map((file, index) => {
                return (
                  <div key={index} className=" text-black">
                    <table className="min-w-full bg-white border border-gray-300 mb-4 ">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b ">Estado</th>
                          <th className="py-2 px-4 border-b ">Courier</th>              
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <td className="py-2 px-4 border-b ">{file.status}</td>
                          <td className="py-2 px-4 border-b ">{file.courier}</td>
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
};
