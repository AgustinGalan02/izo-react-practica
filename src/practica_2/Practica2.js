import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './components/Practica2.css'; // Importa el archivo CSS


function Practica2() {
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
  };

  const externalLinks = [
    { text: 'Página 1', url: 'https://rosariocentral.com' },
    { text: 'Página 2', url: 'https://alicante.com.ar/91-receta-chipa' },
  ];

  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody} externalLinks={externalLinks} />
    </div>
  );
}

export default Practica2;
