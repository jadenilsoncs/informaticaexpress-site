import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="logo">
          INFORMÁTICA <span style={{ color: '#2196f3' }}>EXPRESS</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;