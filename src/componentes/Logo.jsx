import React from 'react';
import logo_url from '../imagenes/logo.png';
import '../hojas-de-estilo/Logo.css';

const Logo = ({ nombre }) => {
  return(
    <div className= 'logo-contenedor'>
      <img 
        src = {logo_url}
        alt = {`Logo de ${nombre}.`}
        className= 'logo'
      />
    </div>
  );
};

export default Logo;