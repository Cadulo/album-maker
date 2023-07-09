import { orderMongo, getOrderMongo, getBillMongo,getShippingMongo, getOrderAdminMongo,updateOrderMongo } from "../api/order.api";
import { createContext, useContext } from "react";

export const OrderContext = createContext();

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used with an OrderProvider");
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const uploadOrder = async (formData) => {
    try {
      const res = await orderMongo(formData);
      console.log("Orden creada");
      return res.data; //Devuelve id de orden
    } catch (error) {
      console.log(error.response);
    }
  };

  const getOrder = async () => {
    try {
      const res = await getOrderMongo()
      return res.data
    } catch (error) {
      console.log(error.response);
    }
  };

  const getBill = async (id) => {
    try {
     
      const res = await getBillMongo(id)
   
      return res.data
    } catch (error) {
      console.log(error.response);
    }
  };

  const getShipping = async (id) => {
    try {
      const res = await getShippingMongo(id)
      return res.data
    } catch (error) {
      console.log(error.response);
    }
  };

  const getOrderAdmin = async () => {
    try {
      const res = await getOrderAdminMongo()
      return res.data
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateOrderAdmin = async (orderId, status, courier) => {
    
    try {
      updateOrderMongo(orderId, status, courier)
    } catch (error) {
      console.log(error.response);
    }
  }


  return (
    <OrderContext.Provider
      value={{
        uploadOrder, getOrder, getBill, getShipping, getOrderAdmin, updateOrderAdmin
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
