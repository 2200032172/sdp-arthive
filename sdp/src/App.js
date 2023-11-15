import React from 'react';
import './App.css';
import Home from './Home';
import Register from './components/Register';
import FrontPage from './components/FrontPage';
//import Landingpage from './components/Landingpage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/frontpage" element={<FrontPage />} />
      </Routes>
    </div>
  );
};

export default App;
