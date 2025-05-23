import React from 'react'
import './styleEstaticos.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Urbaniza</h2>
          <p>Estilo urbano para todos</p>
        </div>
        
        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Urbaniza. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
