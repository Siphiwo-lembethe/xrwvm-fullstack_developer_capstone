<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';

// inside return():
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPanel from './components/Login/Login';
import Register from './components/Register/Register';

const Home = () => {
  return <div>Home - redirecting...</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
>>>>>>> Stashed changes
