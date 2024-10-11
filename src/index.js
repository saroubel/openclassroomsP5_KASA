import React from 'react';                  //Importation de la bibliothèque React
import ReactDOM from 'react-dom/client';
import App from './App';                    //Importation du composant principal 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// Fichier index.js est le point de départ de l'application React
// Il configure l'environnement initial et rend le composant principal App dans le DOM 