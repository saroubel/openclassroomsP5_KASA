import React from 'react';
import '../styles/Gallery.scss';
import Logements from '../data/logements.json';
import Card from './Card';

function Gallery() {
    return (
      <div className="gallery">
        {/* map pour créer une liste des cards avec le composant Card + ses props id, image et title */}
        {Logements.map((logement) => (
          <Card
            id={logement.id}
            image={logement.cover}
            title={logement.title}
          />
        ))}       
      </div>
    );
}

export default Gallery;