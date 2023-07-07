import { orderMongo } from "../api/order.api";
import { createContext, useContext } from "react";

export const OrderContext = createContext()

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
      throw new Error("useOrder must be used with an OrderProvider");
    }
    return context;
  };

export const OrderProvider = ({children}) =>{

    const uploadOrder = async (formData) =>{
        try {
            const res = await orderMongo(formData);
            console.log("Orden creada")
            return res.data;
          } catch (error) {
            console.log(error.response);
          }
    }


    return(
        <OrderContext.Provider  value={{
            uploadOrder
          }}>
            {children}
        </OrderContext.Provider >

    )
}