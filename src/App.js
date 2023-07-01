import Upload from './pages/Upload.js';
import Form from './pages/Form.js'
import { Gallery } from './pages/Gallery.js'
import Register from './pages/Register.js'
import Login from './pages/Login.js'

import './App.css';

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.js';



function App() {
  
  return (
 
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Upload />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </div>


  );

}
export default App;
