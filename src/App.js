import Upload from './pages/Upload.js';
import Form from './pages/Form.js'
import { Gallery } from './pages/Gallery.js'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
import { AuthProvider } from './context/AuthContext.js';
import Navbar from './components/navbar.js'
import './App.css';

import { Route, Routes } from 'react-router-dom'


import ProtectedRoute from './ProtectedRoute.js';


function App() {

  return (
    <AuthProvider>
      <div>
        
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Upload />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Route>

        </Routes>
      </div>
    </AuthProvider>



  );

}
export default App;
