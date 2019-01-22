import React from 'react';
import ImgHome from '../src/components/ImgHome';
import AllEvents from '../src/containers/AllEvents/index';

/*
  Affichage de la page d'accueil du site.
  Parallax entre l'image de recherche et l'affichage de tous les événements.
*/
const Index = () => (
  <div className="home">
    <div id="parallax">
      <div className="back">
        <ImgHome />
      </div>
      <div className="front">
        <AllEvents key="1" />
      </div>
    </div>
  </div>
);

export default Index;
