import React from 'react'; 
//importer les pages
import Home from "./pages/Home"; 
import About from "./pages/About";
import Error from "./pages/ErrorPage";
import LogementPage from "./pages/LogementPage";
//importer les composants pour afficher des différentes pages
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// importer le style SASS
import "./styles/App.scss";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementPage/>} />  {/* Affiche page erreur si logement inexistant*/}
        <Route path="*" element={<Error />} />    {/* Affiche page erreur si l'url n'est pas dans les routes déclarées*/}
      </Routes>
    </HashRouter>
  );
}

export default App;





//hashrouter : permet de changer d'url compatible avec deploy sur github