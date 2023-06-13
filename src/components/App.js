
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <div className="App">
    <NavBar/>

    <Routes>
      <Route />



      <Route path="*" element={<NotFound/>} />

   
    </Routes>
      
    </div>
  );
}

export default App;
