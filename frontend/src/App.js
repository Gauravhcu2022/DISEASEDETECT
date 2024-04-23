// App.js
import React from 'react';
import ImageUpload from './ImageUpload';
import './App.css'
import recproducts from './components/recproducts/Recproducts';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Disease from './Pages/Disease';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar />
        <Routes>
          <Route path='/' element={<ImageUpload/>} />
          <Route path='disease' element={<Disease/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
