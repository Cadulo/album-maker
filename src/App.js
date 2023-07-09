import Upload from "./pages/Upload.js";
import Form from "./pages/Form.js";
import { Resume } from "./pages/Resume.js";
import { OrderList } from "./pages/OrderList.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import { AuthProvider } from "./context/AuthContext.js";
import { ImageProvider } from "./context/ImageContext.js";
import { OrderProvider } from "./context/OrderContext.js";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import PanelOrders from "./pages/PanelOrders.js";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; //En chrome permite activar ventana emergente
      return event.returnValue;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);
  return (
    <AuthProvider>
      <ImageProvider>
        <OrderProvider>
          <div className="px-10 dark:bg-slate-900  dark:text-white">
            <Routes>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              {/* ===========> El panel de administración */}
              {/* <Route
                        path="/orders"
                        // element={<PanelOrders orders={orders} />}></Route> */}
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Upload />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/order" element={<OrderList />}>
                  {" "}
                </Route>
              </Route>
            </Routes>
          </div>
        </OrderProvider>
      </ImageProvider>
    </AuthProvider>
  );
}
export default App;
