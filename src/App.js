import React from 'react'; 
import "./styles/App.scss";
//importer les composants pour afficher des différentes pages
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
//importer les pages
import Home from "./pages/Home"; 
import About from "./pages/About";
import Error from "./pages/ErrorPage";
import LogementPage from "./pages/LogementPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementPage/>} />    
        <Route path="*" element={<Error />} />                      
      </Routes>
    </HashRouter>
  );
}

export default App;


// Fichier App.js pour le configuration des routes et la structure de base de l'application
// Page erreur si logement inexistant
// Page erreur si l'url n'est pas dans les routes déclarées
// hashrouter : permet de changer d'url compatible avec deploy sur github