import React from 'react';
import './nav-bar.scss';

function NavigationBar(): JSX.Element {
  return (
    <nav>
      <a href="/home">
        <p className="section-title">
          Inicio
        </p>
      </a>
      <a href="/explore">Explore</a>
      <a href="/notifications">Notificaciones</a>
      <a href="/messages">Mensajes</a>
    </nav>
  );
}

export default NavigationBar;
