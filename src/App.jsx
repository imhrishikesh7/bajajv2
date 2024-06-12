import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About Us/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from './Components/Discover/Discover';
import Float from './Components/Float/Float';
import BrandsBusiness from './Pages/Brands-and-Businesses/BrandsBusiness';
import Footer from './Components/Footer/Footer';
import Esg from './Pages/ESG/Esg';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
       
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/esg' element={<Esg />} />
          <Route path='/brands-business' element={<BrandsBusiness/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
