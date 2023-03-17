import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import Sticky from './components/Sticky';
import Formfill from './components/Formfill';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Header />
        {/* <Sticky /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Formfill/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;