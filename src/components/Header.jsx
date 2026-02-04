import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            INFORMÁTICA <span>EXPRESS</span>
          </Link>
        </div>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/servicos" className="nav-link">Serviços</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </nav>
        {/* Botão de Orçamento no Header para converter clientes rápido */}
        <div className="header-cta">
          <a href="https://wa.me/5537998126948" target="_blank" rel="noopener noreferrer" className="btn-header">
            Orçamento Grátis
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;