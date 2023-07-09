import { MongoViewer } from "../components/MongoViewer";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useOrder } from "../context/OrderContext";
import { Order } from "../components/Order";

export const OrderList = () => {
  const { getOrder, getBill, getShipping } = useOrder();
  const [showImages, setShowImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [listFiles, setListFiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getOrder();
        setListFiles(res);
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
      <div> Mis ordenes: </div>
      {isLoading ? (
        <div>
          <div className="text-center text-2xl font-bold my-8">Cargando...</div>
        </div>
      ) : (
        listFiles &&
        listFiles.length > 0 && (
          <div className="flex flex-column justify-center mt-4 mx-4">
            <div className="">
              {listFiles.map((file, index) => {
                return <Order billId={file.bill} shippingId={file.shipping} key={index}></Order>;
              })}
            </div>
          </div>
        )
      )}
      {/* <div className="flex justify-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-8"
          onClick={() => {
            setShowImages(true);
          }}
        >
          Ver ordenes
        </button>
      </div>

      <MongoViewer showImages={showImages}></MongoViewer> */}
    </div>
  );
};
