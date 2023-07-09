import { useOrder } from "../context/OrderContext";
import { useEffect, useState } from "react";

export const Order = ({billId,shippingId}) => {
    const [showImages, setShowImages] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { getBill, getShipping } = useOrder();
    const [bill, setBill] = useState();
    const [shipping, setShipping] = useState();

    // console.log(file)

    useEffect(() => {
  
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const res = await getBill(billId);
          setBill(res);
          const res2= await getShipping(shippingId);
          setShipping(res2)
        } catch (error) {
          console.error("Error al descargar desde MongoDB:", error);
        } finally {
          setIsLoading(false);
          console.log(bill)
          console.log(shipping)
        }
      };
    
      fetchData();
    }, []);

    return(
      <div className="p-4 dark: text-black">
  <div>
    <h2 className="font-bold mb-2  text-dark dark:text-white">Factura</h2>
    <table className="min-w-full bg-white border border-gray-300 mb-4">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Dirección</th>
          <th className="py-2 px-4 border-b">Ciudad</th>
          <th className="py-2 px-4 border-b">Código Postal</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td className="py-2 px-4 border-b">{bill.nombre}</td>
          <td className="py-2 px-4 border-b">{bill.direccion}</td>
          <td className="py-2 px-4 border-b">{bill.ciudad}</td>
          <td className="py-2 px-4 border-b">{bill.codigoPostal}</td>
        </tr>
      </tbody>
    </table>

    <h2 className="font-bold mb-2 text-dark dark:text-white">Envío</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Dirección</th>
          <th className="py-2 px-4 border-b">Ciudad</th>
          <th className="py-2 px-4 border-b">Código</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4">{shipping.direccionEnvio}</td>
          <td className="py-2 px-4">{shipping.ciudadEnvio}</td>
          <td className="py-2 px-4">{shipping.codigoPostalEnvio}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="border-b border-gray-300 my-4"></div>
</div>
    )
}