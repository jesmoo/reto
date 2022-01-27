import React from 'react';
import iconLadrillo from '../assets/icons/Fill4.svg';
import '../style/components/Header.css';

const Header = () => {
  return (
    <header className="container__header">
      <section className="links-navbar">
        <a href="https://www.100ladrillos.com/how-it-works">Como funciona</a>
        <a href="https://www.100ladrillos.com/how-it-works">Entrar</a>
      </section>
      <img src={iconLadrillo} alt="100Ladrillos icon" className="header-icon" />
    </header>
  );
};

export default Header;
