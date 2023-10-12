import React from 'react';
import './App.css';
import Home from './Home';
import Register from './components/Register';
import FrontPage from './components/FrontPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/FrontPage" element={<FrontPage />} />
      </Routes>
    </div>
  );
};

export default App;
