import Upload from "./pages/Upload.js";
import Form from "./pages/Form.js";
import { Resume} from "./pages/Resume.js";
import {Order} from "./pages/Order.js"
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import { AuthProvider } from "./context/AuthContext.js";
import { ImageProvider } from "./context/ImageContext.js";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.js";
import PanelOrders from "./pages/PanelOrders.js";

function App() {
    return (
        <AuthProvider>
            <ImageProvider>
            <div>
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
                        <Route path="/order" element={<Order />}> </Route>
                    </Route>
                </Routes>
            </div>
            </ImageProvider>
        </AuthProvider>
    );
}
export default App;
