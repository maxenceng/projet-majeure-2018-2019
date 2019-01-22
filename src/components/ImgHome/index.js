import React from 'react';
import './index.scss';
import SearchBar from '../../containers/SearchBar';

/*
  Affichage de la SeachBar pour rechercher les événements en fonction d'un nom.
*/
const ImgHome = () => (
  <div className="imgHome">
    <SearchBar />
  </div>
);

export default ImgHome;
