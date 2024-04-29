import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import WhatsappLink from './WhatsappLink';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whatsapplink" element={<WhatsappLink />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
