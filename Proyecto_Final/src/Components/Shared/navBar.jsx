import React from 'react';
import { Link } from 'react-router-dom'; // Si usas react-router para navegación
import './navBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MiLogo</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
