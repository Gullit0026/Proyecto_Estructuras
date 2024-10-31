// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa de servicios financieros dedicada a ofrecer soluciones de préstamos personalizadas para ayudarte a alcanzar tus metas.
          </p>
        </div>

        <div className="footer-section services">
          <h2>Servicios Financieros</h2>
          <ul>
            <li><a href="/prestamos-personales">Préstamos Personales</a></li>
            <li><a href="/prestamos-hipotecarios">Préstamos Hipotecarios</a></li>
            <li><a href="/prestamos-para-negocios">Préstamos para Negocios</a></li>
            <li><a href="/consolidacion-deudas">Consolidación de Deudas</a></li>
          </ul>
        </div>

        <div className="footer-section support">
            <div className="support-section">
                <h2>Asistencia al Cliente</h2>
                <ul>
                    <li><a href="/contacto">Contáctanos</a></li>
                    <li><a href="/faq">Preguntas Frecuentes</a></li>
                    <li><a href="/terminos">Términos y Condiciones</a></li>
                    <li><a href="/privacidad">Política de Privacidad</a></li>
                </ul>
            </div>
        </div>

        <div className="footer-section social">
          <h2>Síguenos</h2>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter />Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Servicios Financieros | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
