//app.js
import React from 'react';
import './App.css';
import Home from './Home';
import Register from './components/Register';
import FrontPage from './components/FrontPage';
import ArtMagazine from './components/ArtMagazine';
import Aboutus from './components/Aboutus';
import ArtStore from './components/ArtStore';
import { Routes, Route } from 'react-router-dom';
import Pay from './components/pay';


const App = () => {
   const onToken = (token) => {
    console.log(token);
   };

  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/ArtMagazine" element={<ArtMagazine />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/ArtStore" element={<ArtStore />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
    
    
  );
};

export default App;


