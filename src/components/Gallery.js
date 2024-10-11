import React from 'react';
import Logements from '../data/logements.json';  
import Card from './Card';

function Gallery() {
    return (
      <div className="gallery">
        {/* map pour créer une liste des cards avec le composant Card + ses props id, image et title */}
        {Logements.map((logement) => (
          <Card key={logement.id}
            id={logement.id}
            image={logement.cover}
            title={logement.title}
          />
        ))}       
      </div>
    )
}

export default Gallery;



// Composant Gallery affiche une collection de logements sous forme de cartes
// Il importe les données de logements depuis un fichier JSON 
// Il utilise le composant Card pour représenter chaque logement
// La méthode map() pour créer dynamiquement une Card pour chaque logement en passant les props (id, image, titre)
