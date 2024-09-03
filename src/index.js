import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // à supprimer plus tard
// import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
