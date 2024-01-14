import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeApp from './Components/PokeApp';
import './App.css';
import NavbarPoke from './Components/NavbarPoke';

function App() {
  return (
    <Router>
      <NavbarPoke />
      <Routes>
        <Route path="/generation" element={<PokeApp />} />
      </Routes>
    </Router>
  );
}

export default App;