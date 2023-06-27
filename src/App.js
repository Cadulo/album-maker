import Upload from './pages/Upload.js';
import Form from './pages/Form.js'
import { Gallery } from './pages/Gallery.js'
import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.js';

// export const PageContext = createContext();


function App() {
  // const [curPage, setPage] = useState(1);
  // let page;
  // if (curPage === 1) {
  //   page = <Upload></Upload>
  // } else if (curPage === 2) {
  //   page = <div><Form></Form></div>
  // } else {
  //   page = <Gallery></Gallery>
  // }
  return (
    //   <PageContext.Provider value={{curPage, setPage}} >
    //   <Navbar></Navbar>
    //   {page}
    // </PageContext.Provider>
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Upload />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </div>


  );

}
export default App;
