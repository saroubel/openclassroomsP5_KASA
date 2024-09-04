import React from 'react'; 
import './App.css';
//importer les pages
import Home from "./pages/Home"; 
import About from "./pages/About";
import Error from "./pages/Error";
import LogementDetail from "./pages/LogementDetail";
//importer react-router-dom pour les liens de navigation 
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementDetail />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
